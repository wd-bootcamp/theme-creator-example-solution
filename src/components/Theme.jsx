import ColorCard from "./ColorCard";
import { ChevronDown, ChevronUp, Edit, Trash } from "lucide-react";
import "./Theme.css";
import { useState } from "react";
import ThemeForm from "./ThemeForm";

export default function Theme({ theme, onDelete, onEdit }) {
  const [displayState, setDisplayState] = useState("preview");

  function toggleDetailView() {
    if (displayState === "preview") {
      setDisplayState("details");
    } else {
      setDisplayState("preview");
    }
  }

  function showEditForm() {
    setDisplayState("edit");
  }

  function handleEdit(data) {
    onEdit({ ...data, id: theme.id });
    setDisplayState("details");
  }

  return (
    <article className="theme">
      <button className="theme__titlebar" onClick={toggleDetailView}>
        <h2 className="theme__title">{theme.name}</h2>
        {displayState === "preview" ? <ChevronUp /> : <ChevronDown />}
      </button>

      {displayState === "preview" && <ThemePreview theme={theme} />}

      {displayState === "details" && (
        <ThemeDetails theme={theme} onDelete={onDelete} onEdit={showEditForm} />
      )}

      {displayState === "edit" && (
        <ThemeForm initialValues={theme} onSubmit={handleEdit} editMode />
      )}
    </article>
  );
}

function ThemePreview({ theme }) {
  return (
    <ul className="theme__color-preview-list">
      {theme.colors.map((color) => (
        <li
          className="theme__color-preview-item"
          key={color.role}
          style={{ "--bg-color": color.value }}
        ></li>
      ))}
    </ul>
  );
}

function ThemeDetails({ theme, onDelete, onEdit }) {
  return (
    <>
      <div className="theme__actions">
        <button className="theme__button" onClick={onEdit}>
          <Edit size="1rem" />
          Edit
        </button>
        <button
          className="theme__button theme__button--danger"
          onClick={onDelete}
        >
          <Trash size="1rem" />
          Delete
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
  );
}
