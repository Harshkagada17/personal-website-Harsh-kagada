import React from 'react';

function Skills() {
  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 80 },
    { name: "Bootstrap", level: 85 },
    { name: "PHP (Learning)", level: 60 },
    { name: "Jquery", level: 80 },
    { name: "ASP.NET (Learning)", level: 50 },
    { name: "Node.js", level: 55 },
  ];

  const techTools = [
    "HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS", "C#", "ASP.NET",
    "Node.js", "PHP", "Java", "MySQL", "Visual Studio", "VS Code", "Git", "GitHub"
  ];

  const softSkills = [
    "Teamwork", "Problem Solving", "Quick Learner", "Communication", "Adaptability"
  ];

  return (
    <section className="py-5" id="skills">
      <div className="container">
        <h2 className="section-title text-center mb-5">My Skills</h2>
        <div className="row">
          {/* Technical Skills */}
          <div className="col-md-6 mb-4">
            {skills.map((skill, idx) => (
              <div key={idx} className="mb-4">
                <div className="d-flex justify-content-between">
                  <strong>{skill.name}</strong>
                  <span>{skill.level}%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech & Tools + Soft Skills */}
          <div className="col-md-6">
            <h5 className="mb-3">Technologies & Tools</h5>
            <div className="d-flex flex-wrap mb-4">
              {techTools.map((tool, idx) => (
                <span key={idx} className="badge bg-secondary me-2 mb-2">{tool}</span>
              ))}
            </div>
            <h5 className="mb-3">Soft Skills</h5>
            <div className="d-flex flex-wrap">
              {softSkills.map((skill, idx) => (
                <span key={idx} className="badge bg-info text-dark me-2 mb-2">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
