import { useState } from "react";
import "./ThemeForm.css";

const INITIAL_THEME = {
  name: "",
  colors: [
    { role: "primary", value: "#41447f" },
    { role: "secondary", value: "#607dcf" },
    { role: "surface", value: "#d2d7e9" },
    { role: "surface-on", value: "#1a191c" },
  ],
};

export default function ThemeForm({
  initialValues = INITIAL_THEME,
  onSubmit,
  editMode,
}) {
  function handleSubmit(event) {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.target));

    const themeData = {
      name: data.name,
      colors: [
        {
          role: "primary",
          value: data.primary,
        },
        {
          role: "secondary",
          value: data.secondary,
        },
        {
          role: "surface",
          value: data.surface,
        },
        {
          role: "surface-on",
          value: data["surface-on"],
        },
      ],
    };

    onSubmit(themeData);
    event.target.reset();
  }

  return (
    <form className="themeform" onSubmit={handleSubmit}>
      {!editMode && <h2 className="themeform__title">Add a Theme</h2>}
      <input
        type="text"
        name="name"
        defaultValue={initialValues.name}
        placeholder="name"
        required
      />
      <ul className="themeform__color-inputs">
        {initialValues.colors.map((color) => (
          <li key={color.role} className="themeform__color-input">
            <ColorInput defaultValue={color.value} name={color.role} />
          </li>
        ))}
      </ul>
      <button className="themeform__button">
        {editMode ? "Update" : "Create Theme"}
      </button>
    </form>
  );
}

function ColorInput({ defaultValue, name }) {
  const [value, setValue] = useState(defaultValue);

  return (
    <div className="colorinput">
      <input
        className="colorinput__color"
        type="color"
        name={name}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <label className="colorinput__wrapper">
        <span className="colorinput__label">{name}</span>
        <input
          className="colorinput__text"
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </label>
    </div>
  );
}
