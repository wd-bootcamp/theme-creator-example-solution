import ColorCard from "./ColorCard";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./Theme.css";
import { useState } from "react";

export default function Theme({ theme }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="theme">
      <button
        className="theme__titlebar"
        onClick={() => setExpanded(!expanded)}
      >
        <h2 className="theme__title">{theme.name}</h2>
        {expanded ? <ChevronUp /> : <ChevronDown />}
      </button>

      {expanded ? (
        <ul>
          {theme.colors.map((color) => (
            <li key={color.id}>
              <ColorCard color={color} />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="theme__color-preview-list">
          {theme.colors.map((color) => (
            <li
              className="theme__color-preview-item"
              key={color.id}
              style={{ "--bg-color": color.value }}
            ></li>
          ))}
        </ul>
      )}
    </article>
  );
}
