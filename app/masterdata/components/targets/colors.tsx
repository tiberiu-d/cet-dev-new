// visual components
import { Button } from "@/components/ui/button";

// import icons
import { DeleteIcon, PlusCircleIcon, Trash2Icon } from "lucide-react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

// hooks
import { useColors } from "@/services/masterdata/colors/queries";

// 3rd party
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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
import NewColor from "@/components/masterdata/postColor";
import UpdateColor from "@/components/masterdata/updateColor";
import { useDeleteColorByID } from "@/services/masterdata/colors/mutations";
import toast from "react-hot-toast";

const MasterdataColors = () => {
  const colorsQuery = useColors();
  const deleteColorMutation = useDeleteColorByID();

  const handleDelete = (ID: number) => {
    deleteColorMutation.mutate(ID);
    toast.success("Record deleted");
  };

  if (colorsQuery.data)
    return (
      <div className="w-full h-full p-3 flex flex-col items-start gap-10">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="flex items-center gap-2">
              <PlusCircleIcon className="w-4 h-4" />
              <span className="text-sm">New Record</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="shadow-xl flex flex-col w-[420px]">
            <NewColor />
          </PopoverContent>
        </Popover>
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
              <ContextMenu key={rowIdx}>
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
                    <TableCell>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button className="flex items-center gap-2">
                            <PlusCircleIcon className="w-4 h-4" />
                            <span className="text-sm">Edit Record</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="shadow-xl flex flex-col w-[420px]">
                          <UpdateColor ID={row.ID} />
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                    <TableCell>
                      <DeleteIcon
                        className="w-4 h-4 text-red-600"
                        onClick={() => handleDelete(row.ID)}
                      />
                    </TableCell>
                  </TableRow>
                </ContextMenuTrigger>
                <ContextMenuContent className="flex flex-col gap-1">
                  <ContextMenuItem>
                    <div className="flex items-center gap-2">
                      <MagnifyingGlassIcon className="w-4 h-4" />
                      <span className="text-sm">Edit record</span>
                    </div>
                  </ContextMenuItem>
                  <Separator orientation="horizontal" />
                  <ContextMenuItem className="w-[150px] text-red-500">
                    <div
                      className="flex items-center gap-2"
                      onClick={() => {
                        console.log("trying to delete " + row.ID);
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
    );
};
export default MasterdataColors;
