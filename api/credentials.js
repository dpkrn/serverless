export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  return res.json({
    email: "admin@test.com",
    password: "123456"
  });
}
