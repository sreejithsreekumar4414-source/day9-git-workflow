// Navbar Component
// Day 9 Practice - Sreejith Sreekumar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo">
          <span className="logo-icon">💼</span>
          Job Portal Kerala
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#jobs">Jobs</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
