import { useState } from "react";
import "./App.css";
import Theme from "./components/Theme";
import ThemeForm from "./components/ThemeForm";
import { themes as initialThemes } from "./db";
import useLocalStorageState from "use-local-storage-state";
import TestPage from "./components/TestPage";

function App() {
  const [currentTheme, setCurrentTheme] = useState(null);
  const [displayState, setDisplayState] = useState("themelist");
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });

  function handleAddTheme(data) {
    const newTheme = {
      id: crypto.randomUUID(),
      ...data,
    };

    setThemes([newTheme, ...themes]);
  }

  function handleUpdateTheme(updatedTheme) {
    const updatedThemes = themes.map((theme) => {
      return theme.id === updatedTheme.id ? updatedTheme : theme;
    });

    setThemes(updatedThemes);
  }

  function handleDeleteTheme(id) {
    const updatedThemes = themes.filter((theme) => theme.id !== id);
    setThemes(updatedThemes);
  }

  return (
    <>
      {displayState === "themelist" && (
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
                    onEdit={handleUpdateTheme}
                    onSelectTheme={() => {
                      setCurrentTheme(theme);
                      setDisplayState("testpage");
                    }}
                  />
                </li>
              ))}
            </ul>
          </main>
        </>
      )}
      {displayState === "testpage" && (
        <TestPage
          theme={currentTheme}
          onLeave={() => {
            setCurrentTheme(null);
            setDisplayState("themelist");
          }}
        />
      )}
    </>
  );
}

export default App;
