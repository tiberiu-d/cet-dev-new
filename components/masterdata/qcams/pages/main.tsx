// imports
import toast from "react-hot-toast";

// 3rd party viz components
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
import { Badge } from "@/components/ui/badge";

// hooks
import useQCAMModal from "../hooks/useQCAMModal";
import { useGetQCAMs } from "../services/queries";

// icons
import { DeleteIcon, PlusCircleIcon, Trash2Icon } from "lucide-react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { GridLoader } from "react-spinners";

// my additional components
import QCAMsModal from "./modal/QCAM-modal";
import { useDeleteQCAMByID, usePutQCAMByID } from "../services/mutations";
import { Item } from "@radix-ui/react-menubar";

const MasterdataQCAMs = () => {
  // instantiate all hooks
  const modalInstance = useQCAMModal();
  const query_GET_QCAMs = useGetQCAMs();
  const deleteQCAM = useDeleteQCAMByID();

  // handler functions
  const handleCreate = () => {
    // reset default values to empty
    modalInstance.defaultValues = {
      ID: 0,
      FIRST_NAME: "",
      LAST_NAME: "",
      EMAIL: "",
      ALLOCATIONS: [],
    };

    modalInstance.onOpen();
  };
  const handleEdit = ({
    ID,
    FIRST_NAME,
    LAST_NAME,
    EMAIL,
    ALLOCATIONS,
  }: any) => {
    const newAllocations = ALLOCATIONS.map((item: any) => ({
      value: item.GROUP_ID,
      label: item.GROUP_NAME,
    }));
    modalInstance.defaultValues = {
      ID,
      FIRST_NAME,
      LAST_NAME,
      EMAIL,
      ALLOCATIONS: newAllocations,
    };

    modalInstance.onOpen();
  };
  const handleDelete = (ID: number) => {
    deleteQCAM.mutate(ID);
    toast.success("Record deleted");
  };

  // display
  if (query_GET_QCAMs.isLoading)
    return (
      <>
        <div className="h-full flex flex-col items-center justify-center gap-10">
          <GridLoader color="#36d7b7" size={15} speedMultiplier={1} />
          <span>data is loading, hold on for a minute or two ...</span>
        </div>
      </>
    );

  // if nothing, then basic error message
  if (query_GET_QCAMs.isError)
    return (
      <>
        <div className="h-full flex flex-col items-center justify-center">
          nothing to show, something went very wrong ...
        </div>
      </>
    );

  if (query_GET_QCAMs.data)
    return (
      <>
        <QCAMsModal />
        <div className="w-full h-full p-3 flex flex-col items-start gap-10">
          <Button className="flex items-center gap-2" onClick={handleCreate}>
            <PlusCircleIcon className="w-4 h-4" />
            <span className="text-sm">New Record</span>
          </Button>
          <Table>
            <TableCaption>A list of all available QCAMs.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>QCAM</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Customers allocated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {query_GET_QCAMs.data.map((row, rowIdx) => (
                <ContextMenu key={row.ID}>
                  <ContextMenuTrigger asChild>
                    <TableRow
                      key={rowIdx}
                      className="hover:bg-blue-50 hover:cursor-pointer w-full"
                    >
                      <TableCell className="font-medium w-1/6">
                        {row.FIRST_NAME} {row.LAST_NAME}
                      </TableCell>
                      <TableCell className="font-medium w-1/6">
                        {row.EMAIL}
                      </TableCell>
                      {row.ALLOCATIONS?.length! > 0 ? (
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {row.ALLOCATIONS?.map((customer, idx) => (
                              <Badge key={idx}>{customer.GROUP_NAME}</Badge>
                            ))}
                          </div>
                        </TableCell>
                      ) : (
                        <TableCell>
                          no customer groups allocated... yet
                        </TableCell>
                      )}
                    </TableRow>
                  </ContextMenuTrigger>
                  <ContextMenuContent className="flex flex-col gap-1">
                    <ContextMenuItem>
                      <div
                        className="flex items-center gap-2"
                        onClick={() =>
                          handleEdit({
                            ID: row.ID!,
                            FIRST_NAME: row.FIRST_NAME,
                            LAST_NAME: row.LAST_NAME,
                            EMAIL: row.EMAIL,
                            ALLOCATIONS: row.ALLOCATIONS,
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
                          handleDelete(row.ID!);
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

export default MasterdataQCAMs;
