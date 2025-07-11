import { useEffect, useState } from "react";
import "./ColorCard.css";

export default function ColorCard({ color }) {
  const [name, setName] = useState("");

  useEffect(() => {
    async function fetchData() {
      const hexValue = color.value.replace("#", "");

      const response = await fetch(
        `https://www.thecolorapi.com/id?hex=${hexValue}`
      );

      const data = await response.json();
      setName(data.name.value);
    }

    fetchData();
  });

  return (
    <article className="colorcard">
      <div className="colorcard__info">
        <span className="colorcard__role">{color.role}</span>
        <span className="colorcard__name">{name}</span>
        <span className="colorcard__value">{color.value}</span>
      </div>
      <div
        className="colorcard__display"
        style={{ "--display-color": color.value }}
      ></div>
    </article>
  );
}
