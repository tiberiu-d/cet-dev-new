// trigger imports
import { useEscalation } from "../use-escalation";
// utils imports
import { cn } from "@/lib/utils";
// types imports
import { Escalation } from "@/database/dummy_PreviewEscalations";
// UI components import
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
// icons & other graphics
import { Calendar } from "lucide-react";

// type definition
type EscalationType = {
  ID: string;
  ESCAL_DATE: string;
  DESCAL_DATE: string;
  TITLE: string;
  DESCRIPTION: string;
  CUSTOMER_GROUP: string;
  LEVEL: string;
  LEVEL_COLOR: string;
};
interface EscalationListProps {
  items: EscalationType[];
}

const EscalationList = ({ items }: EscalationListProps) => {
  const [escalation, setEscalation] = useEscalation();

  return (
    <ScrollArea className="h-full">
      <div className="flex flex-col gap-3 p-4 pt-0">
        {items.map((item: EscalationType) => (
          <button
            key={item.ID}
            className={cn(
              "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
              escalation.selected_id === item.ID && "bg-muted"
            )}
            onClick={() =>
              setEscalation({ ...escalation, selected_id: item.ID })
            }
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center justify-between w-full mb-2">
                <div className="font-semibold text-xs">{item.ID}</div>
                <div className="text-xs">from {item.ESCAL_DATE}</div>
              </div>
              <Separator />
              <div className="flex items-center">
                <div className="font-bold">{item.TITLE.substring(0, 50)}</div>
              </div>
              <div className="line-clamp-2 text-xs text-muted-foreground mb-2">
                {item.DESCRIPTION.substring(0, 300)}
              </div>
              <div className="flex items-center gap-2 justify-between">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="default"
                    className={cn(
                      item.LEVEL_COLOR.toLowerCase() === "y" &&
                        "bg-yellow-300 text-black hover:bg-yellow-300",
                        item.LEVEL_COLOR.toLowerCase() === "r" &&
                        "bg-red-500 text-white hover:bg-red-500",
                        item.LEVEL_COLOR.toLowerCase() === "n" &&
                        "bg-neutral-400 text-white hover:bg-neutral-400",
                      "font-thin text-xs"
                    )}
                  >
                    {item.LEVEL}
                  </Badge>
                  <Badge variant="outline">{item.CUSTOMER_GROUP}</Badge>
                </div>
                <div>
                  <Badge variant="secondary">
                    <Calendar className="w-3 h-3 mr-2" />
                    {item.DESCAL_DATE}
                  </Badge>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </ScrollArea>
  );
};
export default EscalationList;
