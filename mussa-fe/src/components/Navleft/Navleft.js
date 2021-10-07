import React, { Component } from "react";
import ellipse from "./ellipse.png";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin/2.svg";
import facebook from "../images/facebook.svg";
import youtube from "../images/youtube/1.svg";
import github from "../images/github.svg";

import "./Navleft.css";

export class Navleft extends Component {
  render() {
    return (
      <div className="NavleftItems">
        <div>
          {" "}
          <img className="nav-image" src={ellipse} alt="Logo" />
        </div>
        <div className="nav-text">
          MU
          <br />
          SSA
        </div>
        <div className="social-bar">
          <img className="links" src={twitter} alt="twitter" onClick="twitter()"/>
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
