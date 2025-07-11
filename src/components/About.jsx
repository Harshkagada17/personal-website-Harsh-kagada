import React from 'react';

function About() {
  return (
    <section className="py-5" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="row">
          <div className="col-lg-6">
            <p className="mb-4">
              I'm a dedicated MCA graduate with hands-on experience in full-stack web development.
              My internship at <strong>aiTiger.io</strong> and trainee position at <strong>Innvonix Tech</strong>
              have equipped me with practical skills in building responsive websites and working in collaborative teams.
            </p>
            <p>
              Currently, I'm upskilling in  php to transition into backend development.
              I'm passionate about creating user-friendly interfaces and solving complex problems
              with clean, efficient code.
            </p>
            <div className="mt-4">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card h-100 bg-dark text-light">
              <div className="card-body">
                <h4 className="mb-4">Personal Information</h4>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <strong>Name:</strong> Harsh Kagada
                  </li>
                  <li className="mb-3">
                    <strong>Phone:</strong> +91 63548 53591
                  </li>
                  <li className="mb-3">
                    <strong>Email:</strong> hkagada520@rku.ac.in
                  </li>
                  <li className="mb-3">
                    <strong>Location:</strong> Ahmedabad, India
                  </li>
                  <li className="mb-3">
                    <strong>LinkedIn:</strong>{' '}
                    <a
                      href="https://www.linkedin.com/in/harsh-kagada-633263247/"
                      className="text-decoration-none text-info"
                      target="_blank"
                      rel="noreferrer"
                    >
                      linkedin.com/in/harsh-kagada-633263247/
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
