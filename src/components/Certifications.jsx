function Certifications() {

  const certifications = [
    {
      icon: "✦",
      title: "Star Employee of the Year",
      issuer: "KSFCIPL",
      type: "AWARD",
      description:
        "Recognized as Star Employee of the Year for professional contribution and performance at KSFCIPL."
    },

    {
      icon: "◈",
      title: "CATIA",
      issuer: "CIPET, Raipur, Chhattisgarh",
      type: "CERTIFICATION",
      description:
        "Technical training in CATIA for 3D CAD, assembly and engineering design."
    },

    {
      icon: "◇",
      title: "AutoCAD",
      issuer: "CIPET, Raipur, Chhattisgarh",
      type: "CERTIFICATION",
      description:
        "Technical training in AutoCAD for engineering drafting and CAD."
    },

    {
      icon: "▣",
      title: "SolidWorks",
      issuer: "LinkedIn Learning",
      type: "CERTIFICATION",
      description:
        "Professional learning and training in SolidWorks."
    },

    {
      icon: "⚙",
      title: "Project Based Training",
      issuer: "SAIL, Bhilai, Chhattisgarh",
      type: "TRAINING",
      description:
        "Project-based industrial training at Steel Authority of India Limited."
    },

    {
      icon: "△",
      title: "Summer Training",
      issuer: "SAIL, Bhilai, Chhattisgarh",
      type: "TRAINING",
      description:
        "Industrial summer training at Steel Authority of India Limited."
    }
  ];


  return (
    <section
      className="content-section certifications-section"
      id="certifications"
    >

      <div className="section-container">

        <div className="section-heading">

          <span className="section-kicker">
            PROFESSIONAL DEVELOPMENT
          </span>

          <h2>
            Certifications &amp; <span>Recognition</span>
          </h2>

          <p>
            Professional certifications, industrial training
            and recognition received throughout my career.
          </p>

        </div>


        <div className="certifications-grid">

          {certifications.map((certification, index) => (

            <div
              className={
                certification.type === "AWARD"
                  ? "certification-card certification-award"
                  : "certification-card"
              }
              key={index}
            >

              <div className="certification-icon">
                {certification.icon}
              </div>


              <div className="certification-content">

                <span className="certification-type">
                  {certification.type}
                </span>


                <h3>
                  {certification.title}
                </h3>


                <h4>
                  {certification.issuer}
                </h4>


                <p>
                  {certification.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Certifications;