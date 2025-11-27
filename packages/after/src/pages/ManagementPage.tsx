import React, { useState } from 'react';
import { Button, Alert, Table, Modal } from '../shared/ui';
import { useUserManagement, UserForm, UserStats } from '../features/user-management';
import { usePostManagement, PostForm, PostStats } from '../features/post-management';
import type { User } from '../features/user-management';
import type { Post } from '../features/post-management';

type EntityType = 'user' | 'post';

export const ManagementPage: React.FC = () => {
  const [entityType, setEntityType] = useState<EntityType>('post');

  // User management
  const userManagement = useUserManagement();
  const [userFormData, setUserFormData] = useState<any>({});
  const [isUserCreateModalOpen, setIsUserCreateModalOpen] = useState(false);
  const [isUserEditModalOpen, setIsUserEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Post management
  const postManagement = usePostManagement();
  const [postFormData, setPostFormData] = useState<any>({});
  const [isPostCreateModalOpen, setIsPostCreateModalOpen] = useState(false);
  const [isPostEditModalOpen, setIsPostEditModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  // Alert state
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  // User handlers
  const handleUserCreate = async () => {
    try {
      await userManagement.createUser({
        username: userFormData.username,
        email: userFormData.email,
        role: userFormData.role || 'user',
        status: userFormData.status || 'active',
      });
      setIsUserCreateModalOpen(false);
      setUserFormData({});
      setAlertMessage('사용자가 생성되었습니다');
      setShowSuccessAlert(true);
    } catch (error: any) {
      setShowErrorAlert(true);
    }
  };

  const handleUserEdit = (user: User) => {
    setSelectedUser(user);
    setUserFormData({
      username: user.username,
      email: user.email,
      role: user.role,
      status: user.status,
    });
    setIsUserEditModalOpen(true);
  };

  const handleUserUpdate = async () => {
    if (!selectedUser) return;
    try {
      await userManagement.updateUser(selectedUser.id, userFormData);
      setIsUserEditModalOpen(false);
      setUserFormData({});
      setSelectedUser(null);
      setAlertMessage('사용자가 수정되었습니다');
      setShowSuccessAlert(true);
    } catch (error: any) {
      setShowErrorAlert(true);
    }
  };

  const handleUserDelete = async (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;
    try {
      await userManagement.deleteUser(id);
      setAlertMessage('삭제되었습니다');
      setShowSuccessAlert(true);
    } catch (error: any) {
      setShowErrorAlert(true);
    }
  };

  // Post handlers
  const handlePostCreate = async () => {
    try {
      await postManagement.createPost({
        title: postFormData.title,
        content: postFormData.content || '',
        author: postFormData.author,
        category: postFormData.category,
        status: postFormData.status || 'draft',
      });
      setIsPostCreateModalOpen(false);
      setPostFormData({});
      setAlertMessage('게시글이 생성되었습니다');
      setShowSuccessAlert(true);
    } catch (error: any) {
      setShowErrorAlert(true);
    }
  };

  const handlePostEdit = (post: Post) => {
    setSelectedPost(post);
    setPostFormData({
      title: post.title,
      content: post.content,
      author: post.author,
      category: post.category,
      status: post.status,
    });
    setIsPostEditModalOpen(true);
  };

  const handlePostUpdate = async () => {
    if (!selectedPost) return;
    try {
      await postManagement.updatePost(selectedPost.id, postFormData);
      setIsPostEditModalOpen(false);
      setPostFormData({});
      setSelectedPost(null);
      setAlertMessage('게시글이 수정되었습니다');
      setShowSuccessAlert(true);
    } catch (error: any) {
      setShowErrorAlert(true);
    }
  };

  const handlePostDelete = async (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;
    try {
      await postManagement.deletePost(id);
      setAlertMessage('삭제되었습니다');
      setShowSuccessAlert(true);
    } catch (error: any) {
      setShowErrorAlert(true);
    }
  };

  const handlePostPublish = async (id: number) => {
    try {
      await postManagement.publishPost(id);
      setAlertMessage('게시되었습니다');
      setShowSuccessAlert(true);
    } catch (error: any) {
      setShowErrorAlert(true);
    }
  };

  const handlePostArchive = async (id: number) => {
    try {
      await postManagement.archivePost(id);
      setAlertMessage('보관되었습니다');
      setShowSuccessAlert(true);
    } catch (error: any) {
      setShowErrorAlert(true);
    }
  };

  const handlePostRestore = async (id: number) => {
    try {
      await postManagement.restorePost(id);
      setAlertMessage('복원되었습니다');
      setShowSuccessAlert(true);
    } catch (error: any) {
      setShowErrorAlert(true);
    }
  };

  const renderTableColumns = () => {
    if (entityType === 'user') {
      return [
        { key: 'id', header: 'ID', width: '60px' },
        { key: 'username', header: '사용자명', width: '150px' },
        { key: 'email', header: '이메일' },
        { key: 'role', header: '역할', width: '120px' },
        { key: 'status', header: '상태', width: '120px' },
        { key: 'createdAt', header: '생성일', width: '120px' },
        { key: 'lastLogin', header: '마지막 로그인', width: '140px' },
        { key: 'actions', header: '관리', width: '200px' },
      ];
    } else {
      return [
        { key: 'id', header: 'ID', width: '60px' },
        { key: 'title', header: '제목' },
        { key: 'author', header: '작성자', width: '120px' },
        { key: 'category', header: '카테고리', width: '140px' },
        { key: 'status', header: '상태', width: '120px' },
        { key: 'views', header: '조회수', width: '100px' },
        { key: 'createdAt', header: '작성일', width: '120px' },
        { key: 'actions', header: '관리', width: '250px' },
      ];
    }
  };

  const userStats = userManagement.getStats();
  const postStats = postManagement.getStats();
  const currentError = entityType === 'user' ? userManagement.error : postManagement.error;

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="max-w-[1200px] mx-auto p-5">
        <div className="mb-5">
          <h1 className="text-2xl font-bold mb-1 text-gray-800">
            관리 시스템
          </h1>
          <p className="text-gray-600 text-sm">
            사용자와 게시글을 관리하세요
          </p>
        </div>

        <div className="bg-white border border-gray-300 p-2.5">
          <div className="mb-4 border-b-2 border-gray-400 pb-1">
            <button
              onClick={() => setEntityType('post')}
              className={`px-4 py-2 mr-1 text-sm border border-gray-600 rounded cursor-pointer ${
                entityType === 'post'
                  ? 'font-bold bg-blue-600 text-white'
                  : 'font-normal bg-gray-100 text-gray-800'
              }`}
            >
              게시글
            </button>
            <button
              onClick={() => setEntityType('user')}
              className={`px-4 py-2 text-sm border border-gray-600 rounded cursor-pointer ${
                entityType === 'user'
                  ? 'font-bold bg-blue-600 text-white'
                  : 'font-normal bg-gray-100 text-gray-800'
              }`}
            >
              사용자
            </button>
          </div>

          <div>
            <div className="mb-4 text-right">
              <Button
                variant="primary"
                size="md"
                onClick={() => entityType === 'user' ? setIsUserCreateModalOpen(true) : setIsPostCreateModalOpen(true)}
              >
                새로 만들기
              </Button>
            </div>

            {showSuccessAlert && (
              <div className="mb-2.5">
                <Alert
                  variant="success"
                  title="성공"
                  onClose={() => setShowSuccessAlert(false)}
                >
                  {alertMessage}
                </Alert>
              </div>
            )}

            {showErrorAlert && (
              <div className="mb-2.5">
                <Alert
                  variant="error"
                  title="오류"
                  onClose={() => setShowErrorAlert(false)}
                >
                  {currentError || '작업에 실패했습니다'}
                </Alert>
              </div>
            )}

            {entityType === 'user' ? (
              <UserStats {...userStats} />
            ) : (
              <PostStats {...postStats} />
            )}

            <div className="border border-gray-300 bg-white overflow-auto">
              <Table
                columns={renderTableColumns()}
                data={entityType === 'user' ? userManagement.users : postManagement.posts}
                striped
                hover
                entityType={entityType}
                onEdit={entityType === 'user' ? handleUserEdit : handlePostEdit}
                onDelete={entityType === 'user' ? handleUserDelete : handlePostDelete}
                onPublish={entityType === 'post' ? handlePostPublish : undefined}
                onArchive={entityType === 'post' ? handlePostArchive : undefined}
                onRestore={entityType === 'post' ? handlePostRestore : undefined}
              />
            </div>
          </div>
        </div>
      </div>

      {/* User Modals */}
      <Modal
        isOpen={isUserCreateModalOpen}
        onClose={() => {
          setIsUserCreateModalOpen(false);
          setUserFormData({});
        }}
        title="새 사용자 만들기"
        size="large"
        showFooter
        footerContent={
          <>
            <Button variant="secondary" size="md" onClick={() => {
              setIsUserCreateModalOpen(false);
              setUserFormData({});
            }}>
              취소
            </Button>
            <Button variant="primary" size="md" onClick={handleUserCreate}>
              생성
            </Button>
          </>
        }
      >
        <UserForm formData={userFormData} onChange={setUserFormData} />
      </Modal>

      <Modal
        isOpen={isUserEditModalOpen}
        onClose={() => {
          setIsUserEditModalOpen(false);
          setUserFormData({});
          setSelectedUser(null);
        }}
        title="사용자 수정"
        size="large"
        showFooter
        footerContent={
          <>
            <Button variant="secondary" size="md" onClick={() => {
              setIsUserEditModalOpen(false);
              setUserFormData({});
              setSelectedUser(null);
            }}>
              취소
            </Button>
            <Button variant="primary" size="md" onClick={handleUserUpdate}>
              수정 완료
            </Button>
          </>
        }
      >
        <div>
          {selectedUser && (
            <Alert variant="info">
              ID: {selectedUser.id} | 생성일: {selectedUser.createdAt}
            </Alert>
          )}
          <UserForm formData={userFormData} onChange={setUserFormData} />
        </div>
      </Modal>

      {/* Post Modals */}
      <Modal
        isOpen={isPostCreateModalOpen}
        onClose={() => {
          setIsPostCreateModalOpen(false);
          setPostFormData({});
        }}
        title="새 게시글 만들기"
        size="large"
        showFooter
        footerContent={
          <>
            <Button variant="secondary" size="md" onClick={() => {
              setIsPostCreateModalOpen(false);
              setPostFormData({});
            }}>
              취소
            </Button>
            <Button variant="primary" size="md" onClick={handlePostCreate}>
              생성
            </Button>
          </>
        }
      >
        <PostForm formData={postFormData} onChange={setPostFormData} />
      </Modal>

      <Modal
        isOpen={isPostEditModalOpen}
        onClose={() => {
          setIsPostEditModalOpen(false);
          setPostFormData({});
          setSelectedPost(null);
        }}
        title="게시글 수정"
        size="large"
        showFooter
        footerContent={
          <>
            <Button variant="secondary" size="md" onClick={() => {
              setIsPostEditModalOpen(false);
              setPostFormData({});
              setSelectedPost(null);
            }}>
              취소
            </Button>
            <Button variant="primary" size="md" onClick={handlePostUpdate}>
              수정 완료
            </Button>
          </>
        }
      >
        <div>
          {selectedPost && (
            <Alert variant="info">
              ID: {selectedPost.id} | 생성일: {selectedPost.createdAt} | 조회수: {selectedPost.views}
            </Alert>
          )}
          <PostForm formData={postFormData} onChange={setPostFormData} />
        </div>
      </Modal>
    </div>
  );
};
