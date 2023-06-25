import { NextResponse } from "next/server";

const cssMap = {
  "margin-top: 4px": "mt-1",
  "margin-top: 8px": "mt-2",
  "margin-top: 16px": "mt-4",
  "margin-top: 24px": "mt-6",
  "margin-top: 32px": "mt-8",
  "margin-right: 4px": "mr-1",
  "margin-right: 8px": "mr-2",
  "margin-right: 16px": "mr-4",
  "margin-right: 24px": "mr-6",
  "margin-right: 32px": "mr-8",
};

export async function GET() {
  return NextResponse.json({ cssMap });
}
