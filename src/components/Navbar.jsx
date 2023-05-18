import logo from "../images/logo.jpg";
import { SectionLinks } from "./SectionLinks";
import { icons } from "../data/data";
import { Icons } from "./Icons";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" style={{width: '150 px', height: '50px'}}/>
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <SectionLinks parentClass='nav-links' itemClass='nav-link'/>
        
        <ul className="nav-icons">
          {icons.map((icon) => {
            return (
              <Icons key={icon.id} icon={icon.link} itemClass="nav-icon"></Icons>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};