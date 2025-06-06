import React from "react";
import Button from "./Button/Button";

const TabsSection = ({ active, onChange }) => {
  return (
    <section style={{ marginBottom: "1rem" }}>
      <Button
        isActive={active === "main"}
        onClick={() => {
          onChange("main");
        }}
      >
        Главная
      </Button>
      <Button
        isActive={active === "feedback"}
        onClick={() => {
          onChange("feedback");
        }}
      >
        Обратная связь
      </Button>
      <Button
        isActive={active === "effect"}
        onClick={() => {
          onChange("effect");
        }}
      >
        Effect
      </Button>
    </section>
  );
};

export default TabsSection;
