import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        background: "#4A148C",
        color: "#fff",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>SMV ASTRO SERVICE</h2>

      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/ask-question">Ask Question</Link>
        <Link to="/register-astrologer">Astrologer Register</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
