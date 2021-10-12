import React, { useContext, useState } from "react";
import "./Events.css";
import News from "../news/News";
import { GlobalContext } from "../../../context/GlobalState";

export default function Events() {
  const { listEvents1 } = useContext(GlobalContext);
  const { listEvents2 } = useContext(GlobalContext);
  const { dotIcons } = useContext(GlobalContext);
  const [clicked, setClicked] = useState(0);

  const handleClick = (id) => {
    setClicked(id);
  };

  return (
    <div className="events">
      <div className="eventsnil"></div>
      <div className="events1">
        <>
          {listEvents1.map((item, index) => {
            return (
              <p
                className={clicked === item.id ? item.className : "none"}
                key={index}
              >
                {" "}
                {item.text}
              </p>
            );
          })}
        </>
        <div className="dots">
          {dotIcons.map((item, index) => {
            return (
              <i
                onClick={() => handleClick(item.id)}
                className={
                  clicked === item.id ? item.classNameSelected : item.className
                }
                key={index}
              ></i>
            );
          })}
        </div>
      </div>
      <div className="events2">
        <>
          {listEvents2.map((item, index) => {
            return (
              <p className={item.className} key={index}>
                {" "}
                {item.text}{" "}
              </p>
            );
          })}
        </>
      </div>
      <div className="newsEvents">
        <News />
      </div>
    </div>
  );
}
