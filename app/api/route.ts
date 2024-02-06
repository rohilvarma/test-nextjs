import { NextResponse } from "next/server";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export async function GET(request: Request) {
  console.log("GET invoked from users page!");
  await sleep(4000);
  try {
    return NextResponse.json({
      message: "GET successfully executed and returned to users page!",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
