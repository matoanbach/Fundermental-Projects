import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import NavLinks from "./NavLinks";
function Navbar() {
  const { openSidebar, setPageId } = useGlobalContext();
  function handleSubmenu(event) {
    if(!event.target.classList.contains("nav-link")){
      setPageId(null);
    }
  }
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
}

export default Navbar;
