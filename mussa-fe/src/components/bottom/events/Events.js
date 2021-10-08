import React, { Component } from "react";
import "./Events.css";
import News from "../news/News";

export class Events extends Component {
  render() {
    return (
      <div className="events">
        <div className="eventsnil"></div>
        <div className="events1">
          <>
            <p className="title">EVENTS</p>
            <p className="about">Back to school event / @mussa</p>
            <p className="when">SF - sat, June 19 / 11 pm - 2 am</p>
          </>
          <div className="dots">
            <i className="fas fa-circle faselected"></i>
            <i className="fas fa-circle"></i>
            <i className="fas fa-circle"></i>
          </div>
        </div>
        <div className="events2">
          <p className="about">Pop - up 13th event / @mussa</p>
          <p className="when when-offset">SF - mon, July 3 / 6 pm - 6 am</p>
        </div>
        <div className="newsEvents">
          <News />
        </div>
      </div>
    );
  }
}

export default Events;
