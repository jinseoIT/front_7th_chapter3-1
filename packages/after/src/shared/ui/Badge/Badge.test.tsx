import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge 컴포넌트', () => {
  describe('기본 렌더링', () => {
    it('자식 텍스트와 함께 배지를 렌더링한다', () => {
      render(<Badge>Test Badge</Badge>);
      expect(screen.getByText('Test Badge')).toBeInTheDocument();
    });

    it('기본 타입(primary)으로 렌더링한다', () => {
      render(<Badge>Test</Badge>);
      const badge = screen.getByText('Test');
      expect(badge).toHaveClass('bg-badge-primary');
    });

    it('기본 크기(medium)로 렌더링한다', () => {
      render(<Badge>Test</Badge>);
      const badge = screen.getByText('Test');
      expect(badge).toHaveClass('h-5');
      expect(badge).toHaveClass('px-2');
      expect(badge).toHaveClass('text-sm');
    });
  });

  describe('타입/Variant', () => {
    it('primary 타입을 렌더링한다', () => {
      render(<Badge type="primary">Primary</Badge>);
      expect(screen.getByText('Primary')).toHaveClass('bg-badge-primary');
    });

    it('secondary 타입을 렌더링한다', () => {
      render(<Badge type="secondary">Secondary</Badge>);
      expect(screen.getByText('Secondary')).toHaveClass('bg-badge-secondary');
    });

    it('success 타입을 렌더링한다', () => {
      render(<Badge type="success">Success</Badge>);
      expect(screen.getByText('Success')).toHaveClass('bg-badge-success');
    });

    it('danger 타입을 렌더링한다', () => {
      render(<Badge type="danger">Danger</Badge>);
      expect(screen.getByText('Danger')).toHaveClass('bg-badge-danger');
    });

    it('warning 타입을 렌더링한다', () => {
      render(<Badge type="warning">Warning</Badge>);
      expect(screen.getByText('Warning')).toHaveClass('bg-badge-warning');
    });

    it('info 타입을 렌더링한다', () => {
      render(<Badge type="info">Info</Badge>);
      expect(screen.getByText('Info')).toHaveClass('bg-badge-info');
    });
  });

  describe('크기', () => {
    it('small 크기를 렌더링한다', () => {
      render(<Badge size="small">Small</Badge>);
      const badge = screen.getByText('Small');
      expect(badge).toHaveClass('h-4');
      expect(badge).toHaveClass('px-1');
      expect(badge).toHaveClass('text-xs');
    });

    it('medium 크기를 렌더링한다', () => {
      render(<Badge size="medium">Medium</Badge>);
      const badge = screen.getByText('Medium');
      expect(badge).toHaveClass('h-5');
      expect(badge).toHaveClass('px-2');
      expect(badge).toHaveClass('text-sm');
    });

    it('large 크기를 렌더링한다', () => {
      render(<Badge size="large">Large</Badge>);
      const badge = screen.getByText('Large');
      expect(badge).toHaveClass('h-6');
      expect(badge).toHaveClass('px-2');
      expect(badge).toHaveClass('text-base');
    });
  });

  describe('Pill 스타일', () => {
    it('pill 스타일을 렌더링한다', () => {
      render(<Badge pill>Pill</Badge>);
      expect(screen.getByText('Pill')).toHaveClass('rounded-full');
    });

    it('기본적으로 pill 스타일을 렌더링하지 않는다', () => {
      render(<Badge>Normal</Badge>);
      expect(screen.getByText('Normal')).toHaveClass('rounded-sm');
      expect(screen.getByText('Normal')).not.toHaveClass('rounded-full');
    });
  });

  describe('상태 도메인 로직', () => {
    it('published 상태를 success 타입과 자동 생성된 라벨로 렌더링한다', () => {
      render(<Badge status="published" />);
      const badge = screen.getByText('게시됨');
      expect(badge).toHaveClass('bg-badge-success');
    });

    it('draft 상태를 warning 타입과 자동 생성된 라벨로 렌더링한다', () => {
      render(<Badge status="draft" />);
      const badge = screen.getByText('임시저장');
      expect(badge).toHaveClass('bg-badge-warning');
    });

    it('archived 상태를 secondary 타입과 자동 생성된 라벨로 렌더링한다', () => {
      render(<Badge status="archived" />);
      const badge = screen.getByText('보관됨');
      expect(badge).toHaveClass('bg-badge-secondary');
    });

    it('pending 상태를 info 타입과 자동 생성된 라벨로 렌더링한다', () => {
      render(<Badge status="pending" />);
      const badge = screen.getByText('대기중');
      expect(badge).toHaveClass('bg-badge-info');
    });

    it('rejected 상태를 danger 타입과 자동 생성된 라벨로 렌더링한다', () => {
      render(<Badge status="rejected" />);
      const badge = screen.getByText('거부됨');
      expect(badge).toHaveClass('bg-badge-danger');
    });

    it('커스텀 children으로 자동 생성된 라벨을 오버라이드한다', () => {
      render(<Badge status="published">Custom Label</Badge>);
      expect(screen.getByText('Custom Label')).toBeInTheDocument();
      expect(screen.queryByText('게시됨')).not.toBeInTheDocument();
    });
  });

  describe('사용자 역할 도메인 로직', () => {
    it('admin 역할을 danger 타입과 자동 생성된 라벨로 렌더링한다', () => {
      render(<Badge userRole="admin" />);
      const badge = screen.getByText('관리자');
      expect(badge).toHaveClass('bg-badge-danger');
    });

    it('moderator 역할을 warning 타입과 자동 생성된 라벨로 렌더링한다', () => {
      render(<Badge userRole="moderator" />);
      const badge = screen.getByText('운영자');
      expect(badge).toHaveClass('bg-badge-warning');
    });

    it('user 역할을 primary 타입과 자동 생성된 라벨로 렌더링한다', () => {
      render(<Badge userRole="user" />);
      const badge = screen.getByText('사용자');
      expect(badge).toHaveClass('bg-badge-primary');
    });

    it('guest 역할을 secondary 타입과 자동 생성된 라벨로 렌더링한다', () => {
      render(<Badge userRole="guest" />);
      const badge = screen.getByText('게스트');
      expect(badge).toHaveClass('bg-badge-secondary');
    });

    it('커스텀 children으로 역할 라벨을 오버라이드한다', () => {
      render(<Badge userRole="admin">Super Admin</Badge>);
      expect(screen.getByText('Super Admin')).toBeInTheDocument();
      expect(screen.queryByText('관리자')).not.toBeInTheDocument();
    });
  });

  describe('우선순위 도메인 로직', () => {
    it('높은 우선순위를 danger 타입과 자동 생성된 라벨로 렌더링한다', () => {
      render(<Badge priority="high" />);
      const badge = screen.getByText('높음');
      expect(badge).toHaveClass('bg-badge-danger');
    });

    it('중간 우선순위를 warning 타입과 자동 생성된 라벨로 렌더링한다', () => {
      render(<Badge priority="medium" />);
      const badge = screen.getByText('보통');
      expect(badge).toHaveClass('bg-badge-warning');
    });

    it('낮은 우선순위를 info 타입과 자동 생성된 라벨로 렌더링한다', () => {
      render(<Badge priority="low" />);
      const badge = screen.getByText('낮음');
      expect(badge).toHaveClass('bg-badge-info');
    });
  });

  describe('결제 상태 도메인 로직', () => {
    it('결제완료 상태를 success 타입과 자동 생성된 라벨로 렌더링한다', () => {
      render(<Badge paymentStatus="paid" />);
      const badge = screen.getByText('결제완료');
      expect(badge).toHaveClass('bg-badge-success');
    });

    it('결제대기 상태를 warning 타입과 자동 생성된 라벨로 렌더링한다', () => {
      render(<Badge paymentStatus="pending" />);
      const badge = screen.getByText('결제대기');
      expect(badge).toHaveClass('bg-badge-warning');
    });

    it('결제실패 상태를 danger 타입과 자동 생성된 라벨로 렌더링한다', () => {
      render(<Badge paymentStatus="failed" />);
      const badge = screen.getByText('결제실패');
      expect(badge).toHaveClass('bg-badge-danger');
    });

    it('환불됨 상태를 secondary 타입과 자동 생성된 라벨로 렌더링한다', () => {
      render(<Badge paymentStatus="refunded" />);
      const badge = screen.getByText('환불됨');
      expect(badge).toHaveClass('bg-badge-secondary');
    });
  });

  describe('도메인 로직 우선순위', () => {
    it('status prop이 type prop보다 우선한다', () => {
      render(<Badge type="primary" status="published">Test</Badge>);
      const badge = screen.getByText('Test');
      expect(badge).toHaveClass('bg-badge-success');
      expect(badge).not.toHaveClass('bg-badge-primary');
    });

    it('userRole prop이 status prop을 오버라이드한다', () => {
      render(<Badge status="published" userRole="admin">Test</Badge>);
      const badge = screen.getByText('Test');
      expect(badge).toHaveClass('bg-badge-danger');
      expect(badge).not.toHaveClass('bg-badge-success');
    });

    it('priority prop이 userRole prop을 오버라이드한다', () => {
      render(<Badge userRole="user" priority="high">Test</Badge>);
      const badge = screen.getByText('Test');
      expect(badge).toHaveClass('bg-badge-danger');
      expect(badge).not.toHaveClass('bg-badge-primary');
    });

    it('paymentStatus prop이 모든 다른 props를 오버라이드한다', () => {
      render(<Badge priority="high" paymentStatus="paid">Test</Badge>);
      const badge = screen.getByText('Test');
      expect(badge).toHaveClass('bg-badge-success');
      expect(badge).not.toHaveClass('bg-badge-danger');
    });
  });

  describe('Props 조합', () => {
    it('여러 클래스를 올바르게 렌더링한다', () => {
      render(
        <Badge type="primary" size="large" pill>
          Complex Badge
        </Badge>
      );
      const badge = screen.getByText('Complex Badge');
      expect(badge).toHaveClass('inline-flex');
      expect(badge).toHaveClass('bg-badge-primary');
      expect(badge).toHaveClass('h-6');
      expect(badge).toHaveClass('rounded-full');
    });

    it('도메인 특정 배지를 커스텀 크기와 pill 스타일로 렌더링한다', () => {
      render(
        <Badge status="published" size="small" pill>
          Published
        </Badge>
      );
      const badge = screen.getByText('Published');
      expect(badge).toHaveClass('bg-badge-success');
      expect(badge).toHaveClass('h-4');
      expect(badge).toHaveClass('rounded-full');
    });
  });

  describe('접근성', () => {
    it('span 엘리먼트로 렌더링한다', () => {
      const { container } = render(<Badge>Test</Badge>);
      const badge = container.querySelector('span');
      expect(badge).toBeInTheDocument();
    });

    it('스크린 리더를 위한 텍스트 콘텐츠를 포함한다', () => {
      render(<Badge status="published" />);
      expect(screen.getByText('게시됨')).toBeInTheDocument();
    });
  });
});
