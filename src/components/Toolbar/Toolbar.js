import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import DrawerBtn from "../SideDrawer/DrawerBtn";
import "./Toolbar.css";

const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar-toggle-btn">
        <DrawerBtn click={props.drawerClickHandler} />
      </div>
      <div />
      <Link to="/">
        <img src={logo} alt="store" className="toolbar__logo" />
      </Link>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <Link
              to="/"
              className="nav-link"
              onClick={() => props.onCategory("Dresses")}
            >
              Dresses
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="nav-link"
              onClick={() => props.onCategory("Trousers")}
            >
              Trousers
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="nav-link"
              onClick={() => props.onCategory("Tops")}
            >
              Tops
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="nav-link"
              onClick={() => props.onCategory("Coats & Jackets")}
            >
              Coats & Jackets
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="nav-link"
              onClick={() => props.onCategory("Jeans")}
            >
              Jeans
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="nav-link"
              onClick={() => props.onCategory("Skirts")}
            >
              Skirts
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="nav-link"
              onClick={() => props.onCategory("Bags & Purses")}
            >
              Bags & Purses
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="nav-link"
              onClick={() => props.onCategory("Jewellery")}
            >
              Jewellery
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="nav-link"
              onClick={() => props.onCategory("Sunglasses")}
            >
              Sunglasses
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="nav-link"
              onClick={() => props.onCategory("Shoes & Boots")}
            >
              Shoes & Boots
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;
