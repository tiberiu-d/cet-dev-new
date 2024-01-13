import CustomerLogo from "./customer-logo";
import { DummyTextMD } from "./dummy-text";

import { Badge } from "@/components/ui/badge";

const HeaderData = () => {
  return (
    <div className="p-4 flex items-center text-justify">
      <CustomerLogo />
      <div className="flex flex-col items-start gap-2">
        <div className="text-xl font-bold flex items-center gap-4">
          <Badge>ESCAL-001-TEST</Badge>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            molestiae!
          </div>
        </div>
        <DummyTextMD />
        <div className="flex items-center gap-4">
          <Badge>something 1</Badge>
          <Badge>something 2</Badge>
          <Badge>something 3</Badge>
        </div>
      </div>
    </div>
  );
};
export default HeaderData;
