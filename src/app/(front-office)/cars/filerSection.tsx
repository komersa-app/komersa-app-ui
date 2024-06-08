"use client";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const types = ["type1", "type2"];

const FilteredOptions = [
  {
    id: "types",
    title: "Types",
    options: types,
    type: "select",
  },
];
function checkValidQuery(queries: string[]) {
  return queries.filter((query) => query !== "").length > 0;
}
export function convertStringToQueriesObject(
  searchParams: ReadonlyURLSearchParams
) {
  let selectedQueries: Record<string, string[]> = {};
  searchParams.forEach((values, key) => {
    const queries = values.split(",");
    if (selectedQueries[key]) {
      selectedQueries[key].push(...queries);
    } else {
      selectedQueries[key] = queries;
    }
  });
  return selectedQueries;
}
function convertValidStringQueries(queries: Record<string, string[]>) {
  let q = "";
  for (let [key, value] of Object.entries(queries)) {
    q = q + `${q === "" ? "" : "&"}${key}=${value}`;
  }
  return q;
}
const FilerSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedFilterQueries, setSelectedFilterQueries] = useState<
    Record<string, string[]>
  >({});

  useEffect(()=>{
    const paramsObj = convertStringToQueriesObject(searchParams);
    setSelectedFilterQueries(paramsObj);

  }, [searchParams]);

  
   return <div>FilterSection</div>
};
export default FilerSection;
