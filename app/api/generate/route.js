import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function GET() {
  const types = ["focus","calm","performance"];

  for (const type of types) {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role:"user", content:`Create a short ${type} session.` }]
    });

    await supabase.from("sessions").insert({
      type,
      content: completion.choices[0].message.content
    });
  }

  return Response.json({ success:true });
}
