export async function GET(request) {
  return new Response(JSON.stringify({
    status: "vulnerability_test_successful",
    message: "App Router API ingestion successful.",
    executed_by: "sxyn929",
    // This safely tests if any Preview-scoped secret flows down to the fork build
    extracted_secret: process.env.TEST_SECRET_KEY || "No Secret Found (Safe)"
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
