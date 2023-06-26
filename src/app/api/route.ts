import { NextResponse } from "next/server";

const cssMap = {
  "display: flex": "flex",
  "flex-direction: column": "flex-col",
  "padding: 16px": "p-4",
  "padding-inline: 16px": "px-4",
  "margin: 16px": "m-4",
  "margin-inline: 16px": "mx-4",
};

export async function GET() {
  return NextResponse.json({ cssMap });
}
