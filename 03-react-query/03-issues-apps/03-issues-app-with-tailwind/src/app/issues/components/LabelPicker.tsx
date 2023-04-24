import { useQuery } from "@tanstack/react-query";
import { LoadingIcon } from "../../shared/components/LoadingIcon";
import { Label } from "../interface";
import GithubApi from "../../api/githubApi";
import { useLabels } from "../hooks/useLabels";
import { FC } from "react";

// const getLabels = async (): Promise<Label[]> => {
//   // const res = await fetch("https://api.github.com/repos/facebook/react/labels");
//   // const data = await res.json();
//   // return data;
//   const { data } = await GithubApi.get<Label[]>("/labels");
//   return data;
// };

type LabelProps = {
  onChange: (label: string) => void;
  selectedLabels: string[];
};

export const LabelPicker: FC<LabelProps> = ({ selectedLabels, onChange }) => {
  // const labelsQuery = useQuery(["labels"], getLabels, {
  //   staleTime: 1000 * 60 * 60,
  //   // refetchOnWindowFocus:false
  // });

  const labelsQuery = useLabels();

  if (labelsQuery.isLoading) return <LoadingIcon />;
  return (
    <div className="w-full flex flex-wrap">
      {labelsQuery.data?.map((label) => {
        const isSelected = selectedLabels.includes(label.name);

        return (
          <span
            key={label.id}
            className="inline m-1 rounded-2xl px-3 py-1 cursor-pointer transition-all hover:bg-[rgba(255,255,255,0.1)] font-semibold"
            style={{
              border: `1px solid #${label.color}`,
              color: isSelected ? "#1C2021" : `#${label.color}`,
              backgroundColor: isSelected ? `#${label.color}` : "initial",
            }}
            onClick={() => onChange(label.name)}
          >
            {label.name}
          </span>
        );
      })}
    </div>
  );
};
