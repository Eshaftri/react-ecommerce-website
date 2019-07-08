import React from "react";
import { Link } from "react-router-dom";

import "./SideDrawer.css";

const SideDrawer = props => {

  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  return (
    <nav className={drawerClasses}>
      <ul>
      <li>
      <Link
        to="/"
        className="nav-link-side"
        onClick={() => props.onCategory("Dresses")}
      >
        Dresses
      </Link>
    </li>
    <li>
      <Link
        to="/"
        className="nav-link-side"
        onClick={() => props.onCategory("Trousers")}
      >
        Trousers
      </Link>
    </li>
    <li>
      <Link
        to="/"
        className="nav-link-side"
        onClick={() => props.onCategory("Tops")}
      >
        Tops
      </Link>
    </li>
    <li>
      <Link
        to="/"
        className="nav-link-side"
        onClick={() => props.onCategory("Coats & Jackets")}
      >
        Coats & Jackets
      </Link>
    </li>
    <li>
      <Link
        to="/"
        className="nav-link-side"
        onClick={() => props.onCategory("Jeans")}
      >
        Jeans
      </Link>
    </li>
    <li>
      <Link
        to="/"
        className="nav-link-side"
        onClick={() => props.onCategory("Skirts")}
      >
        Skirts
      </Link>
    </li>
    <li>
      <Link
        to="/"
        className="nav-link-side"
        onClick={() => props.onCategory("Bags & Purses")}
      >
        Bags & Purses
      </Link>
    </li>
    <li>
      <Link
        to="/"
        className="nav-link-side"
        onClick={() => props.onCategory("Jewellery")}
      >
        Jewellery
      </Link>
    </li>
    <li>
      <Link
        to="/"
        className="nav-link-side"
        onClick={() => props.onCategory("Sunglasses")}
      >
        Sunglasses
      </Link>
    </li>
    <li>
      <Link
        to="/"
        className="nav-link-side"
        onClick={() => props.onCategory("Shoes & Boots")}
      >
        Shoes & Boots
      </Link>
    </li>
  </ul>
    </nav>
  );
};
export default SideDrawer;