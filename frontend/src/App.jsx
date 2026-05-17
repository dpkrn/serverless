import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import ApiDemo from "./ApiDemo";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Linkbridger Demo</h1>

      <nav style={{ display: "flex", gap: 16 }}>
        <Link to="/login">Login</Link>
        <Link to="/api-demo">API demo</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/api-demo" element={<ApiDemo />} />
      </Routes>
    </div>
  );
}