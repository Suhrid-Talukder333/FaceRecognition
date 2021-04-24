import React from "react";

export default function Rank({ name, points }) {
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
        <p>{name} rank is..</p>
      </div>
      <div className="dark-blue f1">
        <p>{points}</p>
      </div>
    </div>
  );
}
