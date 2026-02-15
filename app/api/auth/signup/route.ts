import { NextResponse } from "next/server";
import signupSchema from "../../validators/signUpValidator";
import { apiFetch } from "@/lib/fetcher";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, firstName, lastName, password } = body;

        const validated = signupSchema.validate({ email, firstName, lastName, password });
        console.log(validated, "validated ====> ");

        return NextResponse.json({
            status: 200,
            success: true,
            message: "Account created successfully!",
            // data: response,
        });

    } catch (err) {
        console.log("Error while signing up:", err);
        return NextResponse.json({
            status: 200,
            success: false,
            error: err,
        });

    }
}