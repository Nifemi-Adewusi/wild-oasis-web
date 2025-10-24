import { getCabins } from "@/app/_lib/data-service";
import { NextResponse } from "next/server";

export async function GET() {
  const cabins = await getCabins();
  return NextResponse.json(cabins);
}
