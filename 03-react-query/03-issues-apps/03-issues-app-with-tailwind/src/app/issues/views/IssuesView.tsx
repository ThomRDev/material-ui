import React from "react";
import { IssueList } from "../components/IssueList";
import { LabelPicker } from "../components/LabelPicker";
import { useState } from "react";

export const IssuesView = () => {
  const [selectedLabels, setLabelSelected] = useState<string[]>([]);

  return (
    <main className="w-[min(95%,1400px)] mx-auto flex flex-col gap-4 lg:flex-row lg:gap-8">
      <div className="w-full lg:w-[66.6%]">
        <IssueList />
      </div>
      <div className="w-full lg:w-[33.4%] order-[-1] lg:order-1">
        <LabelPicker
          selectedLabels={selectedLabels}
          onChange={(label: string) => {
            setLabelSelected((prev) =>
              prev.includes(label)
                ? prev.filter((l) => l !== label)
                : [...prev, label]
            );
          }}
        />
      </div>
    </main>
  );
};
