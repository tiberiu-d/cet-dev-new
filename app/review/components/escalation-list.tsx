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

interface EscalationListProps {
  items: Escalation[];
}

const EscalationList = ({ items }: EscalationListProps) => {
  const [escalation, setEscalation] = useEscalation();

  return (
    <ScrollArea className="h-full">
      <div className="flex flex-col gap-2 p-4 pt-0">
        {items.map((item: Escalation) => (
          <button
            key={item.id}
            className={cn(
              "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
              escalation.selected_id === item.id && "bg-muted"
            )}
            onClick={() =>
              setEscalation({ ...escalation, selected_id: item.id })
            }
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center justify-between w-full mb-2">
                <div className="font-semibold text-xs">{item.id}</div>
                <div className="text-xs">from {item.escal_date}</div>
              </div>
              <Separator />
              <div className="flex items-center">
                <div className="font-bold">{item.title}</div>
              </div>
              <div className="line-clamp-2 text-xs text-muted-foreground mb-2">
                {item.description.substring(0, 300)}
              </div>
              <div className="flex items-center gap-2 justify-between">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="default"
                    className={cn(
                      item.level.color === "yellow" &&
                        "bg-yellow-300 text-black hover:bg-yellow-300",
                      item.level.color === "red" &&
                        "bg-red-500 text-white hover:bg-red-500",
                      "font-thin text-xs"
                    )}
                  >
                    {item.level.name}
                  </Badge>
                  <Badge variant="outline">{item.customer_group}</Badge>
                </div>
                <div>
                  <Badge variant="secondary">
                    <Calendar className="w-3 h-3 mr-2" />
                    {item.est_descal_date}
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
