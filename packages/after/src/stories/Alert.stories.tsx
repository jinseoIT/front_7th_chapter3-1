import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Alert } from '../components/organisms/Alert';

const meta = {
  title: 'Organisms/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'error'],
      description: '알림의 시각적 스타일 variant',
    },
    title: {
      control: 'text',
      description: '알림의 제목 (선택사항)',
    },
    showIcon: {
      control: 'boolean',
      description: '아이콘 표시 여부',
    },
    onClose: {
      description: '닫기 버튼 클릭 핸들러 (제공시 닫기 버튼 표시)',
    },
  },
  args: {
    onClose: undefined,
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Variants
export const Default: Story = {
  args: {
    variant: 'default',
    children: '기본 알림 메시지입니다.',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: '정보성 알림 메시지입니다.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: '성공 알림 메시지입니다.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: '경고 알림 메시지입니다.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: '오류 알림 메시지입니다.',
  },
};

// 제목과 함께
export const WithTitle: Story = {
  args: {
    variant: 'info',
    title: '알림 제목',
    children: '제목과 함께 표시되는 알림 메시지입니다.',
  },
};

export const SuccessWithTitle: Story = {
  args: {
    variant: 'success',
    title: '저장 완료',
    children: '변경사항이 성공적으로 저장되었습니다.',
  },
};

export const ErrorWithTitle: Story = {
  args: {
    variant: 'error',
    title: '오류 발생',
    children: '요청을 처리하는 중 오류가 발생했습니다. 다시 시도해주세요.',
  },
};

// 아이콘 제어
export const WithoutIcon: Story = {
  args: {
    variant: 'info',
    showIcon: false,
    children: '아이콘 없이 표시되는 알림입니다.',
  },
};

// 닫기 버튼
export const Closable: Story = {
  args: {
    variant: 'info',
    children: '닫을 수 있는 알림입니다.',
    onClose: fn(),
  },
};

export const ClosableWithTitle: Story = {
  args: {
    variant: 'warning',
    title: '주의사항',
    children: '제목과 함께 닫을 수 있는 알림입니다.',
    onClose: fn(),
  },
};

// 복잡한 콘텐츠
export const WithComplexContent: Story = {
  args: {
    variant: 'info',
    title: '업데이트 안내',
    children: (
      <div>
        <p>새로운 기능이 추가되었습니다:</p>
        <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
          <li>다크 모드 지원</li>
          <li>향상된 검색 기능</li>
          <li>성능 개선</li>
        </ul>
      </div>
    ),
    onClose: fn(),
  },
};

export const WithLongContent: Story = {
  args: {
    variant: 'warning',
    title: '긴 내용의 알림',
    children:
      '이것은 매우 긴 내용의 알림 메시지입니다. 실제 상황에서는 이렇게 긴 텍스트가 포함될 수 있으며, 알림 컴포넌트는 이를 적절히 표시할 수 있어야 합니다. 여러 줄에 걸쳐 표시되는 콘텐츠도 깔끔하게 처리됩니다.',
    onClose: fn(),
  },
};

// 모든 variants 표시
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px' }}>
      <Alert variant="default">기본 알림입니다.</Alert>
      <Alert variant="info">정보 알림입니다.</Alert>
      <Alert variant="success">성공 알림입니다.</Alert>
      <Alert variant="warning">경고 알림입니다.</Alert>
      <Alert variant="error">오류 알림입니다.</Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 variant를 한눈에 비교할 수 있습니다.',
      },
    },
  },
};

export const AllVariantsWithTitle: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px' }}>
      <Alert variant="default" title="기본">
        기본 알림 메시지입니다.
      </Alert>
      <Alert variant="info" title="정보">
        정보 알림 메시지입니다.
      </Alert>
      <Alert variant="success" title="성공">
        성공 알림 메시지입니다.
      </Alert>
      <Alert variant="warning" title="경고">
        경고 알림 메시지입니다.
      </Alert>
      <Alert variant="error" title="오류">
        오류 알림 메시지입니다.
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '제목이 포함된 모든 variant를 보여줍니다.',
      },
    },
  },
};

export const AllVariantsClosable: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px' }}>
      <Alert variant="default" title="기본" onClose={fn()}>
        닫을 수 있는 기본 알림입니다.
      </Alert>
      <Alert variant="info" title="정보" onClose={fn()}>
        닫을 수 있는 정보 알림입니다.
      </Alert>
      <Alert variant="success" title="성공" onClose={fn()}>
        닫을 수 있는 성공 알림입니다.
      </Alert>
      <Alert variant="warning" title="경고" onClose={fn()}>
        닫을 수 있는 경고 알림입니다.
      </Alert>
      <Alert variant="error" title="오류" onClose={fn()}>
        닫을 수 있는 오류 알림입니다.
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '닫기 버튼이 있는 모든 variant를 보여줍니다.',
      },
    },
  },
};

// 실제 사용 예시
export const FormValidationError: Story = {
  args: {
    variant: 'error',
    title: '입력 오류',
    children: '필수 항목을 모두 입력해주세요.',
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: '폼 검증 실패시 표시되는 오류 알림 예시입니다.',
      },
    },
  },
};

export const SaveSuccess: Story = {
  args: {
    variant: 'success',
    title: '저장 완료',
    children: '게시글이 성공적으로 저장되었습니다.',
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: '저장 성공시 표시되는 알림 예시입니다.',
      },
    },
  },
};

export const SystemMaintenance: Story = {
  args: {
    variant: 'warning',
    title: '시스템 점검 안내',
    children: '2024년 1월 1일 오전 2시부터 4시까지 시스템 점검이 예정되어 있습니다.',
  },
  parameters: {
    docs: {
      description: {
        story: '시스템 점검 등의 중요 공지사항 알림 예시입니다.',
      },
    },
  },
};

export const NetworkError: Story = {
  args: {
    variant: 'error',
    title: '네트워크 오류',
    children: (
      <div>
        <p>서버와의 연결이 끊어졌습니다.</p>
        <p style={{ marginTop: '0.5rem' }}>인터넷 연결을 확인하고 다시 시도해주세요.</p>
      </div>
    ),
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: '네트워크 오류 발생시 표시되는 알림 예시입니다.',
      },
    },
  },
};
