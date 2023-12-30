"use client";
import { dbPreviewEscalations } from "@/database/dummy_PreviewEscalations";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import SearchBar from "@/components/common/searchbar/searchbar";
import { Separator } from "@/components/ui/separator";
import EscalationCard from "@/components/common/escalationCard/escalationCard";

const EscalationReview = () => {
  return (
    <div className="flex-grow">
      <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
        <ResizablePanel defaultSize={25} collapsible minSize={25} maxSize={35}>
          <div className="flex flex-col h-full items-center justify-between p-4 w-full">
            <SearchBar />
            <Separator />
            {dbPreviewEscalations.map((escalation) => (
              <div key={escalation.id}>
                <EscalationCard
                  id={escalation.id}
                  title={escalation.title}
                  description={escalation.description}
                  type={escalation.type}
                  escal_date={escalation.escal_date}
                  descal_date={escalation.descal_date}
                  est_descal_date={escalation.est_descal_date}
                  customer_group={escalation.customer_group}
                  level={escalation.level}
                />
              </div>
            ))}
            <span className="font-semibold">Sidebar</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
export default EscalationReview;
