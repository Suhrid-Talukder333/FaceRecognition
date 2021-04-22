import React from "react";

export default function FaceRecognition({ url }) {
  return (
    <div>
      <div style={{ height: "1rem" }}></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img style={{ width: "50%", height: "50%" }} src={url} alt="" />
      </div>
    </div>
  );
}
