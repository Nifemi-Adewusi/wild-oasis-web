"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter({ queryKey }) {
  // Returns the query String e.g ?capacity = small
  const searchParams = useSearchParams();
  const router = useRouter();
  //   Returns the path or the current route we're on e.g /cabins
  const pathName = usePathname();
  const handleFilterClick = (filter) => {
    const params = new URLSearchParams(searchParams);
    params.set(queryKey, filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  };
  return (
    <div className="border border-primary-800 flex ">
      <button
        className="px-5 py-2 hover:bg-primary-700 border-r-2"
        onClick={() => handleFilterClick("all")}
      >
        All Cabins
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700 border-r-2"
        onClick={() => handleFilterClick("small")}
      >
        1 &mdash;4 guests
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilterClick("medium")}
      >
        5 &mdash; 8 guests
      </button>
    </div>
  );
}
