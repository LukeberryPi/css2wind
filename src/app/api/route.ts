import { NextResponse } from "next/server";
import { api } from "@/experimental-json";

export async function GET() {
  return NextResponse.json(api);
}
