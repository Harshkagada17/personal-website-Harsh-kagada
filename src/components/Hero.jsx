import React from 'react';

function Hero() {
  return (
    <section className="hero bg-dark text-light d-flex align-items-center" id="home" style={{ minHeight: '100vh', paddingTop: '80px' }}>
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Column */}
          <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
            <h1 className="display-4 fw-bold mb-3">
              Harsh Kagada
            </h1>
            <p className="lead mb-4">
              MCA graduate with internship experience in full-stack web development.  
              Passionate about building modern web applications and learning web development.
            </p>
            <div className="d-flex gap-3 flex-wrap justify-content-center justify-content-lg-start">
              <a href="#contact" className="btn btn-primary px-4">Contact Me</a>
              <a href="/resume.pdf" className="btn btn-outline-light px-4" download>
                <i className="fas fa-download me-2"></i>Download Resume
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6 text-center">
            <img
              src="/src/assets/img/Harshimg.jfif"
              alt="Harsh Kagada"
              className="img-fluid rounded-circle shadow-lg"
              style={{ maxWidth: '300px' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
