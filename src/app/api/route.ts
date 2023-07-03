import { NextResponse } from "next/server";
import { cssProperties } from "../../leozada";

export async function GET() {
  return NextResponse.json({ cssProperties });
}
