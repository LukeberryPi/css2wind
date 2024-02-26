import { NextResponse } from "next/server";
import { api } from "../../../v2";

export async function GET() {
  return NextResponse.json(api);
}
