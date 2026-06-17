import { NextResponse } from "next/server";
import { dict } from "./v1";

export async function GET() {
  return NextResponse.json(dict);
}
