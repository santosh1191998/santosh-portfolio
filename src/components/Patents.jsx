function Patents() {

  const patents = [

    {
      number: "01",
      status: "GRANTED",
      application: "202321046419",
      title: "Patent Application",
      description:
        "Patent application successfully granted."
    },


    {
      number: "02",
      status: "PUBLISHED",
      application: "202311061382",
      title: "Patent Application",
      description:
        "Patent application published and progressing through the grant process."
    }

  ];


  return (

    <section
      className="content-section patents-section"
      id="patents"
    >

      <div className="section-container">

        <div className="section-heading">

          <span className="section-kicker">
            INNOVATION
          </span>

          <h2>
            Patents &amp; <span>Innovation</span>
          </h2>

          <p>
            Engineering ideas developed through research,
            experimentation and prototype development.
          </p>

        </div>


        <div className="patents-grid">

          {patents.map((patent) => (

            <div
              className="patent-card"
              key={patent.number}
            >

              <div className="patent-top">

                <span>
                  {patent.number}
                </span>

                <strong>
                  {patent.status}
                </strong>

              </div>


              <div className="patent-symbol">
                ✦
              </div>


              <h3>
                {patent.title}
              </h3>


              <div className="patent-number">
                Application No.
                <br />
                <strong>
                  {patent.application}
                </strong>
              </div>


              <p>
                {patent.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Patents;