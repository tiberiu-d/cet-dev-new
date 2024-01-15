import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type ReviewLeafType = {
  TITLE: string;
  CONTENT: Array<{
    LABEL: string;
    VALUE: string;
  }>;
};

const ReviewLeaf = (leaf: ReviewLeafType) => {
  return (
    <div className="hover:bg-gray-50 hover:cursor-pointer hover:shadow-sm border min-w-[300px]">
      <div className="flex flex-col">
        <div className="font-bold py-2 pl-4">{leaf.TITLE}</div>
        <Separator />
        {leaf.CONTENT ? (
          <div className="pt-2">
            {leaf.CONTENT?.map((item) => (
              <div
                key={item.LABEL}
                className="flex items-center justify-between text-sm px-4"
              >
                <div>{item.LABEL}</div>
                <div>{item.VALUE}</div>
              </div>
            ))}
          </div>
        ) : (
          <div>no details provided</div>
        )}
      </div>
    </div>
  );
};
export default ReviewLeaf;
