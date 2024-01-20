// visual components
import { Button } from "@/components/ui/button";

// import icons
import { PlusCircleIcon, Trash2Icon } from "lucide-react";

//libs
import axios from "axios";

// hooks
import { useSearchParams } from "@/hooks/useSearch";
import { useQuery } from "@tanstack/react-query";

// types
import type { TableProps } from "antd";
import { SearchParamsType } from "@/types/search";
import { PartialColorType } from "@/types/masterdata";

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
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import NewColor from "@/components/masterdata/newColor";
import { useColors } from "@/services/masterdata/colors/queries";

const fetchColors = async ({ target }: Partial<SearchParamsType>) => {
  const TARGET = `${target}/api/masterdata/colors`;

  const response = await axios.get(TARGET);
  return response.data;
};

const deleteColor: any = async (
  { target }: Partial<SearchParamsType>,
  ID: number
) => {
  const TARGET = `${target}/api/masterdata/colors/${ID}`;

  const response = await axios.delete(TARGET);
  console.log(response.data);
};

const MasterdataColors = () => {
  const colorsQuery = useColors();

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
