import React, { Component } from "react";
import ellipse from "../../resources/images/ellipse.png";
import twitter from "../../resources/icons/twitter.svg";
import linkedin from "../../resources/icons/linkedin.svg";
import facebook from "../../resources/icons/facebook.svg";
import youtube from "../../resources/icons/youtube.svg";
import github from "../../resources/icons/github.svg";

import "./Navleft.css";

export class Navleft extends Component {
  /** 
    For making nav social icons toggleable
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }; 
        **/
  render() {
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

          <img
            className="links"
            src={twitter}
            alt="twitter"
            onClick="twitter()"
          />
          <img className="links" src={linkedin} alt="linkedin" />
          <img className="links" src={facebook} alt="facebook" />
          <img className="links" src={youtube} alt="youtube" />
          <img className="links" src={github} alt="github" />
        </div>
      </div>
    );
  }
}

export default Navleft;
