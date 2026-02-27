import { STRINGS_EN } from "../../locales/en";
import "./HeroSection.styles.scss";

const HeroSection = () => {
  const STRINGS = STRINGS_EN.HOME.HERO;

  return (
    <section id="about" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">{STRINGS.TITLE}</h1>
        <h2 className="hero-subtitle">{STRINGS.SUBTITLE}</h2>
        <p className="hero-description">{STRINGS.DESCRIPTION}</p>
      </div>
    </section>
  );
};

export default HeroSection;
