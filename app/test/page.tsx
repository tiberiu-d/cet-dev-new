import NewEscalationForm from "@/components/multistep-form/form-new";

const INITIAL_DATA = {
  ID: "0",
  STATUS: { value: "in_progress", label: "In Progress" },
  TYPE: "",
  TITLE: "",
  DESCRIPTION: "",
  ESCAL_DATE: "",
  DESCAL_DATE: "",
  RECURRING: false,
  CUSTOMER: "",
  BRAND: "",
  LEVEL: "",
  VEHICLES: 1,
  LOCATIONS: "",
  BRANDS: "",
  MODELS: "",
  PLATFORMS: "",
  CUSTOMER_IMPACT: "",
  CONSUMER_IMPACT: "",
  ESTDESCAL_DATE: "",
  VQTSPN: "",
  SUPPLIER: "",
  PARTS: 1,
  DIVISION: "",
  BU: "",
  ADDBUS: "",
  SEGMENT: "",
  SUBSEGMENT: "",
  PLANTS: "",
  CASTATUS: "",
  CADESCRIPTION: "",
  ASTATUS: "",
  ADUEDATE: "",
  ARESPONSIBLE: "",
  ADESCRIPTION: "",
};

const TestPage = () => {
  // initial data can be changed to something else ;-)
  return (
    <section className="flex items-center justify-center w-full">
      <NewEscalationForm INITIAL_DATA={INITIAL_DATA} />
    </section>
  );
};
export default TestPage;
