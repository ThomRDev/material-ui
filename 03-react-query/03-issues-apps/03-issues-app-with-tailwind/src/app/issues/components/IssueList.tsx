import { IssueItem } from "./IssueItem";

export const IssueList = () => {
  return (
    <section className="w-full border-[rgba(255,255,255,0.9)] rounded-md border-[2px] flex flex-col">
      <header className="w-full p-4 flex gap-1">
        <button className="bg-[#1262FC] py-2 px-4 rounded">All</button>
        <button className="py-2 px-2 rounded">Open</button>
        <button className="py-2 px-2 rounded">Closed</button>
      </header>
      <div className="bg-[rgba(255,255,255,1)] text-black w-full p-4 flex flex-col gap-3">
        {[1, 2, 3].map((item) => (
          <IssueItem key={item} />
        ))}
      </div>
    </section>
  );
};
