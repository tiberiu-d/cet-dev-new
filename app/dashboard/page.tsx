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

// hooks
import useMultiFormModal from "@/components/multistep-form/useMultiFormModal";

// icons
import { DeleteIcon, PlusCircleIcon, Trash2Icon } from "lucide-react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { GridLoader } from "react-spinners";

const DashboardPage = () => {
  const handleCreate = () => {};
  const handleEdit = () => {};
  const handleDelete = () => {};

  return <div>The Dashboard Page</div>;
};
export default DashboardPage;
