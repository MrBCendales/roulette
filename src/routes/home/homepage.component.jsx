import { Link } from "react-router-dom";
import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Bryan Cendales</h1>
          <h2 className="hero-subtitle">Full-Stack Developer</h2>
          <p className="hero-description">
            I'm a graduated electrical engineer who transitioned into full-stack
            development. I build interactive web applications with React and I'm
            expanding into Python and AWS.
          </p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-section">
        <div className="section-container">
          <h2 className="section-title">Tech Stack</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <span className="tech-name">React</span>
            </div>
            <div className="tech-card">
              <span className="tech-name">JavaScript</span>
            </div>
            <div className="tech-card">
              <span className="tech-name">SCSS</span>
            </div>
            <div className="tech-card">
              <span className="tech-name">Python</span>
              <span className="learning-badge">Learning</span>
            </div>
            <div className="tech-card">
              <span className="tech-name">AWS</span>
              <span className="learning-badge">Learning</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="section-container">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            {/* Roulette Project */}
            <div className="project-card">
              <div className="project-info">
                <h3 className="project-title">Roulette</h3>
                <p className="project-description">
                  An interactive spinning wheel to make random selections to
                  play.
                </p>
                <div className="project-tech">
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">SCSS</span>
                </div>
              </div>
              <Link to="/roulette" className="project-button">
                Try it Live →
              </Link>
            </div>

            {/* Payment Reminder Project */}
            <div className="project-card">
              <div className="project-info">
                <h3 className="project-title">Payment Reminder</h3>
                <p className="project-description">
                  A family-oriented economy manager to check your monthly
                  payments and card subscriptions.
                </p>
                <div className="project-tech">
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">SCSS</span>
                </div>
              </div>
              <Link to="/payment-reminder" className="project-button">
                Try it Live →
              </Link>
            </div>

            {/* Simple Kitchen Project */}
            <div className="project-card">
              <div className="project-info">
                <h3 className="project-title">Simple Kitchen</h3>
                <p className="project-description">
                  Friendly, simple cooking manager for weekly recipes. Add
                  prices and shopping lists to prepare before going to the mall.
                </p>
                <div className="project-tech">
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">SCSS</span>
                </div>
              </div>
              <Link to="/simple-kitchen" className="project-button">
                Try it Live →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
