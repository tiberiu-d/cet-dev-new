import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

// hooks
import { useMasterdata } from "@/hooks/useMasterdata";

// utility
import { cn } from "@/lib/utils";

type MasterdataEntryType = {
  ID: number;
  NAME: string;
  DESCRIPTION: string;
  ENTRIES: number;
};

type MasterdataListProps = {
  items: MasterdataEntryType[];
};

const MasterdataList = ({ items }: MasterdataListProps) => {
  const [confMasterdata, setConfMasterdata] = useMasterdata();
  return (
    <ScrollArea className="h-full">
      <div className="flex flex-col gap-3 p-4 pt-5">
        {items.map((item: MasterdataEntryType) => (
          <button
            key={item.NAME}
            className={cn(
              "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
              item.ID === confMasterdata.selected_target && "bg-muted"
            )}
            onClick={() =>
              setConfMasterdata({
                ...confMasterdata,
                selected_target: item.ID,
              })
            }
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center">
                <div className="font-bold">{item.NAME}</div>
              </div>
              <div className="flex items-center line-clamp-2 text-xs text-muted-foreground mb-2">
                {item.DESCRIPTION.substring(0, 300)}
              </div>
              <div className="flex items-center gap-2 justify-end">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">
                    contains {item.ENTRIES} record(s)
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
export default MasterdataList;
