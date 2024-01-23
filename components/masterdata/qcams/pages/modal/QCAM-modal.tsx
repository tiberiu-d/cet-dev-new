"use client";

import Modal from "@/components/common/modal/modal-skeleton";

// hooks
import useQCAMModal from "../../hooks/useQCAMModal";

// additional components
import QCAMHead from "./QCAM-modal-head";
import QCAMForm from "./QCAM-modal-form";

const QCAMsModal = () => {
  // instantiate the things...
  const modalInstance = useQCAMModal();

  // handler functions
  const handleOnSubmit = () => {
    console.log("testing");
  };

  return (
    <Modal
      disabled={false}
      isOpen={modalInstance.isOpen}
      onSubmit={handleOnSubmit}
      onClose={modalInstance.onClose}
      header={<QCAMHead />}
      content={<QCAMForm />}
    />
  );
};
export default QCAMsModal;
