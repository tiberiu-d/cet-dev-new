"use client";

import Modal from "@/components/common/modal/modal-skeleton";

// hooks
import useLevelModal from "@/hooks/modals/useLevelModal";

// additional components
import LevelHead from "./level-head";
import LevelForm from "./level-form";

const LevelModal = () => {
  // instantiate the things...
  const LevelModalInstance = useLevelModal();

  // handler functions
  const handleOnSubmit = () => {
    console.log("testing");
  };

  return (
    <Modal
      disabled={false}
      isOpen={LevelModalInstance.isOpen}
      onSubmit={handleOnSubmit}
      onClose={LevelModalInstance.onClose}
      header={<LevelHead />}
      content={<LevelForm />}
    />
  );
};
export default LevelModal;
