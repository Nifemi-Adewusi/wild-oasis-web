"use client";
import useSWR from "swr";
import CabinCard from "./CabinCard";
import Spinner from "./Spinner";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function CabinList({ filter }) {
  const {
    data: cabins,
    error,
    isLoading,
  } = useSWR("/api/cabins", fetcher, {
    refreshInterval: 15000,
  });
  if (isLoading) return <Spinner />;
  if (error) throw new Error("Failed to load cabins");
  let filteredCabins = cabins;
  if (filter === "small") {
    filteredCabins = cabins.filter((cabin) => cabin.maxCapacity <= 4);
  }
  if (filter === "medium") {
    filteredCabins = cabins.filter(
      (cabin) => cabin.maxCapacity > 4 && cabin.maxCapacity <= 7
    );
  }
  if (filter === "large") {
    filteredCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);
  }
  return (
    <div className="grid md:grid-cols-2  gap-8 lg:gap-12 xl:gap-14">
      {filteredCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
