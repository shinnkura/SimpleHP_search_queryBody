"use client";
import { useContext } from "react";
import { SearchContext } from "@/contexts/searchContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { setParams } = useContext(SearchContext);

  function handleClick() {
    setParams({
      location: [
        {
          pref: "東京都",
          city: ["千代田区", "世田谷区"],
        },
      ],
    });
    router.push("/search");
  }
  return (
    <>
      <button onClick={handleClick}>ボタン</button>
    </>
  );
}
