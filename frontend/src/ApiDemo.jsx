import { useState } from "react";

export default function ApiDemo() {
  const [userId, setUserId] = useState("1");
  const [slug, setSlug] = useState("hello-world");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  async function callApi(url) {
    setError("");
    setResult(null);

    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Request failed");
      return;
    }

    setResult(data);
  }

  return (
    <div>
      <h2>API demo (subpaths &amp; dynamic routes)</h2>

      <p>
        <button type="button" onClick={() => callApi("/api/users")}>
          GET /api/users
        </button>
      </p>

      <p>
        <input
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="User id"
          style={{ width: 80 }}
        />
        <button
          type="button"
          onClick={() => callApi(`/api/users/${userId}`)}
          style={{ marginLeft: 8 }}
        >
          GET /api/users/[id]
        </button>
        <button
          type="button"
          onClick={() => callApi(`/api/users/${userId}/posts`)}
          style={{ marginLeft: 8 }}
        >
          GET /api/users/[id]/posts
        </button>
      </p>

      <p>
        <input
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="Post slug"
          style={{ width: 140 }}
        />
        <button
          type="button"
          onClick={() => callApi(`/api/posts/${slug}`)}
          style={{ marginLeft: 8 }}
        >
          GET /api/posts/[slug]
        </button>
      </p>

      {error && <p style={{ color: "crimson" }}>{error}</p>}

      {result && (
        <pre style={{ background: "#f4f4f4", padding: 12, overflow: "auto" }}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}
