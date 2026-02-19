import { STRINGS_EN } from "../../../../../../src/locales/lang/en";
import "./footer.styles.scss";

const Footer = () => {
  const STRINGS = STRINGS_EN.HOME.FOOTER;

  return (
    <footer className="footer">
      <p className="footer-copyright">{STRINGS.COPYRIGHT}</p>
      <p className="footer-made">{STRINGS.MADE_WITH}</p>
    </footer>
  );
};

export default Footer;
