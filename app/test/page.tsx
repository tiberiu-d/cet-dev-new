import { Separator } from "@/components/ui/separator";
import { DummyTextLG, DummyTextMD } from "./dummy-text";

import HeaderMenu from "./header-menu";
import HeaderData from "./header-data";

const TestPage = () => {
  return (
    <div className="w-full h-full flex flex-col items-top border rounded-xl">
      {/* <HeaderMenu ID="test-id-123" CREATED_ON="01.01.2024" />
      <Separator /> */}
      <HeaderData />
      <div className="w-full bg-green-200 flex-grow overflow-y-auto relative">
        <div className=" bg-red-400 sticky top-0 p-4">test</div>
        <div className="px-4">
          <DummyTextLG />
          <DummyTextLG />
        </div>
      </div>
    </div>
  );
};
export default TestPage;
