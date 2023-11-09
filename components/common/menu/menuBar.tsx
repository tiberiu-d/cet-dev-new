import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import {
  ClipboardCheckIcon,
  GitPullRequestDraft,
  GraduationCapIcon,
  MailQuestionIcon,
  PlayCircleIcon,
  PuzzleIcon,
  StickyNoteIcon,
  UserIcon,
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
          <MenubarTrigger className="hover:bg-slate-200">File</MenubarTrigger>
          <MenubarContent>
            <Link href="/login">
              <MenubarItem>
                <UserIcon className="h-4 w-4 mr-3" />
                Login <MenubarShortcut>⌘L</MenubarShortcut>
              </MenubarItem>
            </Link>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="hover:bg-slate-200">View</MenubarTrigger>
          <MenubarContent>
            <Link href="/dashboard" aria-disabled>
              <MenubarItem>
                <ClipboardCheckIcon className="h-4 w-4 mr-3" />
                Dashboard
              </MenubarItem>
            </Link>
            <MenubarItem disabled>
              <PlayCircleIcon className="h-4 w-4 mr-3" />
              One page Review
            </MenubarItem>
            <MenubarSeparator />
            <Link href="/escalations">
              <MenubarItem>
                <StickyNoteIcon className="h-4 w-4 mr-3" />
                All Escalations
              </MenubarItem>
            </Link>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="hover:bg-slate-200">
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
          <MenubarTrigger className="hover:bg-slate-200">Help</MenubarTrigger>
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
