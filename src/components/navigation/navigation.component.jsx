import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation-header">
        <Link className="logo-container" to="/">
          Home
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
