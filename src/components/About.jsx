import profileImage from "../assets/profile.png";

function About() {
  return (
    <section className="content-section about-section" id="about">
      <div className="section-container">

        <div className="section-heading">
          <span className="section-kicker">
            WHO I AM
          </span>

          <h2>
            About <span>Me</span>
          </h2>

          <p>
            Mechanical Design Engineer focused on product development,
            prototyping and R&D.
          </p>
        </div>

        <div className="about-grid">

          <div className="about-photo">

            <div className="about-photo-glow"></div>

            <div className="about-photo-frame">

              <div className="about-corner corner-tl"></div>
              <div className="about-corner corner-tr"></div>
              <div className="about-corner corner-bl"></div>
              <div className="about-corner corner-br"></div>

              <img
                src={profileImage}
                alt="Santosh Vishwakarma - Mechanical Design Engineer"
              />

            </div>

            <div className="about-photo-label">
              <span>01</span>
              <strong>DESIGN ENGINEER</strong>
            </div>

          </div>

          <div className="about-content">

            <div className="about-role">
              MECHANICAL DESIGN ENGINEER (R&amp;D)
            </div>

            <h3>
              Designing Ideas.
              <br />
              <span>Developing Products.</span>
            </h3>

            <p>
              I am a Mechanical Design Engineer with professional
              experience in new product development, CAD design,
              prototype development and research &amp; development.
            </p>

            <p>
              During my professional career, I have worked across
              multiple engineering activities including product design,
              CAD assemblies, simulation, prototyping, manufacturing
              support, vendor development, documentation, quality
              and testing.
            </p>

            <p>
              I enjoy taking engineering concepts from an initial idea
              through design, prototyping and product development.
            </p>

            <div className="tag-list">
              <span>NPD</span>
              <span>R&amp;D</span>
              <span>CAD</span>
              <span>Prototype Development</span>
              <span>3D Printing</span>
              <span>Manufacturing</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;