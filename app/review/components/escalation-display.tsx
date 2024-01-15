import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

// types import
import { EscalationType } from "@/types/escalation";

// additional components
import OnePager from "./details/one-pager";
import HeaderData from "@/app/review/components/details/header-data";

interface EscalationDisplayProps {
  escalation: EscalationType | null;
}

const EscalationDisplay = ({ escalation }: EscalationDisplayProps) => {
  if (escalation) {
    return (
      <div className="w-full h-full flex flex-col items-top">
        <HeaderData
          ID={escalation.ID}
          TITLE={escalation.TITLE}
          DESCRIPTION={escalation.DESCRIPTION}
          ESCAL_DATE={escalation.ESCAL_DATE}
          DESCAL_DATE={escalation.DESCAL_DATE}
          LEVEL={escalation.LEVEL}
          LEVEL_COLOR={escalation.LEVEL_COLOR}
        />
        <Tabs
          className="flex flex-col items-center overflow-hidden relative"
          defaultValue="dash"
        >
          <Separator className="sticky top-5" />
          <TabsList className="sticky">
            <TabsTrigger value="dash">One Pager</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>
          <TabsContent value="dash" className="flex-grow overflow-auto">
            <ScrollArea className="h-full px-4 py-2">
              <OnePager ESCALATION_ID={escalation.ID} />
            </ScrollArea>
          </TabsContent>
          <TabsContent value="history">two</TabsContent>
          <TabsContent value="feedback">three</TabsContent>
        </Tabs>
      </div>
    );
  }

  return <div>select an escalation from the sidebar</div>;
};
export default EscalationDisplay;
