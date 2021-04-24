import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from 'react-icons/bs'
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { Sidebardata } from "./sidebardata";
import "../css/navbar.css";
import { IconContext } from "react-icons";
import { Container, Row } from "react-bootstrap";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <h1 className="navbar-title">
            <span className="logo-span">
              <img className="logo" src="../images/logo1.png" alt="logo" />
            </span>Entertainment</h1>
          <span>
            <Link to="/favorite">
              <BsIcons.BsFillStarFill size={40} />
            </Link>
          </span>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle nav-menu-icon">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {Sidebardata.map((item, index) => {
              return (
                <li className="nav-text" key={index}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
