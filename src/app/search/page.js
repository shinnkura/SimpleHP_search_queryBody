"use client";

import { useEffect, useContext } from "react";
import { SearchContext } from "@/contexts/searchContext";

export default function Search() {
  const { result, setResult, params, setParams } = useContext(SearchContext);

  useEffect(() => {
    let ignore = false;
    async function getData() {
      console.log("呼び出し");
      try {
        const res = await fetch("http://localhost:8080/api/recruitment/search", {
          method: "post",
          body: JSON.stringify(params),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) {
          throw new Error("fetchに失敗しました");
        }
        const json = await res.json();
        if (ignore) return;
        setResult(json.items);
      } catch (err) {
        console.log(err);
      }
    }

    getData();

    return () => (ignore = true);
  }, [params, setParams, setResult]);

  const elements = result.map((e) => <li key={e.id}>{e.facility_name}</li>);

  return (
    <>
      <p>search</p>
      <hr />
      <ul>{elements}</ul>
    </>
  );
}
