import React from "react";

export default function FaceRecognition({ url, box }) {

  return (
    <div>
      <div style={{ height: "1rem" }}></div>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "500px",
          height: "auto",
          margin: "auto"
        }}
      >
        <img
          id="inputImage"
          style={{ width: "auto", height: "auto" }}
          src={url}
          alt=""
        />
        {box.map((item) => (
          <div
            className="boundingBox"
            style={{
              top: item.top,
              bottom: item.down,
              left: item.left,
              right: item.right,
            }}
          ></div>
        ))}
      </div>

    </div>
  );
}
