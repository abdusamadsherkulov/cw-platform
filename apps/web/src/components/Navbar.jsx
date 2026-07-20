import { Link } from 'react-router-dom';

function Navbar() {
  const isLoggedIn = !!localStorage.getItem('token');

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
      </div>
      <div className="ms-auto">
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