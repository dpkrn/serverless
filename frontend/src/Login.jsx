import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [credentials, setCredentials] = useState(null);

  async function handleLogin(e) {
    e.preventDefault();
    setMessage("");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    setMessage(data.message);
  }

  async function handleGetCredentials() {
    setMessage("");
    setCredentials(null);

    const res = await fetch("/api/credentials");
    const data = await res.json();

    if (!res.ok) {
      setMessage(data.error || "Failed to load credentials");
      return;
    }

    setCredentials(data);
    setEmail(data.email);
    setPassword(data.password);
  }

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Login</button>
        <button type="button" onClick={handleGetCredentials} style={{ marginLeft: 8 }}>
          Get credentials
        </button>
      </form>

      {credentials && (
        <p>
          Email: {credentials.email}
          <br />
          Password: {credentials.password}
        </p>
      )}

      <p>{message}</p>
    </div>
  );
}
