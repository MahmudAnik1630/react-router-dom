import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "isactive" : "isinactive")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "isactive" : "isinactive")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "isactive" : "isinactive")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
