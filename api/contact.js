export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { name, age, gender, location, message } = req.body;

    // Basic validation
    if (!name || !age || !gender || !location || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (typeof age !== "number" || age <= 0) {
      return res
        .status(400)
        .json({ message: "Age must be a positive number." });
    }

    // Send data to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "4c249a78-0c5f-49cf-b977-9250a44a6137",
        name,
        age,
        gender,
        location,
        message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return res.status(200).json({ message: "Thank you for your message!" });
    } else {
      return res.status(500).json({ message: "Submission failed." });
    }
  } catch (error) {
    console.error("Error processing form:", error);
    return res.status(500).json({ message: "Something went wrong." });
  }
}
