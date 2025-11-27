import React, { useEffect } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const modalOverlayVariants = cva("modal-overlay");

const modalContentVariants = cva("modal-content", {
  variants: {
    size: {
      small: "modal-small",
      medium: "modal-medium",
      large: "modal-large",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

const modalHeaderVariants = cva("modal-header");

const modalTitleVariants = cva("modal-title");

const modalCloseVariants = cva("modal-close");

const modalBodyVariants = cva("modal-body");

const modalFooterVariants = cva("modal-footer");

export interface ModalProps extends VariantProps<typeof modalContentVariants> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  showFooter?: boolean;
  footerContent?: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = "medium",
  showFooter = false,
  footerContent,
  className,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={modalOverlayVariants()} onClick={onClose}>
      <div className={modalContentVariants({ size, className })} onClick={(e) => e.stopPropagation()}>
        {title && (
          <div className={modalHeaderVariants()}>
            <h3 className={modalTitleVariants()}>{title}</h3>
            <button className={modalCloseVariants()} onClick={onClose}>
              ×
            </button>
          </div>
        )}
        <div className={modalBodyVariants()}>{children}</div>
        {showFooter && footerContent && <div className={modalFooterVariants()}>{footerContent}</div>}
      </div>
    </div>
  );
};
