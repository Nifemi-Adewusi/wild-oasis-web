"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Button from "./FilterButton";

const filterButtonDetails = [
  {
    label: "All Cabins",
    filteredBy: "all",
  },
  {
    label: "1 - 4 guests",
    filteredBy: "small",
  },
  {
    label: "5 - 8 guests",
    filteredBy: "medium",
  },
];

export default function Filter({ queryKey }) {
  // Returns the query String e.g ?capacity = small
  const searchParams = useSearchParams();
  const router = useRouter();
  //   Returns the path or the current route we're on e.g /cabins
  const pathName = usePathname();

  const activeFilter = searchParams.get(queryKey) || "all";
  const handleFilterClick = (filter) => {
    const params = new URLSearchParams(searchParams);
    params.set(queryKey, filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  };
  return (
    <div className="border border-primary-800 flex ">
      {filterButtonDetails.map((filterButton) => (
        <Button
          key={filterButton.label}
          active={activeFilter === filterButton.filteredBy}
          handleFilterClick={() => handleFilterClick(filterButton.filteredBy)}
        >
          {filterButton.label}
        </Button>
      ))}
      {/* <button
        className="px-5 py-2 hover:bg-primary-700 border-r-2"
        onClick={() => handleFilterClick("all")}
      >
        All Cabins
      </button> */}
      {/* <Button>All Cabins</Button> */}
      {/* <button
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
      </button> */}
    </div>
  );
}

// function Button({ children, filteredBy, handleFilterClick }) {
//   return (
//     <button
//       className="px-5 py-2 hover:bg-primary-700"
//       onClick={() => handleFilterClick(filteredBy)}
//     >
//       {/* 5 &mdash; 8 guests */}
//       {children}
//     </button>
//   );
// }
