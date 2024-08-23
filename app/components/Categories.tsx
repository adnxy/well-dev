"use client";

import { categoryFilters } from "@/constants";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Categories = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const category = searchParams.get("category");

  const handleTags = (item: string) => {
    router.push(`${pathName}?category=${item}`);
  };

  return (
    <div className="flexBetween w-full gap-5 flex-wrap">
      <ul className="flex gap-2 overflow-auto text-slate-100">
        {categoryFilters.map((filter) => (
          <button
            key={filter.name}
            type="button"
            onClick={() => handleTags(filter.name)}
            className={`${
              category === filter.name
                ? "bg-slate-200 font-medium text-slate-100"
                : "font-normal"
            } px-4 py-3 rounded-lg capitalize whitespace-nowrap`}
          >
            <div className="flex items-center space-x-3">
              <img style={{ width: "30px", height: "30px" }} src={filter.img}></img>
              <span className="text-zinc-600">{filter.name}</span>
            </div>
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
