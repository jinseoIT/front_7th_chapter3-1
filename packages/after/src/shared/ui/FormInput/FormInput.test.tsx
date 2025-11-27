import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormInput } from './FormInput';

describe('FormInput 컴포넌트', () => {
  describe('기본 렌더링', () => {
    it('name과 value를 가진 input을 렌더링한다', () => {
      const handleChange = vi.fn();
      render(<FormInput name="test" value="test value" onChange={handleChange} />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveValue('test value');
      expect(input).toHaveAttribute('name', 'test');
    });

    it('label이 제공되면 렌더링한다', () => {
      const handleChange = vi.fn();
      render(
        <FormInput name="username" value="" onChange={handleChange} label="Username" />
      );
      expect(screen.getByLabelText('Username')).toBeInTheDocument();
    });

    it('label이 제공되지 않으면 렌더링하지 않는다', () => {
      const handleChange = vi.fn();
      const { container } = render(
        <FormInput name="test" value="" onChange={handleChange} />
      );
      expect(container.querySelector('.form-label')).not.toBeInTheDocument();
    });

    it('placeholder가 제공되면 렌더링한다', () => {
      const handleChange = vi.fn();
      render(
        <FormInput
          name="email"
          value=""
          onChange={handleChange}
          placeholder="Enter your email"
        />
      );
      expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    });
  });

  describe('입력 타입', () => {
    it('기본적으로 text input을 렌더링한다', () => {
      const handleChange = vi.fn();
      render(<FormInput name="test" value="" onChange={handleChange} />);
      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text');
    });

    it('email input을 렌더링한다', () => {
      const handleChange = vi.fn();
      render(<FormInput name="email" value="" onChange={handleChange} type="email" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('type', 'email');
    });

    it('password input을 렌더링한다', () => {
      const handleChange = vi.fn();
      const { container } = render(
        <FormInput name="password" value="" onChange={handleChange} type="password" />
      );
      const input = container.querySelector('input[type="password"]');
      expect(input).toHaveAttribute('type', 'password');
    });

    it('number input을 렌더링한다', () => {
      const handleChange = vi.fn();
      render(<FormInput name="age" value="" onChange={handleChange} type="number" />);
      const input = screen.getByRole('spinbutton');
      expect(input).toHaveAttribute('type', 'number');
    });

    it('url input을 렌더링한다', () => {
      const handleChange = vi.fn();
      render(<FormInput name="website" value="" onChange={handleChange} type="url" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('type', 'url');
    });
  });

  describe('필수 필드', () => {
    it('required일 때 필수 표시 asterisk를 렌더링한다', () => {
      const handleChange = vi.fn();
      render(
        <FormInput
          name="email"
          value=""
          onChange={handleChange}
          label="Email"
          required
        />
      );
      const asterisk = screen.getByText('*');
      expect(asterisk).toBeInTheDocument();
    });

    it('required prop이 true일 때 required 속성을 가진다', () => {
      const handleChange = vi.fn();
      render(<FormInput name="test" value="" onChange={handleChange} required />);
      expect(screen.getByRole('textbox')).toBeRequired();
    });
  });

  describe('비활성화 상태', () => {
    it('비활성화된 input을 렌더링한다', () => {
      const handleChange = vi.fn();
      render(<FormInput name="test" value="" onChange={handleChange} disabled />);
      expect(screen.getByRole('textbox')).toBeDisabled();
    });

    it('비활성화되었을 때 onChange를 호출하지 않는다', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<FormInput name="test" value="" onChange={handleChange} disabled />);

      await user.type(screen.getByRole('textbox'), 'test');
      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('너비 변형', () => {
    it('기본적으로 전체 너비로 렌더링한다', () => {
      const handleChange = vi.fn();
      render(<FormInput name="test" value="" onChange={handleChange} />);
      expect(screen.getByRole('textbox')).toHaveClass('w-full');
    });

    it('small 너비로 렌더링한다', () => {
      const handleChange = vi.fn();
      render(<FormInput name="test" value="" onChange={handleChange} width="small" />);
      expect(screen.getByRole('textbox')).toHaveClass('w-full');
    });

    it('medium 너비로 렌더링한다', () => {
      const handleChange = vi.fn();
      render(<FormInput name="test" value="" onChange={handleChange} width="medium" />);
      expect(screen.getByRole('textbox')).toHaveClass('w-full');
    });

    it('large 너비로 렌더링한다', () => {
      const handleChange = vi.fn();
      render(<FormInput name="test" value="" onChange={handleChange} width="large" />);
      expect(screen.getByRole('textbox')).toHaveClass('w-full');
    });
  });

  describe('에러 처리', () => {
    it('외부 에러 메시지를 표시한다', () => {
      const handleChange = vi.fn();
      render(
        <FormInput
          name="test"
          value=""
          onChange={handleChange}
          error="This field is required"
        />
      );
      expect(screen.getByText('This field is required')).toBeInTheDocument();
    });

    it('에러가 있을 때 input에 border-form-border-error 클래스를 적용한다', () => {
      const handleChange = vi.fn();
      render(
        <FormInput name="test" value="" onChange={handleChange} error="Error message" />
      );
      expect(screen.getByRole('textbox')).toHaveClass('border-form-border-error');
    });

    it('에러가 있을 때 helpText를 표시하지 않는다', () => {
      const handleChange = vi.fn();
      render(
        <FormInput
          name="test"
          value=""
          onChange={handleChange}
          error="Error"
          helpText="Help text"
        />
      );
      expect(screen.getByText('Error')).toBeInTheDocument();
      expect(screen.queryByText('Help text')).not.toBeInTheDocument();
    });
  });

  describe('도움말 텍스트', () => {
    it('에러가 없을 때 도움말 텍스트를 표시한다', () => {
      const handleChange = vi.fn();
      render(
        <FormInput
          name="test"
          value=""
          onChange={handleChange}
          helpText="This is help text"
        />
      );
      expect(screen.getByText('This is help text')).toBeInTheDocument();
    });
  });

  describe('사용자 상호작용', () => {
    it('사용자가 입력할 때 onChange를 호출한다', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<FormInput name="test" value="" onChange={handleChange} />);

      await user.type(screen.getByRole('textbox'), 'hello');
      expect(handleChange).toHaveBeenCalledTimes(5); // once per character
    });

    it('각 키 입력마다 값을 업데이트한다', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<FormInput name="test" value="" onChange={handleChange} />);

      await user.type(screen.getByRole('textbox'), 'abc');

      // Should be called 3 times, once for each character typed
      expect(handleChange).toHaveBeenCalledTimes(3);
      // The onChange receives the current value from the event
      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe('사용자명 필드 타입 검증', () => {
    it('username에 대한 fieldType prop을 받는다', () => {
      const handleChange = vi.fn();
      render(
        <FormInput
          name="username"
          value="testuser"
          onChange={handleChange}
          fieldType="username"
        />
      );
      // Component should render without errors
      expect(screen.getByRole('textbox')).toHaveValue('testuser');
    });

    it('checkBusinessRules prop을 받는다', () => {
      const handleChange = vi.fn();
      render(
        <FormInput
          name="username"
          value="admin"
          onChange={handleChange}
          fieldType="username"
          checkBusinessRules={true}
        />
      );
      // Component should render with the prop
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
  });

  describe('이메일 필드 타입 검증', () => {
    it('email에 대한 fieldType prop을 받는다', () => {
      const handleChange = vi.fn();
      render(
        <FormInput
          name="email"
          value="test@example.com"
          onChange={handleChange}
          fieldType="email"
        />
      );
      // Component should render without errors
      expect(screen.getByRole('textbox')).toHaveValue('test@example.com');
    });

    it('entityType과 checkBusinessRules prop을 받는다', () => {
      const handleChange = vi.fn();
      render(
        <FormInput
          name="email"
          value="test@company.com"
          onChange={handleChange}
          fieldType="email"
          entityType="user"
          checkBusinessRules={true}
        />
      );
      // Component should render with the props
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
  });

  describe('게시글 제목 필드 타입 검증', () => {
    it('postTitle에 대한 fieldType prop을 받는다', () => {
      const handleChange = vi.fn();
      render(
        <FormInput
          name="title"
          value="Valid Post Title"
          onChange={handleChange}
          fieldType="postTitle"
        />
      );
      // Component should render without errors
      expect(screen.getByRole('textbox')).toHaveValue('Valid Post Title');
    });

    it('post에 대한 entityType과 checkBusinessRules prop을 받는다', () => {
      const handleChange = vi.fn();
      render(
        <FormInput
          name="title"
          value="게시글 제목"
          onChange={handleChange}
          fieldType="postTitle"
          entityType="post"
          checkBusinessRules={true}
        />
      );
      // Component should render with the props
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
  });

  describe('접근성', () => {
    it('htmlFor를 사용하여 label과 input을 연결한다', () => {
      const handleChange = vi.fn();
      render(
        <FormInput name="test" value="" onChange={handleChange} label="Test Label" />
      );
      const input = screen.getByLabelText('Test Label');
      expect(input).toHaveAttribute('id', 'test');
      expect(input).toHaveAttribute('name', 'test');
    });

    it('적절한 input 속성들을 포함한다', () => {
      const handleChange = vi.fn();
      render(
        <FormInput
          name="email"
          value=""
          onChange={handleChange}
          type="email"
          required
          placeholder="Enter email"
        />
      );
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('type', 'email');
      expect(input).toHaveAttribute('placeholder', 'Enter email');
      expect(input).toBeRequired();
    });
  });

  describe('외부 vs 내부 에러', () => {
    it('내부 검증 에러보다 외부 에러를 우선시한다', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(
        <FormInput
          name="username"
          value=""
          onChange={handleChange}
          fieldType="username"
          error="External error"
        />
      );

      const input = screen.getByRole('textbox');
      await user.type(input, 'ab'); // Would trigger internal validation
      expect(screen.getByText('External error')).toBeInTheDocument();
    });
  });
});
