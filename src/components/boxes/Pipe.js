import React from "react";

export default function Pipe() {
  return (
    <>
      <div style={holeStyle}></div>
      <div style={pipeStyle}></div>
    </>
  );
}

const pipeStyle = {
  width: "500px",
  height: "44px",
  background: "linear-gradient(#c1c1c1,#3c3c3c)",
  border: "1px solid rgb(26, 25, 25)",
  borderTopLeftRadius: "30px",
  borderBottomLeftRadius: "30px",
  borderTopRightRadius: "25px",
  borderBottomRightRadius: "25px",
};
const holeStyle = {
  width: "43px",
  height: "43px",
  background:
    "rgba(0, 0, 0, 0) linear-gradient(black, rgb(49, 48, 48)) repeat scroll 0% 0%",
  borderRadius: "100%",
  position: "relative",
  left: "40px",
  borderRight: "1px solid black",
  borderLeft: "1px solid black",
};
