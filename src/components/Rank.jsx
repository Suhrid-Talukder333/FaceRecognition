import React from "react";

export default function Rank() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="green f3">
        <p>Your rank is..</p>
      </div>
      <div className="dark-blue f1">
        <p>#4</p>
      </div>
    </div>
  );
}
