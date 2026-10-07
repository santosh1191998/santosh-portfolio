function Skills() {

  const skills = [

    {
      icon: "◈",
      title: "SIEMENS NX",
      category: "CAD / CAM / CAE",
      text:
        "CAD and assembly, CAM for turnmill and VMC, structural analysis, animation, drafting and parametric modelling."
    },

    {
      icon: "◇",
      title: "SOLIDWORKS",
      category: "CAD / CAE",
      text:
        "3D CAD, assemblies, structural analysis, animation, engineering drafting and product development."
    },

    {
      icon: "⌁",
      title: "FUSION 360",
      category: "CAD / CAM / CAE",
      text:
        "CAD and assembly, CAM for turnmill and VMC, structural analysis, animation and drafting."
    },

    {
      icon: "▣",
      title: "AUTOCAD",
      category: "2D / 3D CAD",
      text:
        "2D technical drafting and 3D CAD development."
    },

    {
      icon: "△",
      title: "CATIA",
      category: "3D CAD",
      text:
        "3D CAD, assemblies, animation and technical drafting."
    },

    {
      icon: "⚙",
      title: "3D PRINTING",
      category: "PROTOTYPING",
      text:
        "FDM printing, Cura slicing, printer leveling, service and prototype development."
    },

    {
      icon: "◉",
      title: "KEYSHOT",
      category: "VISUALIZATION",
      text:
        "3D rendering and visualization of engineering products."
    },

    {
      icon: "✦",
      title: "LASER ENGRAVING",
      category: "MANUFACTURING",
      text:
        "Laser engraving and related manufacturing applications."
    },

    {
      icon: "▤",
      title: "ENGINEERING TOOLS",
      category: "PRODUCTIVITY",
      text:
        "Excel, Word, PowerPoint, Canva and ChatGPT for engineering documentation and presentations."
    }

  ];


  return (

    <section
      className="content-section skills-section"
      id="skills"
    >

      <div className="section-container">

        <div className="section-heading">

          <span className="section-kicker">
            TECHNICAL EXPERTISE
          </span>

          <h2>
            Engineering <span>Skills</span>
          </h2>

          <p>
            Software, tools and technical capabilities used
            across design, development and prototyping.
          </p>

        </div>


        <div className="skills-grid">

          {skills.map((skill, index) => (

            <div
              className="skill-card"
              key={index}
            >

              <div className="skill-icon">
                {skill.icon}
              </div>


              <div className="skill-category">
                {skill.category}
              </div>


              <h3>
                {skill.title}
              </h3>


              <p>
                {skill.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Skills;