import toast from "react-hot-toast";

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

// import additional components
import LevelModal from "@/components/masterdata/levels/level-modal";
import { LevelType } from "@/types/masterdata";
import { useDeleteLevelByID } from "@/services/masterdata/levels/mutations";

const MasterdataLevels = () => {
  // instantiate all the hooks and shit
  const storeLevelModal = useLevelModal();
  const query_GETLevels = useGetLevels();
  const mutation_DELETELevel = useDeleteLevelByID();

  // functions
  const handleCreate = () => {
    // reset the defaultValues
    storeLevelModal.defaultValues = {
      ID: 0,
      GROUP_ID: "",
      COLOR_ID: "",
      VALUE: "",
      EXPLANATION: "",
    };

    storeLevelModal.onOpen();
  };

  const handleEdit = ({
    ID,
    GROUP_ID,
    COLOR_ID,
    VALUE,
    EXPLANATION,
  }: LevelType) => {
    // set the default values
    storeLevelModal.defaultValues = {
      ID,
      GROUP_ID,
      COLOR_ID,
      VALUE,
      EXPLANATION,
    };

    storeLevelModal.onOpen();
  };

  const handleDelete = (ID: number) => {
    mutation_DELETELevel.mutate(ID);
    toast.success("Record deleted");
  };

  if (query_GETLevels.data)
    return (
      <>
        <LevelModal />
        <div className="w-full h-full p-3 flex flex-col items-start gap-10">
          <Button className="flex items-center gap-2" onClick={handleCreate}>
            <PlusCircleIcon className="w-4 h-4" />
            <span className="text-sm">New Record</span>
          </Button>
          <Table>
            <TableCaption>
              A list of all available escalation levels.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Customer Group</TableHead>
                <TableHead>Level Definition</TableHead>
                <TableHead>Level Explanation / Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {query_GETLevels.data?.map((row, rowIdx) => (
                <ContextMenu key={row.ID}>
                  <ContextMenuTrigger asChild>
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
                  </ContextMenuTrigger>
                  <ContextMenuContent className="flex flex-col gap-1">
                    <ContextMenuItem>
                      <div
                        className="flex items-center gap-2"
                        onClick={() =>
                          handleEdit({
                            ID: row.ID,
                            COLOR_ID: row.COLOR_ID.toString(),
                            GROUP_ID: row.GROUP_ID,
                            VALUE: row.LEVEL_VALUE,
                            EXPLANATION: row.LEVEL_EXPLANATION,
                          })
                        }
                      >
                        <MagnifyingGlassIcon className="w-4 h-4" />
                        <span className="text-sm">Edit record</span>
                      </div>
                    </ContextMenuItem>
                    <Separator orientation="horizontal" />
                    <ContextMenuItem className="w-[150px] text-red-500">
                      <div
                        className="flex items-center gap-2"
                        onClick={() => {
                          handleDelete(row.ID);
                        }}
                      >
                        <Trash2Icon className="w-4 h-4" />
                        <span className="text-sm">Delete</span>
                      </div>
                      <ContextMenuShortcut>⌘D</ContextMenuShortcut>
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              ))}
            </TableBody>
          </Table>
        </div>
      </>
    );
};
export default MasterdataLevels;
