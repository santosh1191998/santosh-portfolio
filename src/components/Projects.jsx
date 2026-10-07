function Projects() {

  const projects = [

    {
      number: "01",
      title: "LOAD ASSISTIVE KNEE BRACE",
      category: "PRODUCT DEVELOPMENT",

      description:
        "A knee support system designed to provide support and assistance to the knee joint, with the aim of enhancing mobility and reducing the impact of loads on the wearer's knee.",

      achievements: [
        "Developed over 9 initial and 2 final working prototypes.",
        "Achieved 15× growth in repeat orders over a period of 2 years.",
        "Prepared IP application, user manuals, datasheets and supporting documentation."
      ],

      tags: [
        "NPD",
        "Prototype Development",
        "3D Printing",
        "R&D"
      ]
    },


    {
      number: "02",
      title: "ROTARY LIQUID SPRING",
      category: "PATENTED TECHNOLOGY",

      description:
        "A rotary spring concept that represents spring mechanics by harnessing the compressibility of fluids to operate in rotational domains.",

      achievements: [
        "Novelty patent granted on 11 July 2023.",
        "Developed over 6 different working prototypes.",
        "Prepared IP application, datasheets and supporting documentation."
      ],

      tags: [
        "R&D",
        "Prototype",
        "Patent",
        "Mechanical Design"
      ]
    },


    {
      number: "03",
      title: "3D MODELING OF AGRICULTURAL MACHINERY",
      category: "REVERSE ENGINEERING / CAD",

      description:
        "Developed a complete CAD assembly of agricultural machinery after manually measuring the individual components.",

      achievements: [
        "Complete machinery assembly model developed.",
        "Individual components were manually measured.",
        "Development completed in approximately 2 weeks."
      ],

      tags: [
        "CAD",
        "Reverse Engineering",
        "Assembly",
        "3D Modelling"
      ]
    }

  ];


  return (

    <section
      className="content-section projects-section"
      id="projects"
    >

      <div className="section-container">

        <div className="section-heading">

          <span className="section-kicker">
            SELECTED WORK
          </span>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p>
            Selected engineering projects involving product
            development, prototyping and CAD.
          </p>

        </div>


        <div className="projects-grid">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.number}
            >

              <div className="project-number">
                {project.number}
              </div>


              <div className="project-category">
                {project.category}
              </div>


              <h3>
                {project.title}
              </h3>


              <p className="project-description">
                {project.description}
              </p>


              <ul className="project-achievements">

                {project.achievements.map(
                  (achievement, index) => (

                    <li key={index}>
                      {achievement}
                    </li>

                  )
                )}

              </ul>


              <div className="project-tags">

                {project.tags.map((tag) => (

                  <span key={tag}>
                    {tag}
                  </span>

                ))}

              </div>


              <div className="project-arrow">
                ↗
              </div>

            </article>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Projects;