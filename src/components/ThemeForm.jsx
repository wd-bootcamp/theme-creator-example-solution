import "./ThemeForm.css";

const INITIAL_THEME = {
  name: "",
  primary: "#41447f",
  secondary: "#607dcf",
  surface: "#d2d7e9",
  "surface-on": "#1a191c",
};

export default function ThemeForm({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.target));

    onSubmit(data);
    event.target.reset();
  }

  return (
    <form className="themeform" onSubmit={handleSubmit}>
      <h2 className="themeform__title">Add a Theme</h2>
      <input
        type="text"
        name="name"
        placeholder="name"
        aria-label="theme name"
        defaultValue={INITIAL_THEME.name}
        required
      />
      <div className="themeform__color-inputs">
        <input
          className="themeform__color-input"
          type="color"
          aria-label="primary"
          name="primary"
          defaultValue={INITIAL_THEME.primary}
        />
        <input
          className="themeform__color-input"
          type="color"
          aria-label="secondary"
          name="secondary"
          defaultValue={INITIAL_THEME.secondary}
        />
        <input
          className="themeform__color-input"
          type="color"
          aria-label="surface"
          name="surface"
          defaultValue={INITIAL_THEME.surface}
        />
        <input
          className="themeform__color-input"
          type="color"
          aria-label="surface-on"
          name="surfaceOn"
          defaultValue={INITIAL_THEME["surface-on"]}
        />
      </div>
      <button className="themeform__button">Create Theme</button>
    </form>
  );
}
