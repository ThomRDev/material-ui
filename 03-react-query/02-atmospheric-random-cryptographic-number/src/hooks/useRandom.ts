import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getRandomApí } from "../utils/getRandomAPi";

export const useRandom = () => {
  // ["randomNumber"] indica como queremos que maneje nuestro cache, es decir
  // que a esta data le pone una key, para poder utilizarla en otro lugar
  // const query = useQuery(["randomNumber"], getRandomApí, {
  //   refetchOnWindowFocus: false,
  // });

  // otra forma
  const query = useQuery({
    queryKey: ["randomNumber"],
    queryFn: getRandomApí,
    refetchOnWindowFocus: false,
  });
  return query;
};
