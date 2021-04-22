import React from "react";

export default function ImageLinkForm() {
  return (
    <div className="banner">
      <p className="f3">
        This Magic Pizza Guy Will Detect Faces While Eating Pizza, Coool Right
        Yeah..
      </p>
      <div style={{ height: "3rem" }}></div>
      <div className="back">
        <div className="centered">
          <input
            style={{ backgroundColor: "white" }}
            className="f4 pa2 w-70 center"
            type="text"
          />
          <button className="w-30 grow f4 link ph3  pa2 dib white bg-light-purple">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}
