import { posts } from "../_data.js";

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { slug } = req.query;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return res.status(404).json({ error: `Post not found: ${slug}` });
  }

  return res.json({ post });
}
