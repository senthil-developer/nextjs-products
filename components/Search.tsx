"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
export const Search = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";
  const [query, setQuery] = useState(searchParams.get("q") || "");

  useEffect(() => {
    if (category.length > 0) {
      setQuery("");
    }
  }, [category]);

  return (
    <div className="flex-grow flex items-center gap-2 border-2 px-2 rounded-lg border-black">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full outline-none border-none"
      />
      <Link href={`?q=${query}&limit=10`} scroll={false}>
        <IoSearch />
      </Link>
    </div>
  );
};
