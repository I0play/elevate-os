import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function GET() {
  const { data } = await supabase
    .from("sessions")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5);

  return Response.json(data);
}

const today = new Date().toDateString();

const { data: existing } = await supabase
  .from("sessions")
  .select("*")
  .gte("created_at", new Date().toISOString().split("T")[0]);

if (!existing || existing.length === 0) {
  await fetch(`${process.env.BASE_URL}/api/generate`);
}
