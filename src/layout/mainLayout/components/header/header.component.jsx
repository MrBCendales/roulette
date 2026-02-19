import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { useState } from "react";

import "./navigation.styles.scss";
import { ReactComponent as HomeIcon } from "../../images/HomeIcon.svg";
import NavigationBackground from "../../images/Background-header-nav.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Fragment>
      <div
        className="navigation-header"
        style={{ backgroundImage: `url(${NavigationBackground})` }}
      >
        <Link className="logo-container" to="/">
          <HomeIcon className="logo-icon" />
        </Link>

        {/* Hamburger icon - only visible on mobile */}
        <button className="hamburger-menu" onClick={handleToggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {/* Overlay - darkens background when menu is open */}
      {isMenuOpen && <div className="overlay" onClick={handleCloseMenu} />}

      {/* Mobile sidebar menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <Link
          className="mobile-nav-link"
          to="/roulette"
          onClick={handleCloseMenu}
        >
          Roulette
        </Link>
        <Link
          className="mobile-nav-link"
          to="/payment-reminder"
          onClick={handleCloseMenu}
        >
          Payment Reminder
        </Link>
        <Link
          className="mobile-nav-link"
          to="/simple-kitchen"
          onClick={handleCloseMenu}
        >
          Simple Kitchen
        </Link>
      </div>
    </Fragment>
  );
};

export default Header;
