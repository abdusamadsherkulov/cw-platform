import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
  const isLoggedIn = !!localStorage.getItem('token');

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((t) => (t === 'light' ? 'dark' : 'light'));
  }

  function handleLogout() {
    localStorage.removeItem('token');
    window.location.href = '/';
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 mb-4">
      <Link className="navbar-brand" to="/">CV Platform</Link>
      <div className="navbar-nav">
        <Link className="nav-link text-white" to="/attributes">Attributes</Link>
        <Link className="nav-link text-white" to="/positions">Positions</Link>
        <Link className="nav-link text-white" to="/cvs">My CVs</Link>
        <Link className="nav-link text-white" to="/projects">Projects</Link>
        <Link className="nav-link text-white" to="/profile">Profile</Link>
      </div>

      <div className="ms-auto d-flex gap-2">
        <button className="btn btn-outline-light btn-sm" onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        {isLoggedIn ? (
          <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
            Log out
          </button>
        ) : (
          <a className="btn btn-outline-light btn-sm" href="https://cw-platform.onrender.com/auth/google">
            Log in with Google
          </a>
        )}
      </div>
    </nav>
  );
}

export default Navbar;