import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const SearchBar = () => {
  return (
    <Tabs defaultValue="all" className="w-full">
      <div className="flex items-center justify-between py-2 w-full">
        <h1 className="text-xl font-bold">Escalations</h1>
        <TabsList className="backdrop-blur-sm">
          <TabsTrigger value="all" className="text-zinc-600 dark:text-zinc-200">
            All types
          </TabsTrigger>
          <TabsTrigger
            value="yellow"
            className="text-zinc-600 dark:text-zinc-200"
          >
            Yellow
          </TabsTrigger>
          <TabsTrigger value="red" className="text-zinc-600 dark:text-zinc-200">
            Red
          </TabsTrigger>
        </TabsList>
      </div>

      <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full py-2">
        <form>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search" className="pl-8" />
          </div>
        </form>
      </div>
    </Tabs>
  );
};
export default SearchBar;
