import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Alert } from './Alert';

describe('Alert 컴포넌트', () => {
  describe('기본 렌더링', () => {
    it('자식 텍스트와 함께 알림을 렌더링한다', () => {
      render(<Alert>Test alert message</Alert>);
      expect(screen.getByText('Test alert message')).toBeInTheDocument();
    });

    it('기본 variant로 렌더링한다', () => {
      render(<Alert>Default</Alert>);
      const message = screen.getByText('Default');
      const alertDiv = message.closest('div[class*="bg-alert-default-bg"]');
      expect(alertDiv).toBeInTheDocument();
    });

    it('title이 제공되면 렌더링한다', () => {
      render(<Alert title="Important">Message</Alert>);
      expect(screen.getByText('Important')).toBeInTheDocument();
    });

    it('title이 제공되지 않으면 렌더링하지 않는다', () => {
      render(<Alert>Message</Alert>);
      const message = screen.getByText('Message');
      const parent = message.parentElement;
      const titleDiv = parent?.parentElement?.querySelector('.font-bold.mb-1');
      expect(titleDiv).not.toBeInTheDocument();
    });
  });

  describe('Variant', () => {
    it('info variant를 렌더링한다', () => {
      render(<Alert variant="info">Info message</Alert>);
      const message = screen.getByText('Info message');
      const alertDiv = message.closest('div[class*="bg-alert-info-bg"]');
      expect(alertDiv).toBeInTheDocument();
    });

    it('success variant를 렌더링한다', () => {
      render(<Alert variant="success">Success message</Alert>);
      const message = screen.getByText('Success message');
      const alertDiv = message.closest('div[class*="bg-alert-success-bg"]');
      expect(alertDiv).toBeInTheDocument();
    });

    it('warning variant를 렌더링한다', () => {
      render(<Alert variant="warning">Warning message</Alert>);
      const message = screen.getByText('Warning message');
      const alertDiv = message.closest('div[class*="bg-alert-warning-bg"]');
      expect(alertDiv).toBeInTheDocument();
    });

    it('error variant를 렌더링한다', () => {
      render(<Alert variant="error">Error message</Alert>);
      const message = screen.getByText('Error message');
      const alertDiv = message.closest('div[class*="bg-alert-error-bg"]');
      expect(alertDiv).toBeInTheDocument();
    });

    it('default variant를 렌더링한다', () => {
      render(<Alert variant="default">Default message</Alert>);
      const message = screen.getByText('Default message');
      const alertDiv = message.closest('div[class*="bg-alert-default-bg"]');
      expect(alertDiv).toBeInTheDocument();
    });
  });

  describe('아이콘', () => {
    it('기본적으로 아이콘을 보여준다', () => {
      render(<Alert variant="info">Message</Alert>);
      expect(screen.getByText('ℹ️')).toBeInTheDocument();
    });

    it('success 아이콘을 보여준다', () => {
      render(<Alert variant="success">Message</Alert>);
      expect(screen.getByText('✓')).toBeInTheDocument();
    });

    it('warning 아이콘을 보여준다', () => {
      render(<Alert variant="warning">Message</Alert>);
      expect(screen.getByText('⚠️')).toBeInTheDocument();
    });

    it('error 아이콘을 보여준다', () => {
      render(<Alert variant="error">Message</Alert>);
      expect(screen.getByText('✕')).toBeInTheDocument();
    });

    it('default 아이콘을 보여준다', () => {
      render(<Alert variant="default">Message</Alert>);
      expect(screen.getByText('•')).toBeInTheDocument();
    });

    it('showIcon이 false일 때 아이콘을 숨긴다', () => {
      render(
        <Alert variant="info" showIcon={false}>
          Message
        </Alert>
      );
      expect(screen.queryByText('ℹ️')).not.toBeInTheDocument();
    });
  });

  describe('닫기 버튼', () => {
    it('기본적으로 닫기 버튼을 보여주지 않는다', () => {
      render(<Alert>Message</Alert>);
      expect(screen.queryByText('×')).not.toBeInTheDocument();
    });

    it('onClose가 제공되면 닫기 버튼을 보여준다', () => {
      const handleClose = vi.fn();
      render(<Alert onClose={handleClose}>Message</Alert>);
      expect(screen.getByText('×')).toBeInTheDocument();
    });

    it('닫기 버튼 클릭 시 onClose를 호출한다', async () => {
      const user = userEvent.setup();
      const handleClose = vi.fn();
      render(<Alert onClose={handleClose}>Message</Alert>);

      const closeButton = screen.getByRole('button');
      await user.click(closeButton);
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('닫기 버튼에 × 심볼이 있다', () => {
      const handleClose = vi.fn();
      render(<Alert onClose={handleClose}>Message</Alert>);
      expect(screen.getByText('×')).toBeInTheDocument();
    });
  });

  describe('제목과 본문', () => {
    it('제목과 본문을 함께 렌더링한다', () => {
      render(<Alert title="Alert Title">Alert Body</Alert>);
      expect(screen.getByText('Alert Title')).toBeInTheDocument();
      expect(screen.getByText('Alert Body')).toBeInTheDocument();
    });

    it('제목을 font-bold mb-1 클래스로 렌더링한다', () => {
      render(<Alert title="Title">Body</Alert>);
      const title = screen.getByText('Title');
      expect(title).toHaveClass('font-bold');
      expect(title).toHaveClass('mb-1');
    });

    it('본문을 text-sm 클래스로 렌더링한다', () => {
      render(<Alert>Body Content</Alert>);
      const body = screen.getByText('Body Content');
      expect(body).toHaveClass('text-sm');
    });
  });

  describe('복잡한 콘텐츠', () => {
    it('JSX 자식 요소를 렌더링한다', () => {
      render(
        <Alert title="Complex Alert">
          <div>
            <p>First paragraph</p>
            <p>Second paragraph</p>
          </div>
        </Alert>
      );
      expect(screen.getByText('First paragraph')).toBeInTheDocument();
      expect(screen.getByText('Second paragraph')).toBeInTheDocument();
    });

    it('모든 props를 조합하여 렌더링한다', () => {
      const handleClose = vi.fn();
      render(
        <Alert variant="warning" title="Warning Title" onClose={handleClose} showIcon>
          Warning message content
        </Alert>
      );

      const message = screen.getByText('Warning message content');
      const warningDiv = message.closest('div[class*="bg-alert-warning-bg"]');
      expect(warningDiv).toBeInTheDocument();
      expect(screen.getByText('Warning Title')).toBeInTheDocument();
      expect(screen.getByText('Warning message content')).toBeInTheDocument();
      expect(screen.getByText('⚠️')).toBeInTheDocument();
      expect(screen.getByText('×')).toBeInTheDocument();
    });
  });

  describe('구조', () => {
    it('올바른 클래스 구조를 가진다', () => {
      render(
        <Alert variant="info" title="Title">
          Body
        </Alert>
      );

      const body = screen.getByText('Body');
      const infoDiv = body.closest('div[class*="bg-alert-info-bg"]');
      expect(infoDiv).toBeInTheDocument();
      expect(screen.getByText('ℹ️')).toBeInTheDocument();
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Body')).toBeInTheDocument();
    });
  });

  describe('접근성', () => {
    it('닫기 버튼이 button 엘리먼트이다', () => {
      const handleClose = vi.fn();
      render(<Alert onClose={handleClose}>Message</Alert>);
      const closeButton = screen.getByRole('button');
      expect(closeButton).toBeInTheDocument();
    });

    it('알림 콘텐츠를 읽을 수 있다', () => {
      render(
        <Alert variant="error" title="Error Title">
          Error message
        </Alert>
      );
      expect(screen.getByText('Error Title')).toBeInTheDocument();
      expect(screen.getByText('Error message')).toBeInTheDocument();
    });
  });

  describe('여러 개의 Alert', () => {
    it('다양한 variant의 여러 알림을 렌더링한다', () => {
      render(
        <>
          <Alert variant="info">Info</Alert>
          <Alert variant="success">Success</Alert>
          <Alert variant="warning">Warning</Alert>
          <Alert variant="error">Error</Alert>
        </>
      );

      expect(screen.getAllByText((content, element) => {
        return element?.classList.contains('flex') && element?.classList.contains('gap-2');
      }).length).toBe(4);
      expect(screen.getByText('Info')).toBeInTheDocument();
      expect(screen.getByText('Success')).toBeInTheDocument();
      expect(screen.getByText('Warning')).toBeInTheDocument();
      expect(screen.getByText('Error')).toBeInTheDocument();
    });
  });

  describe('엣지 케이스', () => {
    it('빈 문자열 자식을 렌더링한다', () => {
      const { container } = render(<Alert>{''}</Alert>);
      const alertDiv = container.querySelector('div[class*="bg-alert-default-bg"]');
      expect(alertDiv).toBeInTheDocument();
    });

    it('본문 없이 제목만 렌더링한다', () => {
      render(<Alert title="Only Title">{''}</Alert>);
      expect(screen.getByText('Only Title')).toBeInTheDocument();
    });

    it('닫기 버튼의 빠른 클릭을 처리한다', async () => {
      const user = userEvent.setup();
      const handleClose = vi.fn();
      render(<Alert onClose={handleClose}>Message</Alert>);

      const closeButton = screen.getByRole('button');
      await user.click(closeButton);
      await user.click(closeButton);
      await user.click(closeButton);
      expect(handleClose).toHaveBeenCalledTimes(3);
    });
  });
});
