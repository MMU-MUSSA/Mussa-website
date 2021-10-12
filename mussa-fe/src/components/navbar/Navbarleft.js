import React, { useContext } from "react";
import ellipse from "../../resources/images/ellipse.svg";
import { GlobalContext } from "../../context/GlobalState";
import "./Navbarleft.css";

export default function Navbarleft(clicked) {
  const { listNav } = useContext(GlobalContext);
  // console.log(clicked.clicked);

  return (
    <div className={clicked.clicked ? "NavbarleftItems" : "none"}>
      <div className="topItemsNavbar">
        {" "}
        <img className="nav-image-navleft" src={ellipse} alt="Logo" />
        <div className="nav-text-navleft">
          MU
          <br />
          SSA
        </div>
      </div>
      <div className="socialNavleft">
        {listNav.map((item, index) => {
          return (
            <i key={index}>
              <a href={item.url}>
                <img
                  className={item.className}
                  src={Object.keys(item.icon).map((i) => item.icon[i])}
                  alt={item.text}
                />
              </a>
            </i>
          );
        })}
      </div>
    </div>
  );
}
