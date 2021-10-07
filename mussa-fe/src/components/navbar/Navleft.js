import React, { Component } from "react";
/*import ellipse from "./ellipse.png";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin/2.svg";
import facebook from "../images/facebook.svg";
import youtube from "../images/youtube/1.svg";
import github from "../images/github.svg";*/

import "../../styles/Navleft.css";

export class Navleft extends Component {
  render() {
    return (
      <div className="NavleftItems">
        <div>
          {" "}
          <img className="nav-image" alt="Logo" src={require("../../images/assets/logo.png").default}/>
        </div>
        <div className="nav-text">
          MU
          <br />
          SSA
        </div>
        <div className="social-bar">
          <img className="links"  alt="twitter" src={require("../../images/assets/twitter.png").default}/>
          <img className="links"  alt="linkedin" src={require("../../images/assets/linkedin.png").default}/>
          <img className="links"  alt="facebook" src={require("../../images/assets/facebook.png").default}/>
          <img className="links"  alt="youtube" src={require("../../images/assets/twitter.png").default}/>
          <img className="links"  alt="github" src={require("../../images/assets/twitter.png").default}/>
        </div>
      </div>
    );
  }
}

export default Navleft;
