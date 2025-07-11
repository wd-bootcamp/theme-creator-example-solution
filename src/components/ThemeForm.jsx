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
          value: data.surfaceOn,
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
        placeholder="name"
        aria-label="theme name"
        defaultValue={initialValues.name}
        required
      />
      <div className="themeform__color-inputs">
        <input
          className="themeform__color-input"
          type="color"
          aria-label="primary"
          name="primary"
          defaultValue={initialValues.colors[0].value}
        />
        <input
          className="themeform__color-input"
          type="color"
          aria-label="secondary"
          name="secondary"
          defaultValue={initialValues.colors[1].value}
        />
        <input
          className="themeform__color-input"
          type="color"
          aria-label="surface"
          name="surface"
          defaultValue={initialValues.colors[2].value}
        />
        <input
          className="themeform__color-input"
          type="color"
          aria-label="surface-on"
          name="surfaceOn"
          defaultValue={initialValues.colors[3].value}
        />
      </div>
      <button className="themeform__button">
        {editMode ? "Update" : "Create Theme"}
      </button>
    </form>
  );
}
