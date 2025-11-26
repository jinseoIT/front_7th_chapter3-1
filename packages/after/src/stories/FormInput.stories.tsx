import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { FormInput } from '../shared/ui';

const meta = {
  title: 'Molecules/FormInput',
  component: FormInput,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: '입력 필드의 라벨',
    },
    placeholder: {
      control: 'text',
      description: '입력 필드의 placeholder',
    },
    required: {
      control: 'boolean',
      description: '필수 입력 여부',
    },
    error: {
      control: 'text',
      description: '에러 메시지',
    },
    helpText: {
      control: 'text',
      description: '도움말 텍스트',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'HTML input 타입',
    },
    width: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'full'],
      description: '입력 필드의 너비',
    },
  },
  args: {
    onChange: fn(),
    onBlur: fn(),
  },
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본
export const Default: Story = {
  args: {
    label: '이름',
    placeholder: '이름을 입력하세요',
  },
};

// 필수 입력
export const Required: Story = {
  args: {
    label: '이메일',
    placeholder: 'email@example.com',
    required: true,
    type: 'email',
  },
};

// 도움말 텍스트
export const WithHelpText: Story = {
  args: {
    label: '비밀번호',
    type: 'password',
    placeholder: '비밀번호를 입력하세요',
    helpText: '8자 이상, 영문/숫자/특수문자 포함',
  },
};

// 에러 상태
export const WithError: Story = {
  args: {
    label: '이메일',
    type: 'email',
    value: 'invalid-email',
    error: '올바른 이메일 형식이 아닙니다.',
  },
};

// 비활성화
export const Disabled: Story = {
  args: {
    label: '사용자 ID',
    value: 'user123',
    disabled: true,
    helpText: '사용자 ID는 변경할 수 없습니다.',
  },
};

// 다양한 타입
export const TypeText: Story = {
  args: {
    label: '이름',
    type: 'text',
    placeholder: '홍길동',
  },
};

export const TypeEmail: Story = {
  args: {
    label: '이메일',
    type: 'email',
    placeholder: 'user@example.com',
  },
};

export const TypePassword: Story = {
  args: {
    label: '비밀번호',
    type: 'password',
    placeholder: '비밀번호를 입력하세요',
  },
};

export const TypeNumber: Story = {
  args: {
    label: '나이',
    type: 'number',
    placeholder: '25',
  },
};

export const TypeTel: Story = {
  args: {
    label: '전화번호',
    type: 'tel',
    placeholder: '010-1234-5678',
  },
};

export const TypeUrl: Story = {
  args: {
    label: '웹사이트',
    type: 'url',
    placeholder: 'https://example.com',
  },
};

// 너비 Variants
export const WidthSmall: Story = {
  args: {
    label: '우편번호',
    width: 'sm',
    placeholder: '12345',
  },
};

export const WidthMedium: Story = {
  args: {
    label: '도시',
    width: 'md',
    placeholder: '서울',
  },
};

export const WidthLarge: Story = {
  args: {
    label: '주소',
    width: 'lg',
    placeholder: '상세 주소를 입력하세요',
  },
};

export const WidthFull: Story = {
  args: {
    label: '설명',
    width: 'full',
    placeholder: '상세 설명을 입력하세요',
  },
};

// 폼 예제
export const LoginForm: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <FormInput
        label="이메일"
        type="email"
        placeholder="email@example.com"
        required
        width="full"
      />
      <div style={{ marginTop: '1rem' }}>
        <FormInput
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력하세요"
          required
          width="full"
          helpText="8자 이상 입력해주세요"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '로그인 폼 예제입니다.',
      },
    },
  },
};

