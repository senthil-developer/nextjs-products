"use client";

import { categoryList } from "@/lib/util";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

export const Category = ({ currentCategory }: { currentCategory: string }) => {
  const router = useRouter();
  const [selected, setSelected] = useState(currentCategory || "all");
  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);

    router.push(`/?category=${e.target.value}`);
  };

  return (
    <div>
      <select value={selected} onChange={handleOnChange}>
        {categoryList.map((category) => (
          <option value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};
