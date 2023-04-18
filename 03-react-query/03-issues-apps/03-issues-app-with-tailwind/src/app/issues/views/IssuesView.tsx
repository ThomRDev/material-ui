import React from "react";
import { IssueList } from "../components/IssueList";
import { LabelPicker } from "../components/LabelPicker";

export const IssuesView = () => {
  return (
    <main className="w-[min(95%,1400px)] mx-auto flex flex-col gap-4 lg:flex-row lg:gap-8">
      <div className="w-full lg:w-[66.6%]">
        <IssueList />
      </div>
      <div className="w-full lg:w-[33.4%] ">
        <LabelPicker />
      </div>
    </main>
  );
};
