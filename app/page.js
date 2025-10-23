import Image from "next/image";
import Link from "next/link";
import bgImage from "@/public/bg.png";

export default function Page() {
  return (
    // <main className=" md:mt-24">
    //   <div className="hidden md:block">
    //     <Image
    //       src={bgImage}
    //       className="object-cover object-top"
    //       placeholder="blur"
    //       fill
    //       alt="Mountains and forests with two cabins"
    //     />
    //   </div>

    //   <div className="relative z-10 text-center">
    //     <h1 className="md:text-8xl text-4xl text-primary-50 mb-10 tracking-tight font-normal">
    //       Welcome to paradise.
    //     </h1>
    //     <Link
    //       href="/cabins"
    //       className="bg-accent-500 md:px-8 md:py-6 py-2 px-4 text-primary-800 text-sm md:text-lg font-semibold hover:bg-accent-600 transition-all"
    //     >
    //       Explore luxury cabins
    //     </Link>
    //   </div>
    // </main>

    <main
      className="relative flex flex-col items-center justify-center text-center min-h-screen  bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className="absolute inset-0 bg-black/40" /> {/* optional overlay */}
      <div className="relative z-10">
        <h1 className="md:text-8xl text-4xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 md:px-8 md:py-6 py-2 px-4 text-primary-800 text-sm md:text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
