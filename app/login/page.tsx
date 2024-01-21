"use client";

import { Button } from "@/components/ui/button";
import useColorModal from "@/hooks/modals/useColorModal";

const LoginPage = () => {
  const ColorModalInstance = useColorModal();

  const handleOnClose = () => {
    console.log("modal closed");
  };

  const handleOnSubmit = () => {
    console.log("modal data saved");
  };

  return (
    <>
      <Button
        variant="default"
        onClick={ColorModalInstance.onOpen}
        className="hover:cursor-pointer"
      >
        Click Me!
      </Button>
    </>
  );
};
export default LoginPage;
