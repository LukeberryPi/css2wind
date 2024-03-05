import { NextResponse } from "next/server";
import { dict } from "../../../../v1";
import { getRandomKey } from "@/utils";

// first get request of the day selects 8 keys
// the subsequent api calls select the same 8 keys

export async function GET() {
  const data: Record<string, string[]> = {};
  const numberOfProperties = 8;

  for (let i = 0; i < numberOfProperties; i++) {
    const randomProperty = getRandomKey(dict);
    data[randomProperty] = dict[randomProperty];
  }

  return NextResponse.json(data);
}

export async function POST() {}
