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
import useLevelModal from "@/hooks/modals/useLevelModal";

// import icons
import { DeleteIcon, PlusCircleIcon, Trash2Icon } from "lucide-react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const MasterdataLevels = () => {
  // instantiate all the hooks and shit
  const storeLevelModal = useLevelModal();
  const query_GETLevels = useGetLevels();

  // functions
  const handleCreate = () => {
    // reset the defaultValues
    storeLevelModal.defaultValues = {
      ID: 0,
      GROUP_ID: "",
      COLOR_ID: 0,
      VALUE: "",
      EXPLANATION: "",
    };
    storeLevelModal.onOpen();
  };

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
                <TableHead>Customer Group</TableHead>
                <TableHead>Level Definition</TableHead>
                <TableHead>Level Explanation / Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {query_GETLevels.data?.map((row, rowIdx) => (
                <TableRow
                  key={rowIdx}
                  className="hover:bg-blue-50 hover:cursor-pointer w-full"
                >
                  <TableCell className="font-medium w-1/6">
                    {row.GROUP_NAME}
                  </TableCell>
                  <TableCell className="w-2/6">
                    <div className="flex items-center gap-4">
                      <div
                        className="h-4 w-4 rounded-full"
                        style={{ backgroundColor: `${row.COLOR_VALUE}` }}
                      />
                      <div>{row.LEVEL_VALUE}</div>
                    </div>
                  </TableCell>
                  <TableCell>{row.LEVEL_EXPLANATION}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </>
    );
};
export default MasterdataLevels;
