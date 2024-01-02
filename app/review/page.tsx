import EscalationsPreview from "./components/escalationPreview";

// dummy data
import { dbPreviewEscalations } from "@/database/dummy_PreviewEscalations";

export default function ReviewPage() {
  // TODO: load data here, now dummy loading from dummy db
  return (
    <div className="flex w-full">
      <EscalationsPreview escalations={dbPreviewEscalations} />
    </div>
  );
}
