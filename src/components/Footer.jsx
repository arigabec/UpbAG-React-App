import { icons } from "../data/data";
import { Icons } from "./Icons";
import { SectionLinks } from "./SectionLinks";

export const Footer = () => {
  return (
    <footer className="section footer">
      <SectionLinks parentClass='footer-links' itemClass='footer-link'></SectionLinks>

      <ul className="footer-icons">
        {icons.map((icon) => {
          return (
            <Icons key={icon.id} icon={icon.link} itemClass="footer-icon"></Icons>
          );
        })}
      </ul>

      <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span>. all rights reserved
      </p>
    </footer>
  );
};

export default Footer;