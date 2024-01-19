// hook
import { useMasterdata } from "@/hooks/useMasterdata";

// additional components
import MasterdataColors from "./targets/colors";
import MasterdataQCAMs from "./targets/qcams";
import MasterdataLevels from "./targets/levels";

const MasterdataDisplay = () => {
  const [MasterdataSettings, setMasterdataSettings] = useMasterdata();

  switch (MasterdataSettings.selected_target) {
    case 1:
      return <MasterdataColors />;
    case 2:
      return <MasterdataQCAMs />;
    case 3:
      return <MasterdataLevels />;
    default:
      return (
        <div className="h-full w-full flex flex-col items-center justify-center">
          <div>once data is loaded, select a target from the sidebar</div>
        </div>
      );
  }
};
export default MasterdataDisplay;
