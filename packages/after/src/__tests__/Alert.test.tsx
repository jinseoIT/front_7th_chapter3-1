import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Alert } from '../shared/ui';

describe('Alert 컴포넌트', () => {
  describe('기본 렌더링', () => {
    it('자식 텍스트와 함께 알림을 렌더링한다', () => {
      render(<Alert>Test alert message</Alert>);
      expect(screen.getByText('Test alert message')).toBeInTheDocument();
    });

    it('기본 variant로 렌더링한다', () => {
      const { container } = render(<Alert>Default</Alert>);
      const alert = container.querySelector('.alert-default');
      expect(alert).toBeInTheDocument();
    });

    it('title이 제공되면 렌더링한다', () => {
      render(<Alert title="Important">Message</Alert>);
      expect(screen.getByText('Important')).toBeInTheDocument();
    });

    it('title이 제공되지 않으면 렌더링하지 않는다', () => {
      const { container } = render(<Alert>Message</Alert>);
      const title = container.querySelector('.alert-title');
      expect(title).not.toBeInTheDocument();
    });
  });

  describe('Variant', () => {
    it('info variant를 렌더링한다', () => {
      const { container } = render(<Alert variant="info">Info message</Alert>);
      const alert = container.querySelector('.alert-info');
      expect(alert).toBeInTheDocument();
    });

    it('success variant를 렌더링한다', () => {
      const { container } = render(<Alert variant="success">Success message</Alert>);
      const alert = container.querySelector('.alert-success');
      expect(alert).toBeInTheDocument();
    });

    it('warning variant를 렌더링한다', () => {
      const { container } = render(<Alert variant="warning">Warning message</Alert>);
      const alert = container.querySelector('.alert-warning');
      expect(alert).toBeInTheDocument();
    });

    it('error variant를 렌더링한다', () => {
      const { container } = render(<Alert variant="error">Error message</Alert>);
      const alert = container.querySelector('.alert-error');
      expect(alert).toBeInTheDocument();
    });

    it('default variant를 렌더링한다', () => {
      const { container } = render(<Alert variant="default">Default message</Alert>);
      const alert = container.querySelector('.alert-default');
      expect(alert).toBeInTheDocument();
    });
  });

  describe('아이콘', () => {
    it('기본적으로 아이콘을 보여준다', () => {
      const { container } = render(<Alert variant="info">Message</Alert>);
      const icon = container.querySelector('.alert-icon');
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveTextContent('ℹ️');
    });

    it('success 아이콘을 보여준다', () => {
      const { container } = render(<Alert variant="success">Message</Alert>);
      const icon = container.querySelector('.alert-icon');
      expect(icon).toHaveTextContent('✓');
    });

    it('warning 아이콘을 보여준다', () => {
      const { container } = render(<Alert variant="warning">Message</Alert>);
      const icon = container.querySelector('.alert-icon');
      expect(icon).toHaveTextContent('⚠️');
    });

    it('error 아이콘을 보여준다', () => {
      const { container } = render(<Alert variant="error">Message</Alert>);
      const icon = container.querySelector('.alert-icon');
      expect(icon).toHaveTextContent('✕');
    });

    it('default 아이콘을 보여준다', () => {
      const { container } = render(<Alert variant="default">Message</Alert>);
      const icon = container.querySelector('.alert-icon');
      expect(icon).toHaveTextContent('•');
    });

    it('showIcon이 false일 때 아이콘을 숨긴다', () => {
      const { container } = render(
        <Alert variant="info" showIcon={false}>
          Message
        </Alert>
      );
      const icon = container.querySelector('.alert-icon');
      expect(icon).not.toBeInTheDocument();
    });
  });

  describe('닫기 버튼', () => {
    it('기본적으로 닫기 버튼을 보여주지 않는다', () => {
      const { container } = render(<Alert>Message</Alert>);
      const closeButton = container.querySelector('.alert-close');
      expect(closeButton).not.toBeInTheDocument();
    });

    it('onClose가 제공되면 닫기 버튼을 보여준다', () => {
      const handleClose = vi.fn();
      const { container } = render(<Alert onClose={handleClose}>Message</Alert>);
      const closeButton = container.querySelector('.alert-close');
      expect(closeButton).toBeInTheDocument();
    });

    it('닫기 버튼 클릭 시 onClose를 호출한다', async () => {
      const user = userEvent.setup();
      const handleClose = vi.fn();
      const { container } = render(<Alert onClose={handleClose}>Message</Alert>);

      const closeButton = container.querySelector('.alert-close');
      if (closeButton) {
        await user.click(closeButton);
        expect(handleClose).toHaveBeenCalledTimes(1);
      }
    });

    it('닫기 버튼에 × 심볼이 있다', () => {
      const handleClose = vi.fn();
      const { container } = render(<Alert onClose={handleClose}>Message</Alert>);
      const closeButton = container.querySelector('.alert-close');
      expect(closeButton).toHaveTextContent('×');
    });
  });

  describe('제목과 본문', () => {
    it('제목과 본문을 함께 렌더링한다', () => {
      render(<Alert title="Alert Title">Alert Body</Alert>);
      expect(screen.getByText('Alert Title')).toBeInTheDocument();
      expect(screen.getByText('Alert Body')).toBeInTheDocument();
    });

    it('제목을 alert-title 클래스로 렌더링한다', () => {
      const { container } = render(<Alert title="Title">Body</Alert>);
      const title = container.querySelector('.alert-title');
      expect(title).toHaveTextContent('Title');
    });

    it('본문을 alert-body 클래스로 렌더링한다', () => {
      const { container } = render(<Alert>Body Content</Alert>);
      const body = container.querySelector('.alert-body');
      expect(body).toHaveTextContent('Body Content');
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
      const { container } = render(
        <Alert variant="warning" title="Warning Title" onClose={handleClose} showIcon>
          Warning message content
        </Alert>
      );

      expect(container.querySelector('.alert-warning')).toBeInTheDocument();
      expect(screen.getByText('Warning Title')).toBeInTheDocument();
      expect(screen.getByText('Warning message content')).toBeInTheDocument();
      expect(container.querySelector('.alert-icon')).toBeInTheDocument();
      expect(container.querySelector('.alert-close')).toBeInTheDocument();
    });
  });

  describe('구조', () => {
    it('올바른 클래스 구조를 가진다', () => {
      const { container } = render(
        <Alert variant="info" title="Title">
          Body
        </Alert>
      );

      expect(container.querySelector('.alert')).toBeInTheDocument();
      expect(container.querySelector('.alert-info')).toBeInTheDocument();
      expect(container.querySelector('.alert-icon')).toBeInTheDocument();
      expect(container.querySelector('.alert-content')).toBeInTheDocument();
      expect(container.querySelector('.alert-title')).toBeInTheDocument();
      expect(container.querySelector('.alert-body')).toBeInTheDocument();
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
      const { container } = render(
        <>
          <Alert variant="info">Info</Alert>
          <Alert variant="success">Success</Alert>
          <Alert variant="warning">Warning</Alert>
          <Alert variant="error">Error</Alert>
        </>
      );

      expect(container.querySelectorAll('.alert').length).toBe(4);
      expect(container.querySelector('.alert-info')).toBeInTheDocument();
      expect(container.querySelector('.alert-success')).toBeInTheDocument();
      expect(container.querySelector('.alert-warning')).toBeInTheDocument();
      expect(container.querySelector('.alert-error')).toBeInTheDocument();
    });
  });

  describe('엣지 케이스', () => {
    it('빈 문자열 자식을 렌더링한다', () => {
      render(<Alert>{''}</Alert>);
      const { container } = render(<Alert>{''}</Alert>);
      expect(container.querySelector('.alert')).toBeInTheDocument();
    });

    it('본문 없이 제목만 렌더링한다', () => {
      render(<Alert title="Only Title">{''}</Alert>);
      expect(screen.getByText('Only Title')).toBeInTheDocument();
    });

    it('닫기 버튼의 빠른 클릭을 처리한다', async () => {
      const user = userEvent.setup();
      const handleClose = vi.fn();
      const { container } = render(<Alert onClose={handleClose}>Message</Alert>);

      const closeButton = container.querySelector('.alert-close');
      if (closeButton) {
        await user.click(closeButton);
        await user.click(closeButton);
        await user.click(closeButton);
        expect(handleClose).toHaveBeenCalledTimes(3);
      }
    });
  });
});
