import { getCabin, getCabins } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import NotFoundCabin from "./NotFoundCabin";

export async function generateMetadata({ params }) {
  const cabin = await getCabin(params.cabinid);
  return { title: `Cabin ${cabin.name} - Details & Reservation` };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({
    cabinid: String(cabin.id),
  }));
  console.log(ids);
  return ids;
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinid);

  if (!cabin) {
    return <NotFoundCabin cabinid={params.cabinid} />;
  }

  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  // console.log(cabinid);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="grid md:grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
        {/* <div className="md:relative md:scale-[1.15] md:-translate-x-3">
          <Image
            src={image}
            className="md:object-cover w-11 h-11"
            fill
            alt={`Cabin ${name}`}
          />
        </div> */}

        {/* <div className="md:relative md:scale-[1.15] md:-translate-x-3">
          <div className="hidden md:block md:relative">
            <Image
              src={image}
              alt={`Cabin ${name}`}
              fill
              className="object-cover"
            />
          </div>

          <div className="md:hidden">
            <Image
              src={image}
              alt={`Cabin ${name}`}
              width={500}
              height={400}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div> */}

        <div className="md:relative md:scale-[1.15] md:-translate-x-3">
          {/* For medium and larger screens */}
          <div className="hidden md:block md:relative md:w-full md:h-[400px]">
            <Image
              src={image}
              alt={`Cabin ${name}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* For small screens */}
          <div className="md:hidden">
            <Image
              src={image}
              alt={`Cabin ${name}`}
              width={500}
              height={400}
              className="object-cover w-full h-auto rounded-lg"
            />
          </div>
        </div>

        <div>
          <h3 className="text-accent-100 font-black text-3xl md:text-7xl mb-5 md:translate-x-[-254px] bg-primary-950 md:p-6 pb-1 md:w-[150%]">
            Cabin {name}
          </h3>

          <p className="md:text-lg text-sm leading-6 md:leading-10 text-primary-300 mb-10">
            {description}
          </p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-5xl font-semibold text-center">
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}
