import HeroBackground from "./HeroBackground";

function Hero() {
  const keywords = [
    "SolidWorks Design and Automation",
    "Siemens NX",
    "Autodesk Fusion 360",
    "CAM",
    "Research and Development",
    "3D Printing",
    "Intellectual Property",
    "Quality Control"
  ];

  const heroStats = [
    {
      value: "4+",
      label: "YEARS EXPERIENCE"
    },
    {
      value: "2",
      label: "PATENTED IDEAS"
    },
    {
      value: "8+",
      label: "ENGINEERING TOOLS"
    },
    {
      value: "3",
      label: "MAJOR FEATURED PROJECTS"
    },
    {
      value: "B.Tech",
      label: "MECHANICAL ENGINEERING"
    },
    {
      value: "3",
      label: "COMPANIES"
    }
  ];

  return (
    <section className="hero" id="home">

      {/* LIVE 3D BACKGROUND */}
      <HeroBackground />

      {/* HERO CONTENT */}
      <div className="hero-content">

        {/* AVAILABILITY */}
        <div className="availability">
          <span className="availability-dot"></span>
          AVAILABLE FOR OPPORTUNITIES
        </div>

        {/* NAME */}
        <h1 className="hero-name">
          SANTOSH
          <br />
          VISHWAKARMA
        </h1>

        {/* ROLE */}
        <h2 className="hero-role">
          DESIGN ENGINEER
        </h2>

        {/* DESCRIPTION */}
        <div className="hero-description">

          <div className="hero-description-line">
            Transforming engineering concepts into
          </div>

          <div className="hero-description-line">
            precision-designed reality through
          </div>

          {/* ROTATING KEYWORDS */}
          <div className="hero-keyword-container">
            {keywords.map((keyword, index) => (
              <span
                key={keyword}
                className="hero-keyword"
                style={{
                  "--keyword-index": index
                }}
              >
                {keyword}
              </span>
            ))}
          </div>

        </div>

        {/* BUTTONS */}
        <div className="hero-actions">

          <a
            href="#projects"
            className="hero-button hero-button-primary"
          >
            <span className="button-icon">▦</span>
            VIEW PROJECTS
          </a>

          <a
            href="#about"
            className="hero-button hero-button-secondary"
          >
            <span className="button-icon">♙</span>
            ABOUT ME
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hero-button hero-button-linkedin"
          >
            <span className="linkedin-icon">in</span>
            LINKEDIN
          </a>

        </div>

        {/* SINGLE HERO STATISTICS ROW */}
        <div className="hero-stats">

          {heroStats.map((stat, index) => (
            <div
              className="hero-stat"
              key={index}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}

        </div>

      </div>

      {/* SCROLL INDICATOR */}
      <div className="hero-scroll">

        <span className="scroll-circle"></span>

        <span className="scroll-text">
          SCROLL
        </span>

      </div>

    </section>
  );
}

export default Hero;