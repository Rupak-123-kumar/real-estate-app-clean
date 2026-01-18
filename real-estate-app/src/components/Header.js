import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    setMenuOpen(false);
    navigate("/login");   // ✅ Go to login page
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setMenuOpen(false);
    navigate("/");
  };

  return (
    <header className="header">

      {/* LOGO */}
      <div className="logo-section">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <div className="logo-circle">🏠</div>
          <span>RealEstatePro</span>
        </Link>
      </div>

      {/* HAMBURGER */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* NAV */}
      <nav className={menuOpen ? "nav active" : "nav"}>

        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/listings" onClick={() => setMenuOpen(false)}>Properties</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

        {isLoggedIn ? (
          <button className="auth-btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="auth-btn" onClick={handleLogin}>
            Login
          </button>
        )}

      </nav>

    </header>
  );
};

export default Header;
