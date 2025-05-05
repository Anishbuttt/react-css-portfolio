
import React, { useEffect, useRef } from "react";
import "./sidebar.css";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const sidebarRef = useRef(null);
  const [boxStyle, setBoxStyle] = React.useState({});
  
  // Helper function to get the active link based on current path
  const getActiveLinkFromPath = (pathname) => {
    if (pathname === "/") return "home";
    return pathname.substring(1); // Remove the leading slash
  };

  // Update the box position whenever the location changes
  useEffect(() => {
    const activeLink = getActiveLinkFromPath(location.pathname);
    const activeElement = document.querySelector(`.${activeLink}.active`) || 
                          document.querySelector(`.${activeLink} .active`);
                          
    if (activeElement && sidebarRef.current) {
      const sidebarTop = sidebarRef.current.getBoundingClientRect().top;
      const { top, height, left, width } = activeElement.getBoundingClientRect();
      
      setBoxStyle({
        top: `${top - sidebarTop}px`,
        left: `${left}px`,
        height: `${height}px`,
        width: `${width}px`,
      });
    }
  }, [location.pathname]);
  
  return (
    <div className="sidebar" ref={sidebarRef}>
      <div className="sliding-box" style={boxStyle}></div>
      <ul>
        <li className="home">
          <NavLink to="/" end className={({isActive}) => isActive ? "active" : ""}>
            Home
          </NavLink>
        </li>
        <li className="expertises">
          <NavLink to="/expertises" className={({isActive}) => isActive ? "active" : ""}>
            Expertises
          </NavLink>
        </li>
        <li className="education">
          <NavLink to="/education" className={({isActive}) => isActive ? "active" : ""}>
            Education
          </NavLink>
        </li>
        <li className="contact">
          <NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;