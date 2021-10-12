import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import Navleft from "../navleft/Navleft";
import "./Navbar.css";

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
        <>
          <Navleft />
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
        </>
      </nav>
    );
  }
}

export default Navbar;
