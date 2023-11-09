import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from "@/components/ui/menubar";

import {
  ClipboardCheckIcon,
  CogIcon,
  GitPullRequestDraft,
  GraduationCapIcon,
  MailQuestionIcon,
  PlayCircleIcon,
  PuzzleIcon,
  ScanTextIcon,
  ServerCrashIcon,
  ShieldEllipsisIcon,
  StickyNoteIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";

import MenuIcon from "./menuIcon";
import MenuTitle from "./menuTitle";

import Link from "next/link";

const MenuBar = () => {
  return (
    <Menubar className="rounded-b-none bg-slate-100 flex items-center justify-between">
      <div className="flex items-center justify-center">
        <MenuIcon />
        <MenubarMenu>
          <MenubarTrigger className="hover:bg-slate-200 cursor-pointer">
            File
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem disabled>
              <UserIcon className="h-4 w-4 mr-3" />
              Login <MenubarShortcut>⌘L</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="hover:bg-slate-200 cursor-pointer">
            View
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem disabled>
              <ClipboardCheckIcon className="h-4 w-4 mr-3" />
              Dashboard
            </MenubarItem>
            <MenubarItem disabled>
              <PlayCircleIcon className="h-4 w-4 mr-3" />
              One page Review
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <StickyNoteIcon className="h-4 w-4 mr-3" />
              All Escalations
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="hover:bg-slate-200 cursor-pointer">
            Masterdata
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <PuzzleIcon className="h-4 w-4 mr-3" />
              New Escalation
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem disabled>
              <GitPullRequestDraft className="h-4 w-4 mr-3" />
              New Escalation Status
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="hover:bg-slate-200 cursor-pointer">
            Help
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <GraduationCapIcon className="h-4 w-4 mr-3" />
              Documentation
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <MailQuestionIcon className="h-4 w-4 mr-3" />
              Contact QDM
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </div>
      <MenuTitle />
    </Menubar>
  );
};
export default MenuBar;
