import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <h5>Harsh Kagada</h5>
        <p className="mb-2">MCA Graduate | Web Developer</p>
        <div className="d-flex justify-content-center gap-3 mb-3">
          <a href="https://www.linkedin.com/in/harsh-kagada-633263247/" target="_blank" rel="noreferrer" className="text-light">
            <i className="fab fa-linkedin-in fa-lg"></i>
          </a>
          <a href="#" className="text-light">
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a href="#" className="text-light">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a href="#" className="text-light">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
        </div>
        <p className="mb-0">&copy; {new Date().getFullYear()} Harsh Kagada. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
