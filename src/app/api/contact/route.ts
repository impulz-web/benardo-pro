import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";

type ContactPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  company?: string;
  timeline?: string;
  message?: string;
  serviceId?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const fullName = body.fullName?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const phone = body.phone?.trim() || null;
    const company = body.company?.trim() || null;
    const timeline = body.timeline?.trim() || null;
    const message = body.message?.trim() ?? "";
    const serviceId = body.serviceId?.trim() ?? "";

    if (!fullName || !email || !message || !serviceId) {
      return NextResponse.json(
        { message: "Missing required fields: fullName, email, message, and serviceId." },
        { status: 400 },
      );
    }

    const supabase = getSupabaseServerClient();

    const { error } = await supabase.from("benardo").insert({
      full_name: fullName,
      email,
      phone,
      company,
      timeline,
      message,
      service_id: serviceId,
    });

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: "Contact request submitted successfully." }, { status: 201 });
  } catch {
    return NextResponse.json({ message: "Invalid request payload." }, { status: 400 });
  }
}