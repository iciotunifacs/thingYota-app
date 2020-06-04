import React from "react";

import "./WaterBox.css";

export default function WaterBox(proportions,volume) {
  return (
    <div style={{width:proportions.tamCaixa, height:proportions.tamCaixa}} className="WaterBoxContainer">
        <div style={{top: proportions.topBase + (volume*3)+'px'}} className="topHeight">
        <div id="water-lvl" style={{height: proportions.tamAgua}}></div>
        </div>
    </div>
  );
}
