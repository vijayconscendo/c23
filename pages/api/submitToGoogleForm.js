const GAS_URL = process.env.GOOGLE_APPS_SCRIPT_URL;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!GAS_URL) {
    return res.status(500).json({ error: "GOOGLE_APPS_SCRIPT_URL is not configured" });
  }

  const { fields } = req.body;

  if (!fields || typeof fields !== "object") {
    return res.status(400).json({ error: "Invalid fields" });
  }

  try {
    const gasRes = await fetch(GAS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fields),
      redirect: "follow",
    });

    const text = await gasRes.text();
    console.log("GAS response:", gasRes.status, text);

    if (!gasRes.ok) {
      return res.status(500).json({ error: "Google Script returned an error" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Submission error:", err);
    return res.status(500).json({ error: "Submission failed" });
  }
}
