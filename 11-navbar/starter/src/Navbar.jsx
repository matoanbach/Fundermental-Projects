import React from "react";
import { useState, useRef } from "react";
import { links, social } from "./data";
import logo from "./logo.svg";
import { FaBars } from "react-icons/fa";
import { useEffect } from "react";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const linkRef = useRef(null);
  const containerRef = useRef(null);

  function toggleLinks() {
    setShowLinks(!showLinks);
  }

  const linkStyles = {
    height: showLinks ? `${linkRef.current.clientHeight}px` : "0px",
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div className="links-container" style={linkStyles}>
          <ul className="links" ref={linkRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="social-icons">
          {
            social.map((theIcon) =>{
              const {id, url, icon} = theIcon;
              return <a href={url} key={id}>{icon}</a>
            })
          }
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
