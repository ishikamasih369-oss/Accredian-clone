import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, company } = body;

    if (!name || !email || !company) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }

    // Simulate storing the lead
    console.log("New Lead:", {
      name,
      email,
      company,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! We'll contact you soon.",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}