import React from "react";
import Tilt from "react-parallax-tilt";
import logo from "../images/logo.png";

export default function Logo() {
  return (
    <div className="ma4 mt0 ">
      <Tilt className="w4" tiltReverse={true}>
        <div
          style={{
            height: "auto",
            width: "auto",
            boxShadow: "1px 1px 1px 1px grey",
          }}
        >
          <img src={logo} alt="logo"></img>
        </div>
      </Tilt>
    </div>
  );
}
