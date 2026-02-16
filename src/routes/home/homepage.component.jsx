import { Link } from "react-router-dom";
import { STRINGS_EN } from "../../locales/lang/en";
import "./homepage.styles.scss";
import { useEffect } from "react";

const HomePage = () => {
  const STRINGS = STRINGS_EN.HOME;
  const TECH_PROJECTS = STRINGS.PROJECTS.PROJECTS_DATA;
  const TECH_STACK = STRINGS.TECH_STACK.STACK;

  useEffect(() => {
    console.log(STRINGS.PROJECTS.PROJECTS_DATA);
  }, []);
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">{STRINGS.HERO.TITLE}</h1>
          <h2 className="hero-subtitle">{STRINGS.HERO.SUBTITLE}</h2>
          <p className="hero-description">{STRINGS.HERO.DESCRIPTION}</p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-section">
        <div className="section-container">
          <h2 className="section-title">{STRINGS.TECH_STACK.TITLE}</h2>
          <div className="tech-grid">
            {TECH_STACK.map((tech, index) => (
              <div key={index} className="tech-card">
                <span className="tech-name">{tech.NAME}</span>
                {tech.LEARNING && (
                  <span className="learning-badge">
                    {STRINGS.TECH_STACK.LEARNING}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section className="projects-section">
        <div className="section-container">
          <h2 className="section-title">{STRINGS.PROJECTS.TITLE}</h2>
          <div className="projects-grid">
            {/* Roulette Project */}
            {TECH_PROJECTS.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-info">
                  <h3 className="project-title">{project.TITLE}</h3>
                  <p className="project-description">{project.DESCRIPTION}</p>
                  <div className="project-tech">
                    {project.TECH.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <Link to={project.ROUTE} className="project-button">
                  {STRINGS.PROJECTS.TRY_LIVE}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
