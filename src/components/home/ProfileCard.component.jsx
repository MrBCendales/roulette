import { STRINGS_EN } from "../../locales/en";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./ProfileCard.styles.scss";

const iconMap = {
  GitHub: <FaGithub />,
  LinkedIn: <FaLinkedin />,
  Email: <FaEnvelope />,
};

const ProfileCard = () => {
  const STRINGS = STRINGS_EN.HOME.PROFILE;

  return (
    <section className="profile-card">
      <div className="profile-photo">
        <img src={STRINGS.PHOTO_URL} alt="Bryan Cendales" />
      </div>

      <h3 className="profile-name">{STRINGS.NAME}</h3>

      <div className="social-links">
        {STRINGS.SOCIAL_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.URL}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label={link.NAME}
          >
            {iconMap[link.NAME]}
          </a>
        ))}
      </div>

      <div className="skills-grid">
        {STRINGS.SKILLS.map((skill, index) => (
          <span key={index} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default ProfileCard;
