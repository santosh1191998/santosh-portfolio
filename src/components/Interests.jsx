function Interests() {
  const interests = [
    "Product Innovation",
    "Mechanical Design",
    "Prototype Development",
    "Technology",
    "3D Printing",
    "Engineering R&D"
  ];

  return (
    <section
      className="content-section interests-section"
      id="interests"
    >
      <div className="section-container">

        <div className="section-heading">
          <span className="section-kicker">
            BEYOND ENGINEERING
          </span>

          <h2>
            Areas of <span>Interest</span>
          </h2>

          <p>
            Areas that keep me curious, creative and engaged with engineering.
          </p>
        </div>

        <div className="interests-list">

          {interests.map((interest, index) => (
            <div
              className="interest-item"
              key={index}
            >
              <span>
                0{index + 1}
              </span>

              <strong>
                {interest}
              </strong>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Interests;