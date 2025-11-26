import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../shared/ui';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success'],
      description: '버튼의 시각적 스타일 variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '버튼의 크기',
    },
    fullWidth: {
      control: 'boolean',
      description: '버튼을 전체 너비로 표시',
    },
    disabled: {
      control: 'boolean',
      description: '버튼 비활성화 상태',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'HTML 버튼 타입',
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Variants
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger Button',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success Button',
  },
};

// 크기 Variants
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

// 전체 너비
export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Full Width Button',
  },
  parameters: {
    layout: 'padded',
  },
};

// 비활성화 상태
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

// 도메인 로직 - 사용자 삭제 (관리자는 비활성화)
export const DeleteAdmin: Story = {
  args: {
    entityType: 'user',
    action: 'delete',
    entity: { role: 'admin', id: 1, name: 'Admin User' },
    children: 'Delete Admin',
  },
  parameters: {
    docs: {
      description: {
        story: '관리자 사용자는 삭제 버튼이 비활성화됩니다.',
      },
    },
  },
};

// 도메인 로직 - 일반 사용자 삭제
export const DeleteUser: Story = {
  args: {
    entityType: 'user',
    action: 'delete',
    entity: { role: 'user', id: 2, name: 'Regular User' },
    children: 'Delete User',
  },
  parameters: {
    docs: {
      description: {
        story: '일반 사용자는 삭제 버튼이 활성화됩니다.',
      },
    },
  },
};

// 도메인 로직 - 게시글 발행
export const PublishPost: Story = {
  args: {
    entityType: 'post',
    action: 'publish',
    entity: { status: 'draft', id: 1, title: 'Draft Post' },
    children: 'Publish Post',
  },
  parameters: {
    docs: {
      description: {
        story: '임시저장 상태의 게시글은 발행 버튼이 활성화됩니다.',
      },
    },
  },
};

// 도메인 로직 - 이미 발행된 게시글
export const PublishPublishedPost: Story = {
  args: {
    entityType: 'post',
    action: 'publish',
    entity: { status: 'published', id: 2, title: 'Published Post' },
    children: 'Publish Post',
  },
  parameters: {
    docs: {
      description: {
        story: '이미 발행된 게시글은 발행 버튼이 비활성화됩니다.',
      },
    },
  },
};

// 도메인 로직 - 사용자 생성 (자동 라벨)
export const CreateUser: Story = {
  args: {
    entityType: 'user',
    action: 'create',
    entity: { role: 'user' },
  },
  parameters: {
    docs: {
      description: {
        story: '사용자 생성 버튼은 자동으로 "새 사용자 만들기" 라벨이 생성됩니다.',
      },
    },
  },
};

// 도메인 로직 - 게시글 보관
export const ArchivePost: Story = {
  args: {
    entityType: 'post',
    action: 'archive',
    entity: { status: 'published', id: 3, title: 'Post to Archive' },
  },
  parameters: {
    docs: {
      description: {
        story: '발행된 게시글만 보관할 수 있습니다.',
      },
    },
  },
};

// 조합 예제
export const Combination: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Button variant="primary" size="sm">Small Primary</Button>
        <Button variant="secondary" size="sm">Small Secondary</Button>
        <Button variant="danger" size="sm">Small Danger</Button>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Button variant="primary" size="md">Medium Primary</Button>
        <Button variant="secondary" size="md">Medium Secondary</Button>
        <Button variant="danger" size="md">Medium Danger</Button>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Button variant="primary" size="lg">Large Primary</Button>
        <Button variant="secondary" size="lg">Large Secondary</Button>
        <Button variant="danger" size="lg">Large Danger</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 크기와 variant의 조합을 보여줍니다.',
      },
    },
  },
};
