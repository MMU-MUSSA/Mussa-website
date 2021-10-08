import React from "react";
import Centerleft from "./centerleft/Centerleft";
import Centerright from "./centerright/Centerright";
import "./Center.css";

function Center() {
  return (
    <div className="center">
      <Centerright />
    </div>
  );
}

export default Center;
