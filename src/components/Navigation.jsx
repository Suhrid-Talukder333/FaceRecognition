import React from "react";

export default function Navigation({ logUpdate }) {
  return (
    <nav style={{ display: "flex", justifyContent: "center" }}>
      <p
        className="f3 link dim black  underline pa3 pointer"
        onClick={() => logUpdate("unsigned")}
      >
        Sign in
      </p>
      <p
        className="f3 link dim black  underline pa3 pointer"
        onClick={() => logUpdate("register")}
      >
        Register
      </p>
    </nav>
  );
}
