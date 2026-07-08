import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    console.log("API URL:", apiUrl);

    const response = await fetch(
      `${apiUrl}/api/recruit/upload-resume`,
      {
        method: "POST",
        body: formData,
      }
    );

    console.log("Backend Status:", response.status);

    const text = await response.text();

    console.log("Backend Response:", text);

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          message: text,
        },
        {
          status: response.status,
        }
      );
    }

    return NextResponse.json(JSON.parse(text));
  } catch (err) {
    console.error("Route Error:", err);

    return NextResponse.json(
      {
        success: false,
        message: String(err),
      },
      {
        status: 500,
      }
    );
  }
}