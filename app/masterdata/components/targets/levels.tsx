// visual components
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  TableHeader,
} from "@/components/ui/table";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Separator } from "@/components/ui/separator";

// import hooks
import { useGetLevels } from "@/services/masterdata/levels/queries";

// import icons
import { DeleteIcon, PlusCircleIcon, Trash2Icon } from "lucide-react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const MasterdataLevels = () => {
  const query_GETLevels = useGetLevels();

  // functions
  const handleCreate = () => {
    console.log("cliked CREATE");
  };

  console.log(query_GETLevels.data);

  if (query_GETLevels.data)
    return (
      <>
        <div className="w-full h-full p-3 flex flex-col items-start gap-10">
          <Button className="flex items-center gap-2" onClick={handleCreate}>
            <PlusCircleIcon className="w-4 h-4" />
            <span className="text-sm">New Record</span>
          </Button>
          <Table>
            <TableCaption>A list of all available color codes.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Color Code</TableHead>
                <TableHead>Hex-code Value</TableHead>
                <TableHead>Color Code Explanation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody></TableBody>
          </Table>
        </div>
      </>
    );
};
export default MasterdataLevels;
