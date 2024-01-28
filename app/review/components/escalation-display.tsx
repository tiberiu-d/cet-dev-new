import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

// additional fn
import { format } from "date-fns";

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
    console.log(escalation);
    return (
      <div className="w-full h-full flex flex-col items-top">
        <HeaderData
          ID={escalation.ID}
          TITLE={escalation.TITLE}
          DESCRIPTION={escalation.DESCRIPTION}
          CREATION_DATE={format(escalation.CREATION_DATE, "dd.MM.yyyy")}
          ESCAL_DATE={format(escalation.ESCAL_DATE, "dd.MM.yyyy")}
          DESCAL_DATE={format(escalation.DESCAL_DATE, "dd.MM.yyyy")}
          ESTIMATED_DESCAL_DATE={format(escalation.ESTIMATED_DESCAL_DATE, "dd.MM.yyyy")}
          LEVEL={escalation.LEVEL}
          LEVEL_COLOR={escalation.LEVEL_COLOR}
          CUSTOMER_GROUP_ID={escalation.CUSTOMER_GROUP_ID}
          CUSTOMER_GROUP={escalation.CUSTOMER_GROUP}
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
          <TabsContent value="dash" className="w-full flex-grow overflow-auto">
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
