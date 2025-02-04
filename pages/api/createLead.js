import api from "@/utils/api-instance";

export default async function handler(req, res) {
  const { body, cookies } = req;
  const authToken = cookies?.["leadToken"];

  // Check if token exists
  if (!authToken) {
    return res.status(401).json({ message: "Unauthorized: Missing Token" });
  }

  try {
    const response = await api.post(
      "https://edgerock2-dev-ed.develop.my.salesforce.com/services/apexrest/createLeadOpportunity/",
      body,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    res.status(200).json(response);
  } catch (err) {
    return res.status(err?.status).json(err?.response?.data);
  }
}
