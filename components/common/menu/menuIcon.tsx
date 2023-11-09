import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";

const MenuIcon = () => {
  return (
    <Link href="/" className="hover:cursor-pointer w-[50px] mr-3">
      <AspectRatio
        ratio={128 / 35}
        className="flex items-center justify-center"
      >
        <Image
          src="/accent.png"
          alt="menu icon"
          width={100}
          height={100}
          className="ml-3"
        ></Image>
      </AspectRatio>
    </Link>
  );
};
export default MenuIcon;
