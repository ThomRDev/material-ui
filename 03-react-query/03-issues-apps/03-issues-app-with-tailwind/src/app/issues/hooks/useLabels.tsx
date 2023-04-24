import { useQuery } from "@tanstack/react-query";
import GithubApi from "../../api/githubApi";
import { Label } from "../interface";
import { sleep } from "../../helpers/sleep";

const getLabels = async (): Promise<Label[]> => {
  // const res = await fetch("https://api.github.com/repos/facebook/react/labels");
  // const data = await res.json();
  // return data;
  const { data } = await GithubApi.get<Label[]>("/labels");
  await sleep(2);
  return data;
};

export const useLabels = () => {
  const labelsQuery = useQuery(["labels"], getLabels, {
    staleTime: 1000 * 60 * 60,

    // esto tomara el primer request como verdadero, por lo que si
    // hay un staletime alto no hara el request y el initialData lo tomara
    // como fresh
    // initialData:[],

    // esto se reenderizara la primera ves hasta que se resuelva el request
    // por si se demora, pero cuando ya este listo se reemplazara
    placeholderData: [
      {
        id: 791921801,
        node_id: "MDU6TGFiZWw3OTE5MjE4MDE=",
        url: "https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F",
        name: "❤️",
        color: "ffffff",
        default: false,
        description: null,
      },
      {
        id: 69105383,
        node_id: "MDU6TGFiZWw2OTEwNTM4Mw==",
        url: "https://api.github.com/repos/facebook/react/labels/Browser:%20IE",
        name: "Browser: IE",
        color: "c7def8",
        default: false,
        description: null,
      },
    ],
    // refetchOnWindowFocus:false
  });

  return labelsQuery;
};
