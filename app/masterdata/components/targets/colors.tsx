// visual components
import { Button } from "@/components/ui/button";

// import icons
import { DeleteIcon, PlusCircleIcon, Trash2Icon } from "lucide-react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

// hooks
import { useColors, useColorsByID } from "@/services/masterdata/colors/queries";
import useColorModal from "@/hooks/modals/useColorModal";

// shadcn
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
import { useDeleteColorByID } from "@/services/masterdata/colors/mutations";
import toast from "react-hot-toast";
import ColorModal from "@/components/masterdata/colors/color-modal";
import { ColorType } from "@/types/masterdata";

const MasterdataColors = () => {
  const colorsQuery = useColors();
  const deleteColorMutation = useDeleteColorByID();
  const ColorModalInstance = useColorModal();

  const handleDelete = (ID: number) => {
    deleteColorMutation.mutate(ID);
    toast.success("Record deleted");
  };

  const handleEdit = ({ ID, LABEL, VALUE, EXPLANATION }: ColorType) => {
    ColorModalInstance.defaultValues = { ID, LABEL, VALUE, EXPLANATION };

    // open the damn thing
    ColorModalInstance.onOpen();
  };

  const handleCreate = () => {
    // reset the defaultValues
    ColorModalInstance.defaultValues = {
      ID: 0,
      LABEL: "",
      VALUE: "#000000",
      EXPLANATION: "",
    };

    ColorModalInstance.onOpen();
  };

  if (colorsQuery.data)
    return (
      <>
        <ColorModal />
        <div className="w-full h-full p-3 flex flex-col items-start gap-10">
          <Button className="flex items-center gap-2" onClick={handleCreate}>
            <PlusCircleIcon className="w-4 h-4" />
            <span className="text-sm">New Record</span>
          </Button>
          <Table>
            <TableCaption>A list of all available color codes.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="">Color Code</TableHead>
                <TableHead>Hex-code Value</TableHead>
                <TableHead>Color Code Explanation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {colorsQuery.data?.map((row, rowIdx) => (
                <ContextMenu key={row.ID}>
                  <ContextMenuTrigger asChild>
                    <TableRow
                      key={rowIdx}
                      className="hover:bg-blue-50 hover:cursor-pointer"
                    >
                      <TableCell className="font-medium">{row.LABEL}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-5">
                          <div
                            className="rounded-full h-4 w-4"
                            style={{ backgroundColor: `${row.VALUE}` }}
                          />
                          <span>{row.VALUE!.toLowerCase()}</span>
                        </div>
                      </TableCell>
                      <TableCell>{row.EXPLANATION}</TableCell>
                    </TableRow>
                  </ContextMenuTrigger>
                  <ContextMenuContent className="flex flex-col gap-1">
                    <ContextMenuItem>
                      <div
                        className="flex items-center gap-2"
                        onClick={() =>
                          handleEdit({
                            ID: row.ID,
                            LABEL: row.LABEL,
                            VALUE: row.VALUE,
                            EXPLANATION: row.EXPLANATION,
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
export default MasterdataColors;
