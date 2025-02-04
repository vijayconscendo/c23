import api from "@/utils/api-instance";

export default async function handler(req, res) {
  const params = new URLSearchParams();
  params.append("grant_type", "password");
  params.append("client_id", process.env.CLIENT_ID);
  params.append("client_secret", process.env.CLIENT_SECRET);
  params.append("username", process.env.SF_USERNAME);
  params.append("password", process.env.SF_PASSWORD);

  try {
    const response = await api.post(
      "https://login.salesforce.com/services/oauth2/token",
      params.toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    res.status(200).json(response);
  } catch (err) {
    return res.status(err?.status).json(err?.response?.data);
  }
}
