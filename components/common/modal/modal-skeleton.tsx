"use client";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { X } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  header?: React.ReactElement | string;
  content?: React.ReactElement | string;
  footer?: React.ReactElement | string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  header,
  content,
  footer,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) return null;

  return (
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none
      bg-neutral-100/25"
    >
      <div className="relative min-w-[450px] max-w-2/5 h-auto">
        <Card
          className={`translate duration-300 h-full
              ${showModal ? "translate-y-0" : "translate-y-full"}
              ${showModal ? "opacity-100" : "opacity-0"}
            `}
        >
          <div className="translate h-auto border-[1px] rounded-lg shadow-xl relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/* header */}
            <div className="flex items-center p-6 pb-0 rounded-t space-between relative">
              <button
                className="p-1 border-0 hover:opacity-70 transition absolute right-3 top-3"
                onClick={handleClose}
              >
                <X size={18} />
              </button>
              <div>{header}</div>
            </div>
            {/* body */}
            <div className="p-4">{content}</div>
            {footer && (
              <>
                <Separator />
                <div className="px-3 py-1 text-xs bg-neutral-50 flex rounded-b">
                  {footer}
                </div>
              </>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};
export default Modal;
