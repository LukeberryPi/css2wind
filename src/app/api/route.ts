import { NextResponse } from "next/server";
import { propertyDictionary } from "@/leozada";
import { api } from "@/experimental-json";

export async function GET() {
  return NextResponse.json({ ...api, ...propertyDictionary });
}
