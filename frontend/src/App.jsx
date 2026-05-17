import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Linkbridger Demo</h1>

      <nav>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}