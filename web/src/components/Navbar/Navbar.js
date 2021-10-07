/*import React from "react";

export default function Navbar(){
  return(
    <div className="navbar">
      <div className="aside">aside</div>
      <div className="header">header</div>
    </div>
  );
}*/


import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "../../styles/Navbar.css";

const styles = {
  header: {
    backgroundColor: "blue"
  }
}

class Navbar extends Component {
  state = { clicked: false }
  

  render() {
    return (
      <div className="NavbarItems">
        <div className="menu-icon">sd</div>
        <ul className="ul">
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
