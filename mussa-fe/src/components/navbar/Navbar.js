import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import Navbarleft from "./Navbarleft";
import "./Navbar.css";
import "./Navbarleft.css";

export class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    // console.log(this.state.clicked);
    return (
      <nav className="NavbarItems">
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <div className="NavbarLeftSome">
          <Navbarleft clicked={this.state.clicked} />
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
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
      </nav>
    );
  }
}

export default Navbar;
