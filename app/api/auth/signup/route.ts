import { SignUp } from "@/lib/server/appwrite";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, password } = body;

  try {
    await SignUp(name, email, password);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 },
    );
  }
}
