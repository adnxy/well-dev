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
      <ul className="flex gap-2 overflow-auto">
        {categoryFilters.map((filter) => (
          <button
            key={filter.name}
            type="button"
            onClick={() => handleTags(filter.name)}
            className={`${
              category === filter.name
                ? "bg-light-white-300 font-medium"
                : "font-normal"
            } px-4 py-3 rounded-lg capitalize whitespace-nowrap`}
          >
            <div className="flex items-center space-x-3">
              <img style={{ width: "30px", height: "30px" }} src={filter.img}></img>
              <span>{filter.name}</span>
            </div>
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
