import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../components/atoms/Badge';

const meta = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
      description: '배지의 시각적 스타일 타입',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '배지의 크기',
    },
    pill: {
      control: 'boolean',
      description: '둥근 pill 스타일 적용',
    },
    status: {
      control: 'select',
      options: ['published', 'draft', 'archived', 'pending', 'rejected'],
      description: '게시글 상태 (자동 타입 및 라벨)',
    },
    userRole: {
      control: 'select',
      options: ['admin', 'moderator', 'user', 'guest'],
      description: '사용자 역할 (자동 타입 및 라벨)',
    },
    priority: {
      control: 'select',
      options: ['high', 'medium', 'low'],
      description: '우선순위 (자동 타입 및 라벨)',
    },
    paymentStatus: {
      control: 'select',
      options: ['paid', 'pending', 'failed', 'refunded'],
      description: '결제 상태 (자동 타입 및 라벨)',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Types
export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    children: 'Secondary',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    children: 'Success',
  },
};

export const Danger: Story = {
  args: {
    type: 'danger',
    children: 'Danger',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    children: 'Warning',
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    children: 'Info',
  },
};

// 크기 Variants
export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small Badge',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'Medium Badge',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large Badge',
  },
};

// Pill 스타일
export const PillStyle: Story = {
  args: {
    pill: true,
    type: 'primary',
    children: 'Pill Badge',
  },
};

// 상태 도메인 로직
export const StatusPublished: Story = {
  args: {
    status: 'published',
  },
  parameters: {
    docs: {
      description: {
        story: '게시됨 상태 - success 타입과 "게시됨" 라벨이 자동으로 적용됩니다.',
      },
    },
  },
};

export const StatusDraft: Story = {
  args: {
    status: 'draft',
  },
  parameters: {
    docs: {
      description: {
        story: '임시저장 상태 - warning 타입과 "임시저장" 라벨이 자동으로 적용됩니다.',
      },
    },
  },
};

export const StatusArchived: Story = {
  args: {
    status: 'archived',
  },
  parameters: {
    docs: {
      description: {
        story: '보관됨 상태 - secondary 타입과 "보관됨" 라벨이 자동으로 적용됩니다.',
      },
    },
  },
};

export const StatusPending: Story = {
  args: {
    status: 'pending',
  },
  parameters: {
    docs: {
      description: {
        story: '대기중 상태 - info 타입과 "대기중" 라벨이 자동으로 적용됩니다.',
      },
    },
  },
};

export const StatusRejected: Story = {
  args: {
    status: 'rejected',
  },
  parameters: {
    docs: {
      description: {
        story: '거부됨 상태 - danger 타입과 "거부됨" 라벨이 자동으로 적용됩니다.',
      },
    },
  },
};

// 사용자 역할 도메인 로직
export const RoleAdmin: Story = {
  args: {
    userRole: 'admin',
  },
  parameters: {
    docs: {
      description: {
        story: '관리자 역할 - danger 타입과 "관리자" 라벨이 자동으로 적용됩니다.',
      },
    },
  },
};

export const RoleModerator: Story = {
  args: {
    userRole: 'moderator',
  },
  parameters: {
    docs: {
      description: {
        story: '운영자 역할 - warning 타입과 "운영자" 라벨이 자동으로 적용됩니다.',
      },
    },
  },
};

export const RoleUser: Story = {
  args: {
    userRole: 'user',
  },
  parameters: {
    docs: {
      description: {
        story: '사용자 역할 - primary 타입과 "사용자" 라벨이 자동으로 적용됩니다.',
      },
    },
  },
};

export const RoleGuest: Story = {
  args: {
    userRole: 'guest',
  },
  parameters: {
    docs: {
      description: {
        story: '게스트 역할 - secondary 타입과 "게스트" 라벨이 자동으로 적용됩니다.',
      },
    },
  },
};

// 우선순위 도메인 로직
export const PriorityHigh: Story = {
  args: {
    priority: 'high',
  },
  parameters: {
    docs: {
      description: {
        story: '높은 우선순위 - danger 타입과 "높음" 라벨이 자동으로 적용됩니다.',
      },
    },
  },
};

export const PriorityMedium: Story = {
  args: {
    priority: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story: '중간 우선순위 - warning 타입과 "보통" 라벨이 자동으로 적용됩니다.',
      },
    },
  },
};

export const PriorityLow: Story = {
  args: {
    priority: 'low',
  },
  parameters: {
    docs: {
      description: {
        story: '낮은 우선순위 - info 타입과 "낮음" 라벨이 자동으로 적용됩니다.',
      },
    },
  },
};

// 결제 상태 도메인 로직
export const PaymentPaid: Story = {
  args: {
    paymentStatus: 'paid',
  },
  parameters: {
    docs: {
      description: {
        story: '결제완료 - success 타입과 "결제완료" 라벨이 자동으로 적용됩니다.',
      },
    },
  },
};

export const PaymentPending: Story = {
  args: {
    paymentStatus: 'pending',
  },
  parameters: {
    docs: {
      description: {
        story: '결제대기 - warning 타입과 "결제대기" 라벨이 자동으로 적용됩니다.',
      },
    },
  },
};

export const PaymentFailed: Story = {
  args: {
    paymentStatus: 'failed',
  },
  parameters: {
    docs: {
      description: {
        story: '결제실패 - danger 타입과 "결제실패" 라벨이 자동으로 적용됩니다.',
      },
    },
  },
};

export const PaymentRefunded: Story = {
  args: {
    paymentStatus: 'refunded',
  },
  parameters: {
    docs: {
      description: {
        story: '환불됨 - secondary 타입과 "환불됨" 라벨이 자동으로 적용됩니다.',
      },
    },
  },
};

// 커스텀 라벨 오버라이드
export const CustomLabel: Story = {
  args: {
    status: 'published',
    children: 'Custom Label',
  },
  parameters: {
    docs: {
      description: {
        story: '자동 생성된 라벨을 커스텀 children으로 오버라이드할 수 있습니다.',
      },
    },
  },
};

// 조합 예제
export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Badge status="published" />
      <Badge status="draft" />
      <Badge status="archived" />
      <Badge status="pending" />
      <Badge status="rejected" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 게시글 상태 배지를 보여줍니다.',
      },
    },
  },
};

export const AllRoles: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Badge userRole="admin" />
      <Badge userRole="moderator" />
      <Badge userRole="user" />
      <Badge userRole="guest" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 사용자 역할 배지를 보여줍니다.',
      },
    },
  },
};

export const AllPriorities: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Badge priority="high" />
      <Badge priority="medium" />
      <Badge priority="low" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 우선순위 배지를 보여줍니다.',
      },
    },
  },
};

export const WithPillStyle: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Badge status="published" pill />
      <Badge status="draft" pill />
      <Badge userRole="admin" pill />
      <Badge priority="high" pill />
      <Badge paymentStatus="paid" pill />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pill 스타일이 적용된 다양한 배지들을 보여줍니다.',
      },
    },
  },
};
