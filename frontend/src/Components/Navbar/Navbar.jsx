import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "./octocat-1713322084876.png";

export const Navbar = () => {
  return (
    <div className="NavbarDetail">
      <nav class="navbar navbar-expand-lg navbar-light bg-custom">
        <div class="container-fluid">
          <a
            className="navbar-brand"
            href="https://github.com/SharifMahin/Crud_Web_System_Using_Node_Js_Express_js_Recat_Js_mongoDB"
          >
            <img className="imageCustom" src={logo} alt="Icon" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink class="nav-link actives" to="/">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link actives" to="/add">
                  Create
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link actives" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
            {/* <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};
