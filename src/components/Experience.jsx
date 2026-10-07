function Experience() {

  const experiences = [

    {
      company: "RAR Engineering (P) Ltd.",
      position: "Mechanical Design Engineer (R&D)",
      duration: "July 2022 — June 2025",
      location: "Jabalpur, MP, India",

      work: [
        "Design development under NPD including CAD modelling, CAD assembly, animation, rendering, FEA, BOM and technical drafting.",
        "Prototype development using 3D printing, CAM and part assembly.",
        "Vendor development including vendor search for raw materials, parts and part development.",
        "Preparation of IP documents, user manuals, compliance documents, presentations and datasheets.",
        "Quality and testing activities."
      ]
    },


    {
      company: "KSFCIPL",
      position: "Design Engineer",
      duration: "1 Year",
      location: "India",

      work: [
        "New Product Development activities.",
        "Prototype development and product improvement.",
        "Research and Development activities.",
        "Mechanical design and engineering development."
      ]
    }

  ];


  return (

    <section
      className="content-section experience-section"
      id="experience"
    >

      <div className="section-container">

        <div className="section-heading">

          <span className="section-kicker">
            PROFESSIONAL JOURNEY
          </span>

          <h2>
            Work <span>Experience</span>
          </h2>

          <p>
            Professional experience across mechanical design,
            product development and R&amp;D.
          </p>

        </div>


        <div className="experience-timeline">

          {experiences.map((experience, index) => (

            <div
              className="experience-item"
              key={index}
            >

              <div className="experience-marker">
                <span></span>
              </div>


              <div className="experience-card">

                <span className="experience-date">
                  {experience.duration}
                </span>


                <h3>
                  {experience.position}
                </h3>


                <h4>
                  {experience.company}
                </h4>


                <div className="experience-location">
                  {experience.location}
                </div>


                <ul className="experience-list">

                  {experience.work.map(
                    (item, workIndex) => (

                      <li key={workIndex}>
                        {item}
                      </li>

                    )
                  )}

                </ul>


                <div className="tag-list">

                  <span>Mechanical Design</span>
                  <span>NPD</span>
                  <span>R&amp;D</span>
                  <span>Prototype</span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Experience;