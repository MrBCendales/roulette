import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

import "./navigation.styles.scss";
import { ReactComponent as HomeIcon } from "../../images/HomeIcon.svg";
import NavigationBackground from "../../images/Background-header-nav.png";

const Navigation = () => {
  return (
    <Fragment>
      <div
        className="navigation-header"
        style={{ backgroundImage: `url(${NavigationBackground})` }}
      >
        <Link className="logo-container" to="/">
          <HomeIcon className="logo-icon" />
        </Link>
        <div className="link-container">
          <Link className="nav-link" to="/roulette">
            Roulette
          </Link>
          <Link className="nav-link" to="/dice">
            Dice
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Navigation;
