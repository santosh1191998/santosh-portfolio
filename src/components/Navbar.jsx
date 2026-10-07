function Navbar() {
  return (
    <header className="navbar">

      {/* Logo */}
      <a
        href="#home"
        className="nav-logo"
      >
        <span>SV</span>
        <strong>PORTFOLIO</strong>
      </a>


      {/* Navigation */}
      <nav className="nav-links">

        <a href="#home">
          Home
        </a>

        <a href="#about">
          About
        </a>

        <a href="#skills">
          Skills
        </a>

        <a href="#education">
          Education
        </a>

        <a href="#experience">
          Experience
        </a>

        <a href="#projects">
          Projects
        </a>

        <a href="#patents">
          Patents
        </a>

        <a href="#certifications">
          Certifications
        </a>

        <a href="#interests">
          Interests
        </a>

      </nav>


      {/* Contact button */}
      <a
        href="#contact"
        className="nav-contact"
      >
        Let's Talk

        <span>
          ↗
        </span>

      </a>

    </header>
  );
}

export default Navbar;