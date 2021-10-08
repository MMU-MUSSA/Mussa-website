import React, { Component } from "react";
import "./News.css";

export class News extends Component {
  render() {
    return (
      <div className="news">
        <>
          <h className="title">NEWS</h>
          <p className="content">
            A fresh take on our Active teams / now also ranked in{" "}
            <span>Red</span>
          </p>
          <p className="content">Now we have a new place at town campus</p>
        </>
        <div className="readmore">
          <a href="#s"> Read More</a>
        </div>
      </div>
    );
  }
}

export default News;
