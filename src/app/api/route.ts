import { NextResponse } from "next/server";
import { api } from "../../../v2";

// first get request of the day selects 8 keys
// the subsequent api calls select the same 8 keys

export async function GET() {
  return NextResponse.json(api);
}
