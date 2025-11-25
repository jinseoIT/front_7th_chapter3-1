import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { useState } from "react";
import { Modal } from "../components/organisms/Modal";
import { Button } from "../components/atoms/Button";

const meta = {
  title: "Organisms/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "모달 표시 여부",
    },
    title: {
      control: "text",
      description: "모달 제목 (선택사항)",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "모달 크기",
    },
    showFooter: {
      control: "boolean",
      description: "푸터 표시 여부",
    },
    onClose: {
      description: "모달 닫기 핸들러",
    },
  },
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 모달
export const Default: Story = {
  args: {
    isOpen: true,
    children: <p>기본 모달 콘텐츠입니다.</p>,
  },
};

// 제목과 함께
export const WithTitle: Story = {
  args: {
    isOpen: true,
    title: "모달 제목",
    children: <p>제목이 있는 모달입니다.</p>,
  },
};

// 크기 Variants
export const Small: Story = {
  args: {
    isOpen: true,
    title: "작은 모달",
    size: "small",
    children: <p>작은 크기의 모달입니다.</p>,
  },
};

export const Medium: Story = {
  args: {
    isOpen: true,
    title: "중간 모달",
    size: "medium",
    children: <p>중간 크기의 모달입니다.</p>,
  },
};

export const Large: Story = {
  args: {
    isOpen: true,
    title: "큰 모달",
    size: "large",
    children: <p>큰 크기의 모달입니다.</p>,
  },
};

// 푸터와 함께
export const WithFooter: Story = {
  args: {
    isOpen: true,
    title: "푸터가 있는 모달",
    showFooter: true,
    footerContent: (
      <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
        <Button variant="secondary" onClick={fn()}>
          취소
        </Button>
        <Button variant="primary" onClick={fn()}>
          확인
        </Button>
      </div>
    ),
    children: <p>푸터에 버튼이 있는 모달입니다.</p>,
  },
};

// 복잡한 콘텐츠
export const WithComplexContent: Story = {
  args: {
    isOpen: true,
    title: "사용자 정보",
    showFooter: true,
    footerContent: (
      <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
        <Button variant="secondary">취소</Button>
        <Button variant="primary">저장</Button>
      </div>
    ),
    children: (
      <div style={{ padding: "1rem 0" }}>
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "0.25rem", fontWeight: "500" }}>이름</label>
          <input
            type="text"
            defaultValue="홍길동"
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #d1d5db",
              borderRadius: "0.375rem",
            }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "0.25rem", fontWeight: "500" }}>이메일</label>
          <input
            type="email"
            defaultValue="hong@example.com"
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #d1d5db",
              borderRadius: "0.375rem",
            }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "0.25rem", fontWeight: "500" }}>역할</label>
          <select
            defaultValue="user"
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #d1d5db",
              borderRadius: "0.375rem",
            }}
          >
            <option value="admin">관리자</option>
            <option value="user">사용자</option>
            <option value="guest">게스트</option>
          </select>
        </div>
      </div>
    ),
  },
};

// 긴 콘텐츠 (스크롤)
export const WithLongContent: Story = {
  args: {
    isOpen: true,
    title: "약관 동의",
    showFooter: true,
    footerContent: (
      <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
        <Button variant="secondary">거절</Button>
        <Button variant="primary">동의</Button>
      </div>
    ),
    children: (
      <div style={{ maxHeight: "400px", overflow: "auto" }}>
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i} style={{ marginBottom: "1rem" }}>
            {i + 1}. 이것은 긴 콘텐츠의 예시입니다. 모달 내부에서 스크롤이 가능합니다. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        ))}
      </div>
    ),
  },
};

// 확인 다이얼로그
export const ConfirmDialog: Story = {
  args: {
    isOpen: true,
    title: "삭제 확인",
    size: "small",
    showFooter: true,
    footerContent: (
      <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
        <Button variant="secondary">취소</Button>
        <Button variant="danger">삭제</Button>
      </div>
    ),
    children: <p>정말로 이 항목을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.</p>,
  },
};

// Interactive 예제 (실제로 열고 닫기)
export const Interactive: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>모달 열기</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="인터랙티브 모달">
          <p>이 모달은 실제로 열고 닫을 수 있습니다.</p>
          <p style={{ marginTop: "1rem" }}>오버레이를 클릭하거나 닫기 버튼을 눌러보세요.</p>
        </Modal>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "실제로 모달을 열고 닫을 수 있는 인터랙티브 예제입니다.",
      },
    },
  },
};

export const InteractiveWithFooter: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>폼 모달 열기</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="새 게시글 작성"
          size="medium"
          showFooter
          footerContent={
            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                취소
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  alert("저장되었습니다!");
                  setIsOpen(false);
                }}
              >
                저장
              </Button>
            </div>
          }
        >
          <div style={{ padding: "1rem 0" }}>
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", marginBottom: "0.25rem", fontWeight: "500" }}>제목</label>
              <input
                type="text"
                placeholder="게시글 제목을 입력하세요"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "0.375rem",
                }}
              />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "0.25rem", fontWeight: "500" }}>내용</label>
              <textarea
                placeholder="게시글 내용을 입력하세요"
                rows={5}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "0.375rem",
                  resize: "vertical",
                }}
              />
            </div>
          </div>
        </Modal>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "폼을 포함한 인터랙티브 모달 예제입니다.",
      },
    },
  },
};

// 다중 모달 예제
export const MultipleModals: Story = {
  render: () => {
    const [firstOpen, setFirstOpen] = useState(false);
    const [secondOpen, setSecondOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setFirstOpen(true)}>첫 번째 모달 열기</Button>
        <Modal
          isOpen={firstOpen}
          onClose={() => setFirstOpen(false)}
          title="첫 번째 모달"
          showFooter
          footerContent={
            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
              <Button variant="secondary" onClick={() => setFirstOpen(false)}>
                닫기
              </Button>
              <Button variant="primary" onClick={() => setSecondOpen(true)}>
                다음 모달 열기
              </Button>
            </div>
          }
        >
          <p>첫 번째 모달입니다.</p>
          <p style={{ marginTop: "1rem" }}>"다음 모달 열기" 버튼을 클릭하면 두 번째 모달이 열립니다.</p>
        </Modal>

        <Modal
          isOpen={secondOpen}
          onClose={() => setSecondOpen(false)}
          title="두 번째 모달"
          size="small"
          showFooter
          footerContent={
            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
              <Button variant="primary" onClick={() => setSecondOpen(false)}>
                확인
              </Button>
            </div>
          }
        >
          <p>두 번째 모달이 열렸습니다!</p>
        </Modal>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "여러 개의 모달을 순차적으로 열 수 있는 예제입니다.",
      },
    },
  },
};

// 실제 사용 예시들
export const DeleteConfirmation: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button variant="danger" onClick={() => setIsOpen(true)}>
          게시글 삭제
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="게시글 삭제"
          size="small"
          showFooter
          footerContent={
            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                취소
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  alert("게시글이 삭제되었습니다.");
                  setIsOpen(false);
                }}
              >
                삭제
              </Button>
            </div>
          }
        >
          <p>정말로 이 게시글을 삭제하시겠습니까?</p>
          <p style={{ marginTop: "0.5rem", color: "#dc2626", fontSize: "0.875rem" }}>
            ⚠️ 삭제된 게시글은 복구할 수 없습니다.
          </p>
        </Modal>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "삭제 확인 다이얼로그의 실제 사용 예시입니다.",
      },
    },
  },
};
