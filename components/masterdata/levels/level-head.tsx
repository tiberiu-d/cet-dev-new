// components
import { CardDescription, CardHeader } from "@/components/ui/card";

const LevelHead = () => {
  return (
    <>
      <CardHeader className="pb-4 px-2 pt-0 text-lg font-bold">
        New Escalation Level
      </CardHeader>
      <CardDescription className="pb-4 px-2 pt-2 text-justify">
        Errors will be higlighted and you can only save once you fixed them all.
      </CardDescription>
    </>
  );
};
export default LevelHead;
