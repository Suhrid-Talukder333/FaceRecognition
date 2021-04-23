import React from "react";

export default function ImageLinkForm({ onInputChange, onSubmit }) {
  return (
    <div className="banner">
      <p className="f3">
        This Magic Pizza Guy Will Detect Faces While Eating Pizza, Coool Right
        Yeah..
      </p>
      <h4>Has to be jpeg,jpg,png</h4>
      <div style={{ height: "3rem" }}></div>
      <div className="back">
        <div className="centered">
          <input
            style={{ backgroundColor: "white" }}
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3  pa2 dib white bg-light-purple"
            onClick={onSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}
