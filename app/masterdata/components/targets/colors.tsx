// visual components
// import { Space, Table, Tag } from "antd";
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
import { PartialMasterdataColorType } from "@/types/masterdata";

// 3rd party
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// mine
import NewColor from "@/components/masterdata/newColor";

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

const fetchColors = async ({ target }: Partial<SearchParamsType>) => {
  const TARGET = `${target}/api/masterdata/colors`;

  const response = await axios.get(TARGET);
  return response.data.results;
};

const deleteColor = async (
  { target }: Partial<SearchParamsType>,
  ID: number
) => {
  const TARGET = `${target}/api/masterdata/colors/${ID}`;

  const response = await axios.delete(TARGET);
  console.log(response.data);
};

// table column defs
const tableColumns: TableProps<PartialMasterdataColorType>["columns"] = [
  {
    title: "Color Label",
    dataIndex: "LABEL",
    key: "LABEL",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "Hex-code Value",
    dataIndex: "VALUE",
    key: "VALUE",
    render: (value) => (
      <div className="flex items-center gap-5">
        <div
          className="rounded-full h-4 w-4"
          style={{ backgroundColor: `${value}` }}
        />
        <span>{value.toLowerCase()}</span>
      </div>
    ),
  },
  {
    title: "Color code explanation",
    dataIndex: "EXPLANATION",
    key: "EXPLANATION",
    render: (value) => <div>{value}</div>,
  },
];

const MasterdataColors = () => {
  const [params, setParams] = useSearchParams();

  const { data, isLoading, isError } = useQuery<PartialMasterdataColorType[]>({
    queryKey: ["masterdata_colors", params],
    queryFn: () => fetchColors(params),
  });

  let records = data;

  if (records)
    return (
      <div className="w-full h-full p-3 flex flex-col items-start gap-10">
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
            {records?.map((row, rowIdx) => (
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
                        records = records!.filter((obj) => obj.ID !== row.ID);
                        console.log(records);
                        deleteColor(params, row.ID!);
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
        {/* <Table
        className="w-full"
        columns={tableColumns}
        dataSource={data}
        bordered
        title={() => (
          <div className="flex items-center justify-start">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  className="flex items-center gap-3"
                >
                  <PlusCircleIcon className="h-4 w-4" />
                  <span>new Color</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="px-4 py-4 w-[420px]">
                <NewColor />
              </PopoverContent>
            </Popover>
          </div>
        )}
        footer={() => (
          <div className="text-xs">{`showing ${data?.length} records`}</div>
        )}
      /> */}
      </div>
    );
};
export default MasterdataColors;
