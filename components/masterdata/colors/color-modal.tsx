"use client";

import Modal from "@/components/common/modal/modal-skeleton";

//hooks
import useColorModal from "@/hooks/modals/useColorModal";
import ColorForm from "./color-form";
import ColorHead from "./color-head";

const ColorModal = () => {
  const color_modal_instance = useColorModal();

  const onSubmit = () => {
    console.log("testing");
  };

  return (
    <Modal
      disabled={false}
      isOpen={color_modal_instance.isOpen}
      onSubmit={onSubmit}
      onClose={color_modal_instance.onClose}
      header={<ColorHead />}
      content={<ColorForm />}
    />
  );
};
export default ColorModal;
