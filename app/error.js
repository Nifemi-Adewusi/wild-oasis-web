"use client";

import { useRouter } from "next/navigation";

export default function Error({ error }) {
  const router = useRouter();

  const buttonText = window.history.length > 1 ? "Go Back" : "Go Home";
  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <button
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
        onClick={handleBack}
      >
        {buttonText}
      </button>
    </main>
  );
}
