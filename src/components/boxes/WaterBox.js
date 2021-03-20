import React from "react";

import "./WaterBox.css";
import {switchDimensions} from "./WaterBox-utils"

export default function WaterBox({size, volume}) {
  let proportions = switchDimensions({size})
  return (
    <div
      style={{ width: proportions.tamCaixa, height: proportions.tamCaixa }}
      className="WaterBoxContainer"
    >
      <div id="water-lvl" style={{ height: (volume/100)*proportions.tamAgua }}></div>
    </div>
  );
}
