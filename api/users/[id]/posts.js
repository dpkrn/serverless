import { posts } from "../../_data.js";

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { id } = req.query;
  const userPosts = posts.filter((p) => p.authorId === id);

  return res.json({
    userId: id,
    posts: userPosts
  });
}
