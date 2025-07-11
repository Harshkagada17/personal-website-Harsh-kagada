import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Projects() {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Amazon Clone",
      description: "A responsive e-commerce website clone built with HTML, CSS, and JavaScript.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=500&q=80",
      features: [
        "Product listing with filtering",
        "Product detail pages",
        "Shopping cart functionality"
      ],
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Racket Hero Website",
      description: "A sports website for a badminton store built with Bootstrap and PHP.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80",
      features: [
        "Responsive layout using Bootstrap",
        "Product catalog with categories",
        "Contact form with PHP backend"
      ],
      tech: ["HTML", "CSS", "Bootstrap", "PHP"],
      link: "https://racketheros.dev.innvonix.in/"
    },
    {
      title: "Employee Management System",
      description: "An ASP.NET and C# CRUD app for employee records.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=500&q=80",
      features: [
        "Create, Read, Update, Delete",
        "Search and filter employees",
        "Responsive UI with Bootstrap"
      ],
      tech: ["ASP.NET", "C#", "SQL Server"]
    }
  ];

  const handleShow = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <section className="py-5 bg-light text-dark" id="projects">
      <div className="container">
        <h2 className="section-title text-center mb-5">My Projects</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text flex-grow-1">{project.description}</p>
                  <div className="mb-3">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="badge bg-secondary me-1">{tech}</span>
                    ))}
                  </div>
                  <button className="btn btn-outline-primary mt-auto" onClick={() => handleShow(project)}>
                    View Details
                  </button>
                  {/* Live Demo Button in Card */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-success mt-2"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Modal show={show} onHide={handleClose} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selectedProject?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedProject?.image}
              alt={selectedProject?.title}
              className="img-fluid rounded mb-4"
            />
            <p>{selectedProject?.description}</p>
            <h6>Key Features:</h6>
            <ul>
              {selectedProject?.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <h6 className="mt-3">Technologies Used:</h6>
            <div className="d-flex flex-wrap mb-3">
              {selectedProject?.tech.map((tech, i) => (
                <span key={i} className="badge bg-secondary me-2 mb-2">{tech}</span>
              ))}
            </div>
            {/* Live Link inside Modal */}
            {selectedProject?.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-success"
              >
                🌐 Visit Live Website
              </a>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </section>
  );
}

export default Projects;
