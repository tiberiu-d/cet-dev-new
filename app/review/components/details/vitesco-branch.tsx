import Leaf from "./leaf";

import { format, formatDistanceToNow } from "date-fns";

import type { OnePagerType } from "@/types/escalation";

type VitescoBranchProps = {
  data: OnePagerType;
};

const VitescoBranch = (escalation: VitescoBranchProps) => {
  return (
    <div className="w-full flex flex-col items-start gap-2 pb-3">
      <Leaf key={"status"} LABEL="Status" VALUES={["In Progress"]} />
      <Leaf
        key={"type"}
        LABEL="Type"
        VALUES={[escalation.data.TYPE ? escalation.data.TYPE : "no data"]}
      />
      <Leaf
        key={"modified_on"}
        LABEL="Last Modified On"
        VALUES={[
          `${formatDistanceToNow(new Date(escalation.data.CREATED_ON), {
            addSuffix: true,
          })}, on ${format(escalation.data.CREATED_ON, "dd.MM.yyyy")}`,
        ]}
      />
      <Leaf
        key={"org_unit"}
        LABEL="Division"
        VALUES={[
          escalation.data.VT_DIVISION_NAME
            ? escalation.data.VT_DIVISION_NAME
            : "no data",
        ]}
      />
      <Leaf
        key={"prod"}
        LABEL="Product"
        VALUES={[
          escalation.data.VT_BUSINESS_UNIT_NAME
            ? escalation.data.VT_BUSINESS_UNIT_NAME
            : "no data",
        ]}
      />
      <Leaf
        key={"affected_parts"}
        LABEL="Affected Parts"
        VALUES={[
          escalation.data.AFFECTED_PARTS
            ? escalation.data.AFFECTED_PARTS.toString()
            : "no data",
        ]}
      />
      <Leaf
        key={"plant"}
        LABEL="Plant"
        VALUES={[
          escalation.data.VT_PLANT ? escalation.data.VT_PLANT : "no data",
        ]}
      />
      <Leaf
        key={"recurring"}
        LABEL="Is Recurring?"
        VALUES={[
          escalation.data.RECURRING === true
            ? "recurring"
            : escalation.data.RECURRING === false
            ? "not recurring"
            : "no data",
        ]}
      />
      <Leaf
        key={"supplier"}
        LABEL="Supplier"
        VALUES={[
          escalation.data.SUPPLIER ? escalation.data.SUPPLIER : "no data",
        ]}
      />
      <Leaf
        key="CONSUMER_IMPACT"
        LABEL="Consumer Impact"
        VALUES={[
          escalation.data.CONSUMER_IMPACT
            ? escalation.data.CONSUMER_IMPACT
            : "no data",
        ]}
      />
    </div>
  );
};
export default VitescoBranch;
