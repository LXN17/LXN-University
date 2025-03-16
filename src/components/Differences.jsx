import { React, useState } from "react";
import Button from "./Button/Button";
import { differences } from "../data";

const Differences = () => {
  const [contentType, setContentType] = useState("way");

  function handleClick(type) {
    setContentType(type);
  }

  return (
    <section>
      <h2>Отличие от других</h2>
      <Button
        isActive={contentType === "way"}
        onClick={() => handleClick("way")}
      >
        Подход
      </Button>
      <Button
        isActive={contentType === "easy"}
        onClick={() => handleClick("easy")}
      >
        Доступность
      </Button>
      <Button
        isActive={contentType === "program"}
        onClick={() => handleClick("program")}
      >
        Концентрация
      </Button>
      <p>{differences[contentType]}</p>
    </section>
  );
};

export default Differences;
