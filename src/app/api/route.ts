import { NextResponse } from "next/server";
import { propertyDictionary } from "../../leozada";

export async function GET() {
  return NextResponse.json({ propertyDictionary });
}
