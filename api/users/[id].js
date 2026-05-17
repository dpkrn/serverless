import { users } from "../_data.js";

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { id } = req.query;
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ error: `User not found: ${id}` });
  }

  return res.json({ user });
}
