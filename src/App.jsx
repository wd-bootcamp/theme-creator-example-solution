import "./App.css";
import Theme from "./components/Theme";
import ThemeForm from "./components/ThemeForm";
import { themes as initialThemes } from "./db";
import useLocalStorageState from "use-local-storage-state";

function App() {
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
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
