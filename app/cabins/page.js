import { Suspense } from "react";
import CabinCard from "../_components/CabinCard";
import { getCabin, getCabins } from "../_lib/data-service";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Wrapper from "../_components/Wrapper";
import Filter from "../_components/Filter";

/* eslint-disable react/no-unescaped-entities */

// revalidate = 0 means that the page will not be cached
// export const revalidate = 0;
// revalidate = 15 means that the page will be cached for 15 seconds and a new version will be generated every 15 seconds
export const revalidate = 15;
export const metadata = {
  title: "Cabins",
};

// import CabinCard from "@/app/_components/CabinCard";

export default function Page({ searchParams }) {
  console.log("Search Params:", searchParams);
  const filter = searchParams?.capacity ?? "all";
  console.log("Filter:", filter);
  return (
    <Wrapper>
      <div>
        <h1 className="text-4xl mb-5 text-accent-400 font-medium">
          Our Luxury Cabins
        </h1>
        <p className="text-primary-200 text-lg mb-10">
          Cozy yet luxurious cabins, located right in the heart of the Italian
          Dolomites. Imagine waking up to beautiful mountain views, spending
          your days exploring the dark forests around, or just relaxing in your
          private hot tub under the stars. Enjoy nature's beauty in your own
          little home away from home. The perfect spot for a peaceful, calm
          vacation. Welcome to paradise.
        </p>
        <div className="flex justify-end mb-8">
          <Filter queryKey={"capacity"} />
        </div>

        <Suspense fallback={<Spinner />}>
          <CabinList filter={filter} />
        </Suspense>
      </div>
    </Wrapper>
  );
}
