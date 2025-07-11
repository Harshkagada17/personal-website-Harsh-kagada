import React from 'react';

function Experience() {
  return (
    <section className="py-5 bg-light text-dark" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="row timeline">
          <div className="col-6">
            <div className="timeline-item mb-4">
              <h5 className="timeline-date">Feb 2025 - Jun 2025</h5>
              <h6 className="timeline-title">Web Developer Intern - aiTiger.io</h6>
              <ul>
                <li>Worked on responsive websites using HTML, CSS, JavaScript</li>
                <li>Assisted in backend tasks and debugging</li>
                <li>Collaborated with the team to enhance project performance</li>
              </ul>
            </div>
          </div>
          <div className="col-6">
            <div className="timeline-item mb-4">
              <h5 className="timeline-date">Jul 2024 - Dec 2024</h5>
              <h6 className="timeline-title">Frontend Developer Trainee - Innvonix Tech</h6>
              <ul>
                <li>Built clean UI using Bootstrap and JavaScript</li>
                <li>Worked in agile environment</li>
                <li>Improved client-facing web components</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
