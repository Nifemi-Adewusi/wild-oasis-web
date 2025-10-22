import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";

export default async function CabinList() {
  const cabins = await getCabins();
  if (!cabins.length) return;
  return (
    <div className="grid md:grid-cols-2  gap-8 lg:gap-12 xl:gap-14">
      {cabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
