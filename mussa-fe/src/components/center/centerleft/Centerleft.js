import React, { useState, useContext } from "react";
import "./Centerleft.css";
import upIcon from "../../../resources/icons/up.svg";
import downIcon from "../../../resources/icons/down.svg";
import { GlobalContext } from "../../../context/GlobalState";

export default function Centerleft() {
  const { listItems } = useContext(GlobalContext);
  let [value, setValue] = useState(0);
  const [clicked, setClicked] = useState(0);

  const changeBackground = (value) => {
    document.querySelector(".App").style.backgroundImage =
      "url(" +
      require(`../../../resources/images/${listItems[value].image}.jpg`)
        .default +
      ")";
    console.log(listItems[value]);
  };

  const nextClick = () => {
    setValue(value === 3 ? (value = 0) : (value += 1));
    changeBackground(value);
  };
  const previousClick = () => {
    setValue(value === 0 ? (value = 3) : (value -= 1));
    changeBackground(value);
  };

  const handleClick = (id) => {
    percBar = id;
    setValue(id);
    changeBackground(id);
  };
  let percBar;

  const red = `"red" + percBar`;

  return (
    <div className="centerleft">
      <div className="listNumber">
        <i>
          <span>/</span> 0{value + 1}
        </i>{" "}
        <img
          className="previousItem"
          onClick={previousClick}
          src={upIcon}
          alt="previousButton"
        />
      </div>
      <>
        <hr className="white" onClick={nextClick}></hr>
        <hr
          onClick={nextClick}
          className={
            value === 0
              ? "red0"
              : value === 1
              ? "red1"
              : value === 2
              ? "red2"
              : value === 3
              ? "red3"
              : "red"
          }
        ></hr>
      </>
      <>
        <img
          className="nextItem"
          onClick={nextClick}
          src={downIcon}
          alt="nextButton"
        />
      </>
      <div className="listItems">
        {listItems.map((item) => (
          <b
            onClick={() => handleClick(item.id)}
            className={value === item.id ? "active" : ""}
            key={item.id}
          >
            {" "}
            {item.text}
          </b>
        ))}
      </div>
    </div>
  );
}
