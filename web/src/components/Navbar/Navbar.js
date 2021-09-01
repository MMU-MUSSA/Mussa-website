import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

export class Navbar extends Component {
  state = { clicked: false }
  

  render() {
    return (
      <div className="NavbarItems">
        <div className="menu-icon"></div>
        <ul class="ul">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <span>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </span>
                <hr />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Navbar;
