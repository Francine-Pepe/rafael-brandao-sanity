import React from "react";
import GridLayout from "./GridLayout";
import { GridLinkImages } from "../../data";

function Biografia() {
  return (
    <div className="biografia-container container">
      <GridLayout data={GridLinkImages} />
    </div>
  );
}

export default Biografia;
