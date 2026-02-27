import { STRINGS_EN } from "../../locales/en";
import "./ProfileCard.styles.scss";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  const STRINGS = STRINGS_EN.HOME.PROFILE;

  return (
    <section className="profile-card">
      <div className="profile-photo">
        <img src={STRINGS.PHOTO_URL} alt="Bryan Cendales" />
      </div>

      <h3 className="profile-name">{STRINGS.NAME}</h3>

      <div className="social-links">{STRINGS.SOCIAL_LINKS}</div>

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
