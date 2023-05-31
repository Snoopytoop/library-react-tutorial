import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LibraryLogo from '../assets/Library.svg'

const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <a href="">
          <img src={LibraryLogo} alt="" className="logo" />
        </a>
        <ul className="nav__links">
          <li className="nav__list">
            <a href="" className="nav__list">Home</a>
          </li>
          <li className="nav__list">
            <a href="" className="nav__list">Books</a>
          </li>
        </ul>
        <button className="btn__menu">
            <FontAwesomeIcon icon="bars" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
