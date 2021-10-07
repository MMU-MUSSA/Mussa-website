import React, { Component } from "react";
import "./Events.css";
import News from "../news/News";

export class Events extends Component {
  render() {
    return (
      <div className="events">
        <div className="eventsnil">
          <p>s</p>
        </div>
        <div className="events1">
          <>
            <h className="title">EVENTS</h>
            <h className="about">Back to school event / @mussa</h>
            <h className="when">SF - sat, June 19 / 11 pm - 2 am</h>
          </>
          <div className="dots">
            <i class="fas fa-circle faselected"></i>
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
          </div>
        </div>
        <div className="events2">
          <h className="about">Pop - up 13th event / @mussa</h>
          <h className="when when-offset">SF - mon, July 3 / 6 pm - 6 am</h>
        </div>
        <div className="newsEvents">
          <News />
        </div>
      </div>
    );
  }
}

export default Events;
