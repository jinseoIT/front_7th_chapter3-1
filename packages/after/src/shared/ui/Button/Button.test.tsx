import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button 컴포넌트', () => {
  describe('기본 렌더링', () => {
    it('자식 텍스트와 함께 버튼을 렌더링한다', () => {
      render(<Button>Click Me</Button>);
      expect(screen.getByRole('button', { name: 'Click Me' })).toBeInTheDocument();
    });

    it('기본 variant(primary)로 렌더링한다', () => {
      render(<Button>Test</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('btn-primary');
    });

    it('기본 크기(md)로 렌더링한다', () => {
      render(<Button>Test</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('btn-md');
    });
  });

  describe('Variant', () => {
    it('primary variant를 렌더링한다', () => {
      render(<Button variant="primary">Primary</Button>);
      expect(screen.getByRole('button')).toHaveClass('btn-primary');
    });

    it('secondary variant를 렌더링한다', () => {
      render(<Button variant="secondary">Secondary</Button>);
      expect(screen.getByRole('button')).toHaveClass('btn-secondary');
    });

    it('danger variant를 렌더링한다', () => {
      render(<Button variant="danger">Danger</Button>);
      expect(screen.getByRole('button')).toHaveClass('btn-danger');
    });

    it('success variant를 렌더링한다', () => {
      render(<Button variant="success">Success</Button>);
      expect(screen.getByRole('button')).toHaveClass('btn-success');
    });
  });

  describe('크기', () => {
    it('small 크기를 렌더링한다', () => {
      render(<Button size="sm">Small</Button>);
      expect(screen.getByRole('button')).toHaveClass('btn-sm');
    });

    it('medium 크기를 렌더링한다', () => {
      render(<Button size="md">Medium</Button>);
      expect(screen.getByRole('button')).toHaveClass('btn-md');
    });

    it('large 크기를 렌더링한다', () => {
      render(<Button size="lg">Large</Button>);
      expect(screen.getByRole('button')).toHaveClass('btn-lg');
    });
  });

  describe('전체 너비', () => {
    it('전체 너비 버튼을 렌더링한다', () => {
      render(<Button fullWidth>Full Width</Button>);
      expect(screen.getByRole('button')).toHaveClass('btn-fullwidth');
    });

    it('기본적으로 전체 너비를 렌더링하지 않는다', () => {
      render(<Button>Normal</Button>);
      expect(screen.getByRole('button')).not.toHaveClass('btn-fullwidth');
    });
  });

  describe('버튼 타입', () => {
    it('기본적으로 button 타입으로 렌더링한다', () => {
      render(<Button>Test</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    });

    it('submit 타입으로 렌더링한다', () => {
      render(<Button type="submit">Submit</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });

    it('reset 타입으로 렌더링한다', () => {
      render(<Button type="reset">Reset</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'reset');
    });
  });

  describe('비활성화 상태', () => {
    it('비활성화된 버튼을 렌더링한다', () => {
      render(<Button disabled>Disabled</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('비활성화 시 onClick을 호출하지 않는다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(<Button disabled onClick={handleClick}>Disabled</Button>);

      await user.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('클릭 이벤트', () => {
    it('클릭 시 onClick 핸들러를 호출한다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Click Me</Button>);

      await user.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('onClick을 여러 번 호출한다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Click Me</Button>);

      const button = screen.getByRole('button');
      await user.click(button);
      await user.click(button);
      await user.click(button);

      expect(handleClick).toHaveBeenCalledTimes(3);
    });
  });

  describe('도메인 특정 로직 (사용자 엔티티)', () => {
    it('관리자 사용자의 삭제 버튼을 비활성화한다', () => {
      const adminUser = { role: 'admin', id: 1, name: 'Admin' };
      render(
        <Button entityType="user" action="delete" entity={adminUser}>
          Delete
        </Button>
      );
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('일반 사용자의 삭제 버튼을 활성화한다', () => {
      const regularUser = { role: 'user', id: 2, name: 'User' };
      render(
        <Button entityType="user" action="delete" entity={regularUser}>
          Delete
        </Button>
      );
      expect(screen.getByRole('button')).not.toBeDisabled();
    });

    it('사용자 생성을 위한 라벨을 자동 생성한다', () => {
      const entity = { role: 'user' };
      render(<Button entityType="user" action="create" entity={entity} />);
      expect(screen.getByRole('button')).toHaveTextContent('새 사용자 만들기');
    });

    it('사용자 수정을 위한 라벨을 자동 생성한다', () => {
      const entity = { role: 'user' };
      render(<Button entityType="user" action="edit" entity={entity} />);
      expect(screen.getByRole('button')).toHaveTextContent('수정');
    });
  });

  describe('도메인 특정 로직 (게시글 엔티티)', () => {
    it('이미 게시된 게시글의 게시 버튼을 비활성화한다', () => {
      const publishedPost = { status: 'published', id: 1, title: 'Post' };
      render(
        <Button entityType="post" action="publish" entity={publishedPost}>
          Publish
        </Button>
      );
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('임시저장 게시글의 게시 버튼을 활성화한다', () => {
      const draftPost = { status: 'draft', id: 2, title: 'Draft' };
      render(
        <Button entityType="post" action="publish" entity={draftPost}>
          Publish
        </Button>
      );
      expect(screen.getByRole('button')).not.toBeDisabled();
    });

    it('게시되지 않은 게시글의 보관 버튼을 비활성화한다', () => {
      const draftPost = { status: 'draft', id: 3, title: 'Draft' };
      render(
        <Button entityType="post" action="archive" entity={draftPost}>
          Archive
        </Button>
      );
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('게시된 게시글의 보관 버튼을 활성화한다', () => {
      const publishedPost = { status: 'published', id: 4, title: 'Published' };
      render(
        <Button entityType="post" action="archive" entity={publishedPost}>
          Archive
        </Button>
      );
      expect(screen.getByRole('button')).not.toBeDisabled();
    });

    it('게시글 생성을 위한 라벨을 자동 생성한다', () => {
      const entity = { status: 'draft' };
      render(<Button entityType="post" action="create" entity={entity} />);
      expect(screen.getByRole('button')).toHaveTextContent('새 게시글 만들기');
    });

    it('보관 액션을 위한 라벨을 자동 생성한다', () => {
      const entity = { status: 'published' };
      render(<Button entityType="post" action="archive" entity={entity} />);
      expect(screen.getByRole('button')).toHaveTextContent('보관');
    });
  });

  describe('자동 Variant 선택', () => {
    it('삭제 액션에 danger variant를 적용한다', () => {
      const entity = { id: 1 };
      render(
        <Button entityType="user" action="delete" entity={entity}>
          Delete
        </Button>
      );
      expect(screen.getByRole('button')).toHaveClass('btn-danger');
    });

    it('게시 액션에 success variant를 적용한다', () => {
      const entity = { status: 'draft' };
      render(
        <Button entityType="post" action="publish" entity={entity}>
          Publish
        </Button>
      );
      expect(screen.getByRole('button')).toHaveClass('btn-success');
    });

    it('보관 액션에 secondary variant를 적용한다', () => {
      const entity = { status: 'published' };
      render(
        <Button entityType="post" action="archive" entity={entity}>
          Archive
        </Button>
      );
      expect(screen.getByRole('button')).toHaveClass('btn-secondary');
    });
  });

  describe('Props 조합', () => {
    it('여러 클래스를 올바르게 렌더링한다', () => {
      render(
        <Button variant="primary" size="lg" fullWidth>
          Complex Button
        </Button>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveClass('btn');
      expect(button).toHaveClass('btn-primary');
      expect(button).toHaveClass('btn-lg');
      expect(button).toHaveClass('btn-fullwidth');
    });
  });
});
