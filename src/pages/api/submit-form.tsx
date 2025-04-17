import type { NextApiRequest, NextApiResponse } from "next";
import https from "https";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const formspreeUrl = "https://submit-form.com/rDV0rIE6n"; // Replace with your actual Formspree URL

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    console.log("Received submission:", req.body);

    const agent = new https.Agent({
      secureProtocol: "TLSv1_2_method",
    });

    await fetch(formspreeUrl, {
      method: "POST",
      body: JSON.stringify(req.body),
      headers: {
        "Content-Type": "application/json",
      },
      agent: agent,
    } as RequestInit);

    // Always return success, even if Formspree fails
    return res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("API error:", error);
    
    // Still return success even if an error occurs
    return res.status(200).json({ message: "Form submitted successfully!" });
  }
}
