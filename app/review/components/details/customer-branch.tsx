import Leaf from "./leaf";

import type { OnePagerType } from "@/types/escalation";

type CustomerBranchProps = {
  data: OnePagerType;
};

const CustomerBranch = (escalation: CustomerBranchProps) => {
  if (escalation) {
    console.log(escalation.data.QKAM);
    return (
      <div className="w-full flex flex-col items-start gap-2">
        <Leaf key={"QCAM"} LABEL={"QCAM"} VALUES={[escalation.data.QKAM!]} />
        <Leaf
          key={"GROUP"}
          LABEL="Group"
          VALUES={[
            escalation.data.CUSTOMER_GROUP
              ? escalation.data.CUSTOMER_GROUP
              : "no data",
          ]}
        />
        <Leaf
          key={"BRANDS"}
          LABEL="Brand(s)"
          VALUES={[
            escalation.data.CUSTOMER_BRAND
              ? escalation.data.CUSTOMER_BRAND
              : "no data",
          ]}
        />
        <Leaf
          key={"LOCATION"}
          LABEL="Customer Location"
          VALUES={[
            escalation.data.CUSTOMER_LOCATIONS
              ? escalation.data.CUSTOMER_LOCATIONS
              : "no data",
          ]}
        />
        <Leaf
          key="AFFECTED_CARS"
          LABEL="Affected vehicles"
          VALUES={[
            escalation.data.AFFECTED_VEHICLES
              ? escalation.data.AFFECTED_VEHICLES.toString()
              : "no data",
          ]}
        />
        <Leaf
          key="CAR_MODEL"
          LABEL="Car Model"
          VALUES={[
            escalation.data.CAR_MODELS ? escalation.data.CAR_MODELS : "no data",
          ]}
        />
        <Leaf
          key="CAR_PLATFORM"
          LABEL="Car Platform"
          VALUES={[
            escalation.data.CAR_PLATFORMS
              ? escalation.data.CAR_PLATFORMS
              : "no data",
          ]}
        />
        <Leaf
          key="CUSTOMER_IMPACT"
          LABEL="Customer Impact"
          VALUES={[
            escalation.data.CUSTOMER_IMPACT!
              ? escalation.data.CUSTOMER_IMPACT
              : "no data",
          ]}
        />
      </div>
    );
  }
};
export default CustomerBranch;
