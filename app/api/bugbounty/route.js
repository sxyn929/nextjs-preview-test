export async function GET(request) {
  return new Response(JSON.stringify({
    status: "vulnerability_test_successful",
    message: "App Router API ingestion successful."
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
