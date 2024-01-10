import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// icons and graphics
import {
  Archive,
  ArchiveX,
  Clock,
  Forward,
  MoreVertical,
  Reply,
  ReplyAll,
  Trash2,
} from "lucide-react";

// type definition
type EscalationType = {
  ID: string;
  ESCAL_DATE: string;
  DESCAL_DATE: string;
  TITLE: string;
  DESCRIPTION: string;
  CUSTOMER_GROUP: string;
  LEVEL: string;
  LEVEL_COLOR: string;
};

interface EscalationDisplayProps {
  escalation: EscalationType | null;
}

const EscalationDisplay = ({ escalation }: EscalationDisplayProps) => {
  if (escalation) {
    return (
      <div className="content flex h-full flex-col justify-between">
        <div className="top">
          <div className="top-row flex items-center justify-between bg-gray-50">
            <p className="p-4">
              Now watching escalation{" "}
              <span className="font-bold text-blue-500">{escalation.ID}</span>
            </p>
            <div className="flex flex-row items-center">
              <Separator orientation="vertical" className="mx-2 h-6" />
              <div className="mr-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" disabled={!escalation}>
                      <MoreVertical className="h-4 w-4" />
                      <span className="sr-only">More</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Quick Action #1</DropdownMenuItem>
                    <DropdownMenuItem>Quick Action #2</DropdownMenuItem>
                    <DropdownMenuItem>Quick Action #3</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          <Separator />
          <div className="header p-4 flex items-center mb-8">
            <div className="test w-[75px] h-[75px] border-2 rounded-full flex items-center justify-center">
              customer
            </div>
            <div className="pl-6 flex flex-col w-full">
              <div className="flex items-center justify-between pb-4">
                <div className="title text-lg font-semibold">
                  {escalation.TITLE}
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <p>escalated on {escalation.ESCAL_DATE}</p>
                  </div>
                </div>
              </div>
              <div className="desc">{escalation.DESCRIPTION}</div>
            </div>
          </div>
          <div className="relative w-full">
            <Separator />
            <div className="w-full ">
              <Tabs
                defaultValue="dash"
                className="w-full flex flex-col items-center"
              >
                <TabsList className="-mt-5">
                  <TabsTrigger value="dash">One Pager</TabsTrigger>
                  <TabsTrigger value="customer">Customer</TabsTrigger>
                  <TabsTrigger value="vitesco">Vitesco</TabsTrigger>
                  <TabsTrigger value="additional">Additional</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                </TabsList>
                <TabsContent value="dash" className="w-full p-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis ex tempora cumque minima quasi non voluptatem unde, at
                  dicta magnam porro illo, esse consectetur autem voluptate
                  molestias repellat commodi? Accusamus ducimus corrupti eum vel
                  officiis doloribus, dignissimos veniam saepe asperiores.
                  Accusantium debitis blanditiis commodi fuga voluptatibus
                  earum, quaerat maxime ab asperiores, tempora officiis
                  repudiandae aspernatur voluptate at numquam autem illum quidem
                  fugiat! Incidunt repellendus dolor natus nostrum, adipisci
                  porro! Modi molestias quos libero ipsum ipsa nisi quod.
                  Repellendus laudantium commodi nemo quaerat vel veniam
                  consequatur eum aut, expedita voluptatem temporibus suscipit
                  illo aperiam inventore laboriosam quasi asperiores delectus
                  eveniet porro.
                </TabsContent>
                <TabsContent className="w-full p-4" value="customer">
                  Customer things
                </TabsContent>
                <TabsContent className="w-full p-4" value="vitesco">
                  Vtesco things
                </TabsContent>
                <TabsContent className="w-full p-4" value="additional">
                  Additional things
                </TabsContent>
                <TabsContent className="w-full p-4" value="history">
                  History things
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
        <div className="bottom">
          <Separator />
          <div className="footer p-4 flex flex-col items-center w-full">
            <span className="font-bold text-lg">footer</span> (optional /
            contextual)
          </div>
        </div>
      </div>
    );
  }

  return <div>select an escalation from the sidebar</div>;
};
export default EscalationDisplay;
