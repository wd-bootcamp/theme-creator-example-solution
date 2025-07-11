import ColorCard from "./ColorCard";
import { ChevronDown, ChevronUp, Trash } from "lucide-react";
import "./Theme.css";
import { useState } from "react";

export default function Theme({ theme, onDelete }) {
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
        <>
          <div className="theme__actions">
            <button className="theme__button" onClick={onDelete}>
              <Trash />
              Delete Theme
            </button>
          </div>
          <ul>
            {theme.colors.map((color) => (
              <li key={color.role}>
                <ColorCard color={color} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <ul className="theme__color-preview-list">
          {theme.colors.map((color) => (
            <li
              className="theme__color-preview-item"
              key={color.role}
              style={{ "--bg-color": color.value }}
            ></li>
          ))}
        </ul>
      )}
    </article>
  );
}
