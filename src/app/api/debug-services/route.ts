import { getServicesOffered } from "@/lib/supabase/server";

export async function GET() {
  try {
    const services = await getServicesOffered();
    return Response.json({
      success: true,
      count: services.length,
      services,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
