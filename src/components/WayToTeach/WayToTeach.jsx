import React from "react";

import { ways } from "../../data";

const WayToTeach = () => {
  return (
    <>
      {ways.map((way, index) => (
        <li
          style={{ background: "#0a0d22", color: "#ee0a3d", fontSize: "30px" }}
          key={way.title}
        >
          <h3>{index + 1}</h3>
          <p>
            <strong>{way.title}</strong>
            <br />
            {way.description}
          </p>
        </li>
      ))}
    </>
  );
};

export default WayToTeach;
