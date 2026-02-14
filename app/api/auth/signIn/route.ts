import { NextRequest, NextResponse } from "next/server";
import signinSchema from "../../validators/signInValidator";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    console.log(email, "email");
    console.log(password, "password");

    const validated = signinSchema.validate({ email, password });
    console.log(validated, "validated ====> ");

    // const

    return NextResponse.json({
      status: 200,
      success: true,
      message: "Logged in successfully",
      // data:
    });
  } catch (error) {
    console.log("Error while logging in:", error);

    return NextResponse.json({
      status: 200,
      success: false,
      error: error,
    });
  }
}
