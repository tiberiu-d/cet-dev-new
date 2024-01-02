// type imports
import { Escalation } from "@/database/dummy_PreviewEscalations";

interface EscalationDisplayProps {
  escalation: Escalation | null;
}

const EscalationDisplay = ({ escalation }: EscalationDisplayProps) => {
  if (escalation) {
    return (
      <div>
        Now viewing {escalation.id} - {escalation.title}
      </div>
    );
  }
};
export default EscalationDisplay;
