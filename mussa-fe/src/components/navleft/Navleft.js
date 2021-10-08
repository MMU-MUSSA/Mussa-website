import React, { useContext } from "react";
import ellipse from "../../resources/images/ellipse.png";
import { GlobalContext } from "../../context/GlobalState";
import "./Navleft.css";

export default function Navleft() {
  const { listNav } = useContext(GlobalContext);
  /** 
    For making nav social icons toggleable
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }; 
        **/
  return (
    <div className="NavleftItems">
      <div className="topItems">
        {" "}
        <img className="nav-image" src={ellipse} alt="Logo" />
        <div className="nav-text">
          MU
          <br />
          SSA
        </div>
      </div>
      <div className="social">
        {/* 
            Make social icons toggleable
            <div className="social-icon" onClick={this.handleClick}> 
            <i
              className={this.state.clicked ? "fas fa-times" : "far fa-comment"}
            >
              {" "}
            </i>
          </div>
                    <div
            className={
              this.state.clicked ? "social-menu active" : "social-menu"
            }
          >
*/}
        {listNav.map((item, index) => {
          // console.log(Object.keys(item.icon).map((i) => item.icon[i]));
          return (
            <li key={index}>
              <a href={item.url}>
                <img
                  className={item.className}
                  src={Object.keys(item.icon).map((i) => item.icon[i])}
                  alt={item.text}
                />
              </a>
            </li>
          );
        })}
      </div>
    </div>
  );
}
