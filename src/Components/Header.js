import React from "react";
import logo from "../assets/logo.png";

function Header(props) {
  return (
    <header>
      <img className="logo" src={logo} alt="logo docplanner" />
      <ul className="navigateur">
        {props.navmenu.map(el => (
          <li className="dropdown">
            {el.item}
            {el.subitem ? (
              <ul className="dropdowne">
                {el.subitem.map(el => (
                  <li>{el}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </header>
  );
}
export default Header;
