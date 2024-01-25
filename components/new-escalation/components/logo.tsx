import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const FormLogo = () => {
  return (
    <Image
      src="/appLogo.png"
      alt="logo"
      width={50}
      height={50}
      className="absolute right-4 bottom-3 cursor-pointer"
    />
  );
};
export default FormLogo;
