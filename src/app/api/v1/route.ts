import { NextResponse } from "next/server";
import { dict } from "./v1";

// i would love to fetch only 8 properties but i'm lazy
// this is a gross workaround to (mostly) avoid repeating properties
export async function GET() {
  return NextResponse.json(dict);
}
