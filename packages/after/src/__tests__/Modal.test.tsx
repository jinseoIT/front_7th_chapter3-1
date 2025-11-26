import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from '../shared/ui';

describe('Modal 컴포넌트', () => {
  beforeEach(() => {
    // Reset body overflow before each test
    document.body.style.overflow = 'unset';
  });

  afterEach(() => {
    // Clean up body overflow after each test
    document.body.style.overflow = 'unset';
  });

  describe('기본 렌더링', () => {
    it('isOpen이 false일 때 렌더링하지 않는다', () => {
      const handleClose = vi.fn();
      const { container } = render(
        <Modal isOpen={false} onClose={handleClose}>
          Modal Content
        </Modal>
      );
      expect(container.firstChild).toBeNull();
      expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
    });

    it('isOpen이 true일 때 렌더링한다', () => {
      const handleClose = vi.fn();
      render(
        <Modal isOpen={true} onClose={handleClose}>
          Modal Content
        </Modal>
      );
      expect(screen.getByText('Modal Content')).toBeInTheDocument();
    });

    it('모달 오버레이를 렌더링한다', () => {
      const handleClose = vi.fn();
      const { container } = render(
        <Modal isOpen={true} onClose={handleClose}>
          Content
        </Modal>
      );
      expect(container.querySelector('.modal-overlay')).toBeInTheDocument();
    });

    it('모달 콘텐츠를 렌더링한다', () => {
      const handleClose = vi.fn();
      const { container } = render(
        <Modal isOpen={true} onClose={handleClose}>
          Content
        </Modal>
      );
      expect(container.querySelector('.modal-content')).toBeInTheDocument();
    });
  });

  describe('제목', () => {
    it('title이 제공되면 렌더링한다', () => {
      const handleClose = vi.fn();
      render(
        <Modal isOpen={true} onClose={handleClose} title="Modal Title">
          Content
        </Modal>
      );
      expect(screen.getByText('Modal Title')).toBeInTheDocument();
    });

    it('title이 제공되지 않으면 헤더를 렌더링하지 않는다', () => {
      const handleClose = vi.fn();
      const { container } = render(
        <Modal isOpen={true} onClose={handleClose}>
          Content
        </Modal>
      );
      expect(container.querySelector('.modal-header')).not.toBeInTheDocument();
    });

    it('title이 제공되면 헤더에 닫기 버튼을 렌더링한다', () => {
      const handleClose = vi.fn();
      const { container } = render(
        <Modal isOpen={true} onClose={handleClose} title="Title">
          Content
        </Modal>
      );
      expect(container.querySelector('.modal-close')).toBeInTheDocument();
    });
  });

  describe('크기', () => {
    it('기본적으로 medium 크기를 렌더링한다', () => {
      const handleClose = vi.fn();
      const { container } = render(
        <Modal isOpen={true} onClose={handleClose}>
          Content
        </Modal>
      );
      expect(container.querySelector('.modal-medium')).toBeInTheDocument();
    });

    it('small 크기를 렌더링한다', () => {
      const handleClose = vi.fn();
      const { container } = render(
        <Modal isOpen={true} onClose={handleClose} size="small">
          Content
        </Modal>
      );
      expect(container.querySelector('.modal-small')).toBeInTheDocument();
    });

    it('medium 크기를 렌더링한다', () => {
      const handleClose = vi.fn();
      const { container } = render(
        <Modal isOpen={true} onClose={handleClose} size="medium">
          Content
        </Modal>
      );
      expect(container.querySelector('.modal-medium')).toBeInTheDocument();
    });

    it('large 크기를 렌더링한다', () => {
      const handleClose = vi.fn();
      const { container } = render(
        <Modal isOpen={true} onClose={handleClose} size="large">
          Content
        </Modal>
      );
      expect(container.querySelector('.modal-large')).toBeInTheDocument();
    });
  });

  describe('푸터', () => {
    it('기본적으로 푸터를 렌더링하지 않는다', () => {
      const handleClose = vi.fn();
      const { container } = render(
        <Modal isOpen={true} onClose={handleClose}>
          Content
        </Modal>
      );
      expect(container.querySelector('.modal-footer')).not.toBeInTheDocument();
    });

    it('showFooter가 false일 때 푸터를 렌더링하지 않는다', () => {
      const handleClose = vi.fn();
      const { container } = render(
        <Modal isOpen={true} onClose={handleClose} showFooter={false}>
          Content
        </Modal>
      );
      expect(container.querySelector('.modal-footer')).not.toBeInTheDocument();
    });

    it('showFooter가 true이고 footerContent가 제공되면 푸터를 렌더링한다', () => {
      const handleClose = vi.fn();
      const { container } = render(
        <Modal
          isOpen={true}
          onClose={handleClose}
          showFooter={true}
          footerContent={<button>Save</button>}
        >
          Content
        </Modal>
      );
      expect(container.querySelector('.modal-footer')).toBeInTheDocument();
      expect(screen.getByText('Save')).toBeInTheDocument();
    });

    it('showFooter가 true이지만 footerContent가 제공되지 않으면 푸터를 렌더링하지 않는다', () => {
      const handleClose = vi.fn();
      const { container } = render(
        <Modal isOpen={true} onClose={handleClose} showFooter={true}>
          Content
        </Modal>
      );
      expect(container.querySelector('.modal-footer')).not.toBeInTheDocument();
    });
  });

  describe('닫기 기능', () => {
    it('오버레이 클릭 시 onClose를 호출한다', async () => {
      const user = userEvent.setup();
      const handleClose = vi.fn();
      const { container } = render(
        <Modal isOpen={true} onClose={handleClose}>
          Content
        </Modal>
      );

      const overlay = container.querySelector('.modal-overlay');
      if (overlay) {
        await user.click(overlay);
        expect(handleClose).toHaveBeenCalledTimes(1);
      }
    });

    it('닫기 버튼 클릭 시 onClose를 호출한다', async () => {
      const user = userEvent.setup();
      const handleClose = vi.fn();
      const { container } = render(
        <Modal isOpen={true} onClose={handleClose} title="Title">
          Content
        </Modal>
      );

      const closeButton = container.querySelector('.modal-close');
      if (closeButton) {
        await user.click(closeButton);
        expect(handleClose).toHaveBeenCalledTimes(1);
      }
    });

    it('모달 콘텐츠 클릭 시 onClose를 호출하지 않는다', async () => {
      const user = userEvent.setup();
      const handleClose = vi.fn();
      const { container } = render(
        <Modal isOpen={true} onClose={handleClose}>
          Content
        </Modal>
      );

      const modalContent = container.querySelector('.modal-content');
      if (modalContent) {
        await user.click(modalContent);
        expect(handleClose).not.toHaveBeenCalled();
      }
    });
  });

  describe('Body Overflow 관리', () => {
    it('모달이 열리면 body overflow를 hidden으로 설정한다', () => {
      const handleClose = vi.fn();
      render(
        <Modal isOpen={true} onClose={handleClose}>
          Content
        </Modal>
      );
      expect(document.body.style.overflow).toBe('hidden');
    });

    it('모달이 닫혀있으면 body overflow를 hidden으로 설정하지 않는다', () => {
      const handleClose = vi.fn();
      render(
        <Modal isOpen={false} onClose={handleClose}>
          Content
        </Modal>
      );
      expect(document.body.style.overflow).toBe('unset');
    });

    it('모달이 닫히면 body overflow를 초기화한다', () => {
      const handleClose = vi.fn();
      const { rerender } = render(
        <Modal isOpen={true} onClose={handleClose}>
          Content
        </Modal>
      );
      expect(document.body.style.overflow).toBe('hidden');

      rerender(
        <Modal isOpen={false} onClose={handleClose}>
          Content
        </Modal>
      );
      expect(document.body.style.overflow).toBe('unset');
    });

    it('언마운트 시 body overflow를 정리한다', () => {
      const handleClose = vi.fn();
      const { unmount } = render(
        <Modal isOpen={true} onClose={handleClose}>
          Content
        </Modal>
      );
      expect(document.body.style.overflow).toBe('hidden');

      unmount();
      expect(document.body.style.overflow).toBe('unset');
    });
  });

  describe('모달 Body 콘텐츠', () => {
    it('모달 body에 children을 렌더링한다', () => {
      const handleClose = vi.fn();
      const { container } = render(
        <Modal isOpen={true} onClose={handleClose}>
          <p>First paragraph</p>
          <p>Second paragraph</p>
        </Modal>
      );

      const modalBody = container.querySelector('.modal-body');
      expect(modalBody).toBeInTheDocument();
      expect(screen.getByText('First paragraph')).toBeInTheDocument();
      expect(screen.getByText('Second paragraph')).toBeInTheDocument();
    });

    it('복잡한 JSX children을 렌더링한다', () => {
      const handleClose = vi.fn();
      render(
        <Modal isOpen={true} onClose={handleClose}>
          <div>
            <h2>Heading</h2>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
            </ul>
          </div>
        </Modal>
      );

      expect(screen.getByText('Heading')).toBeInTheDocument();
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
    });
  });

  describe('완전한 모달 구조', () => {
    it('모든 부분을 포함한 완전한 모달을 렌더링한다', () => {
      const handleClose = vi.fn();
      const { container } = render(
        <Modal
          isOpen={true}
          onClose={handleClose}
          title="Complete Modal"
          size="large"
          showFooter={true}
          footerContent={
            <div>
              <button>Cancel</button>
              <button>Save</button>
            </div>
          }
        >
          <p>Modal body content</p>
        </Modal>
      );

      // Check all structural elements
      expect(container.querySelector('.modal-overlay')).toBeInTheDocument();
      expect(container.querySelector('.modal-content')).toBeInTheDocument();
      expect(container.querySelector('.modal-large')).toBeInTheDocument();
      expect(container.querySelector('.modal-header')).toBeInTheDocument();
      expect(container.querySelector('.modal-title')).toBeInTheDocument();
      expect(container.querySelector('.modal-close')).toBeInTheDocument();
      expect(container.querySelector('.modal-body')).toBeInTheDocument();
      expect(container.querySelector('.modal-footer')).toBeInTheDocument();

      // Check content
      expect(screen.getByText('Complete Modal')).toBeInTheDocument();
      expect(screen.getByText('Modal body content')).toBeInTheDocument();
      expect(screen.getByText('Cancel')).toBeInTheDocument();
      expect(screen.getByText('Save')).toBeInTheDocument();
    });
  });

  describe('모달 상태 변경', () => {
    it('여러 번의 열기/닫기 사이클을 처리한다', () => {
      const handleClose = vi.fn();
      const { rerender } = render(
        <Modal isOpen={false} onClose={handleClose}>
          Content
        </Modal>
      );
      expect(screen.queryByText('Content')).not.toBeInTheDocument();

      rerender(
        <Modal isOpen={true} onClose={handleClose}>
          Content
        </Modal>
      );
      expect(screen.getByText('Content')).toBeInTheDocument();

      rerender(
        <Modal isOpen={false} onClose={handleClose}>
          Content
        </Modal>
      );
      expect(screen.queryByText('Content')).not.toBeInTheDocument();

      rerender(
        <Modal isOpen={true} onClose={handleClose}>
          Content
        </Modal>
      );
      expect(screen.getByText('Content')).toBeInTheDocument();
    });
  });

  describe('접근성', () => {
    it('닫기 버튼에 × 심볼이 있다', () => {
      const handleClose = vi.fn();
      const { container } = render(
        <Modal isOpen={true} onClose={handleClose} title="Title">
          Content
        </Modal>
      );
      const closeButton = container.querySelector('.modal-close');
      expect(closeButton).toHaveTextContent('×');
    });

    it('모달 title이 h3 엘리먼트이다', () => {
      const handleClose = vi.fn();
      render(
        <Modal isOpen={true} onClose={handleClose} title="Modal Title">
          Content
        </Modal>
      );
      const heading = screen.getByRole('heading', { level: 3 });
      expect(heading).toHaveTextContent('Modal Title');
    });
  });

  describe('엣지 케이스', () => {
    it('빠른 열기/닫기 상태 변경을 처리한다', () => {
      const handleClose = vi.fn();
      const { rerender } = render(
        <Modal isOpen={true} onClose={handleClose}>
          Content
        </Modal>
      );
      expect(document.body.style.overflow).toBe('hidden');

      rerender(
        <Modal isOpen={false} onClose={handleClose}>
          Content
        </Modal>
      );
      rerender(
        <Modal isOpen={true} onClose={handleClose}>
          Content
        </Modal>
      );
      rerender(
        <Modal isOpen={false} onClose={handleClose}>
          Content
        </Modal>
      );

      expect(document.body.style.overflow).toBe('unset');
    });

    it('빈 콘텐츠를 처리한다', () => {
      const handleClose = vi.fn();
      const { container } = render(
        <Modal isOpen={true} onClose={handleClose}>
          {''}
        </Modal>
      );
      expect(container.querySelector('.modal-body')).toBeInTheDocument();
    });
  });
});
