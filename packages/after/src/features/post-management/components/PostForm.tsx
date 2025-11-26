import React from 'react';
import { FormInput, FormSelect, FormTextarea } from '../../../shared/ui';
import type { PostFormData } from '../types/post.types';

interface PostFormProps {
  formData: Partial<PostFormData>;
  onChange: (data: Partial<PostFormData>) => void;
}

export const PostForm: React.FC<PostFormProps> = ({ formData, onChange }) => {
  return (
    <>
      <FormInput
        name="title"
        value={formData.title || ''}
        onChange={(value) => onChange({ ...formData, title: value })}
        label="제목"
        placeholder="게시글 제목을 입력하세요"
        required
        width="full"
        fieldType="postTitle"
      />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <FormInput
          name="author"
          value={formData.author || ''}
          onChange={(value) => onChange({ ...formData, author: value })}
          label="작성자"
          placeholder="작성자명"
          required
          width="full"
        />
        <FormSelect
          name="category"
          value={formData.category || ''}
          onChange={(value) => onChange({ ...formData, category: value })}
          options={[
            { value: 'development', label: 'Development' },
            { value: 'design', label: 'Design' },
            { value: 'accessibility', label: 'Accessibility' },
          ]}
          label="카테고리"
          placeholder="카테고리 선택"
          size="md"
        />
      </div>
      <FormTextarea
        name="content"
        value={formData.content || ''}
        onChange={(value) => onChange({ ...formData, content: value })}
        label="내용"
        placeholder="게시글 내용을 입력하세요"
        rows={6}
      />
    </>
  );
};