export const SignupForm: Story = {
  render: () => (
    <div style={{ maxWidth: '500px' }}>
      <FormInput label="이름" placeholder="홍길동" required width="full" />
      <div style={{ marginTop: '1rem' }}>
        <FormInput
          label="이메일"
          type="email"
          placeholder="email@example.com"
          required
          width="full"
        />
      </div>
      <div style={{ marginTop: '1rem' }}>
        <FormInput
          label="비밀번호"
          type="password"
          placeholder="비밀번호"
          required
          width="full"
          helpText="8자 이상, 영문/숫자/특수문자 포함"
        />
      </div>
      <div style={{ marginTop: '1rem' }}>
        <FormInput
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호 재입력"
          required
          width="full"
        />
      </div>
      <div style={{ marginTop: '1rem' }}>
        <FormInput label="전화번호" type="tel" placeholder="010-1234-5678" width="full" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '회원가입 폼 예제입니다.',
      },
    },
  },
};

export const ValidationErrors: Story = {
  render: () => (
    <div style={{ maxWidth: '500px' }}>
      <FormInput
        label="이메일"
        type="email"
        value="invalid-email"
        error="올바른 이메일 형식이 아닙니다."
        width="full"
      />
      <div style={{ marginTop: '1rem' }}>
        <FormInput
          label="비밀번호"
          type="password"
          value="123"
          error="비밀번호는 8자 이상이어야 합니다."
          width="full"
        />
      </div>
      <div style={{ marginTop: '1rem' }}>
        <FormInput
          label="전화번호"
          type="tel"
          value="abc"
          error="올바른 전화번호 형식이 아닙니다."
          width="full"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '폼 검증 에러 표시 예제입니다.',
      },
    },
  },
};

export const ProfileForm: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <FormInput label="성" placeholder="홍" required />
        <FormInput label="이름" placeholder="길동" required />
      </div>
      <div style={{ marginTop: '1rem' }}>
        <FormInput label="이메일" type="email" value="hong@example.com" disabled width="full" />
      </div>
      <div style={{ marginTop: '1rem' }}>
        <FormInput label="전화번호" type="tel" placeholder="010-1234-5678" width="full" />
      </div>
      <div style={{ marginTop: '1rem' }}>
        <FormInput
          label="웹사이트"
          type="url"
          placeholder="https://example.com"
          width="full"
          helpText="선택사항"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '프로필 수정 폼 예제입니다.',
      },
    },
  },
};

// 반응형 레이아웃
export const ResponsiveLayout: Story = {
  render: () => (
    <div style={{ maxWidth: '800px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        <FormInput label="제목" placeholder="게시글 제목" required />
        <FormInput label="카테고리" placeholder="카테고리 선택" required />
      </div>
      <div style={{ marginTop: '1rem' }}>
        <FormInput
          label="태그"
          placeholder="태그를 입력하세요 (쉼표로 구분)"
          width="full"
          helpText="예: React, TypeScript, Storybook"
        />
      </div>
      <div style={{ marginTop: '1rem' }}>
        <FormInput
          label="URL 슬러그"
          placeholder="url-slug"
          width="full"
          helpText="영문 소문자, 숫자, 하이픈(-) 사용 가능"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '반응형 그리드 레이아웃을 사용한 폼 예제입니다.',
      },
    },
  },
};

// 모든 상태 비교
export const AllStates: Story = {
  render: () => (
    <div style={{ maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <FormInput label="기본 상태" placeholder="입력하세요" width="full" />
      <FormInput label="필수 입력" placeholder="입력하세요" required width="full" />
      <FormInput
        label="도움말 포함"
        placeholder="입력하세요"
        helpText="이것은 도움말 텍스트입니다."
        width="full"
      />
      <FormInput
        label="에러 상태"
        value="잘못된 값"
        error="올바른 형식이 아닙니다."
        width="full"
      />
      <FormInput label="비활성화" value="수정 불가" disabled width="full" />
      <FormInput
        label="모든 요소 포함"
        placeholder="입력하세요"
        required
        helpText="도움말 텍스트"
        width="full"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'FormInput의 모든 상태를 비교해볼 수 있습니다.',
      },
    },
  },
};
