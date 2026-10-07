function Contact() {

  return (

    <section
      className="contact-section"
      id="contact"
    >

      <div className="contact-container">

        <span className="section-kicker">
          LET'S CONNECT
        </span>


        <h2>
          Let's build something
          <span> remarkable.</span>
        </h2>


        <p>
          Open to opportunities, engineering collaborations,
          product development and interesting technical challenges.
        </p>


        <div className="contact-grid">


          <a
            href="mailto:santoshkv1109@gmail.com"
            className="contact-card"
          >

            <span className="contact-icon">
              @
            </span>

            <div>

              <small>
                EMAIL
              </small>

              <strong>
                santoshkv1109@gmail.com
              </strong>

            </div>

          </a>


          <a
            href="tel:+916232069943"
            className="contact-card"
          >

            <span className="contact-icon">
              ☎
            </span>

            <div>

              <small>
                PHONE
              </small>

              <strong>
                +91 62320 69943
              </strong>

            </div>

          </a>


          <div className="contact-card">

            <span className="contact-icon">
              ◉
            </span>

            <div>

              <small>
                LOCATION
              </small>

              <strong>
                Jabalpur, MP, India
              </strong>

            </div>

          </div>

        </div>


        <div className="footer-line">

          <span>
            © {new Date().getFullYear()} Santosh Vishwakarma
          </span>

          <span>
            DESIGN ENGINEER
          </span>

        </div>

      </div>

    </section>

  );
}

export default Contact;