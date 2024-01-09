// type imports
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
      <div>
        Now viewing {escalation.ID} - {escalation.TITLE}
        <p>{escalation.DESCRIPTION}</p>
      </div>
    );
  }
};
export default EscalationDisplay;
