import { FC } from "react";
// import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import ReactMarkdown from "react-markdown";

type IssueComment = {
  comment: string;
};

export const IssueComment: FC<IssueComment> = ({ comment }) => {
  return (
    <section className="w-full border-[rgba(255,255,255,0.9)] rounded-md border-[2px] flex flex-col">
      <header className="w-full p-4 flex gap-1 items-center">
        <img
          src="https://avatars.githubusercontent.com/u/1933404?v=4"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <span className="mx-2">Pandaiolo commented</span>
      </header>
      <div className="bg-[rgba(255,255,255,1)] text-black w-full p-4 flex flex-col gap-3">
        <ReactMarkdown>{comment}</ReactMarkdown>
      </div>
    </section>
  );
};
