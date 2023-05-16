import { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linkRef = useRef(null);
  const linkContainerRef = useRef(null);
  const linkStyles = {
    height : showLinks ? `${linkContainerRef.current.getBoundingClientRect().height}px` : '0px'
  }

//   console.log(linkRef);
//   console.log(linkContainerRef);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        <div className="links-container"  ref={linkRef} style={linkStyles} >
          <ul className="links"  ref={linkContainerRef} >
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
