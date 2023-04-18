import { FiInfo, FiMessageSquare, FiCheckCircle } from "react-icons/fi";

export const IssueItem = () => {
  return (
    <div className="border border-gray-500/50 rounded-md p-2 flex items-center py-3 cursor-pointer transition-all hover:shadow-lg">
      <div>
        <FiInfo size={20} color="rgba(255,0,0,0.6)" />
      </div>
      <div className="flex flex-col px-2 flex-1">
        <span>
          Suggestion: why not make accessing and changing the state possible
          globally?
        </span>
        <span className="text-[.8rem] text-gray-800">
          #25581 opened 2 days ago by{" "}
          <span className="font-semibold">segfaulty1</span>
        </span>
      </div>
      <div className="flex items-center">
        <img
          src="https://avatars.githubusercontent.com/u/1933404?v=4"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <span className="px-2">2</span>
        <FiMessageSquare size={20} />
      </div>
    </div>
  );
};
