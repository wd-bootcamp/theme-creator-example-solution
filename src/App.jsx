import { useState } from "react";
import "./App.css";
import ColorCard from "./components/ColorCard";
import Theme from "./components/Theme";
import ThemeForm from "./components/ThemeForm";
import { themes as initialThemes } from "./db";

function App() {
  const [themes, setThemes] = useState(initialThemes);

  function handleAddTheme(data) {
    const newTheme = {
      id: crypto.randomUUID(),
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

    setThemes([newTheme, ...themes]);
  }

  function handleDeleteTheme(id) {
    const updatedThemes = themes.filter((theme) => theme.id !== id);
    setThemes(updatedThemes);
  }

  return (
    <>
      <header>
        <h1>Theme Creator</h1>
      </header>
      <main className="main">
        <ThemeForm onSubmit={handleAddTheme} />
        <ul className="theme-list">
          {themes.map((theme) => (
            <li key={theme.id}>
              <Theme
                theme={theme}
                onDelete={() => handleDeleteTheme(theme.id)}
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
