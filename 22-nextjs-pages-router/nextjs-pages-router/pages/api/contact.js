import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({
      success: false,
      message: "Please make a POST request.",
    });
    return;
  }
  const contactData = {
    fullName: "Guillaume",
    email: "test",
    subject: "booking",
    message: "Hey!",
  };

  const { error } = await supabase.from("contact").insert([contactData]);

  if (error) {
    res.status(500).json({
      success: false,
      message: "Could not send your message. Please try again.",
    });
    return;
  }

  // Success message
  res.status(200).json({
    success: true,
    message: "Thanks for your message. We will be in touch soon.",
  });
}
