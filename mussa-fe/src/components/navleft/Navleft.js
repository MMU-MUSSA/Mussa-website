import React, { Component } from "react";
import ellipse from "../../resources/images/ellipse.png";
import twitter from "../../resources/icons/twitter.svg";
import linkedin from "../../resources/icons/linkedin.svg";
import facebook from "../../resources/icons/facebook.svg";
import youtube from "../../resources/icons/youtube.svg";
import github from "../../resources/icons/github.svg";

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
        <div className="social">
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
