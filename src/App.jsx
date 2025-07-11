import "./App.css";
import ColorCard from "./components/ColorCard";
import Theme from "./components/Theme";
import { themes } from "./db";

function App() {
  return (
    <>
      <header>
        <h1>Theme Creator</h1>
      </header>
      <main className="main">
        <ul className="theme-list">
          {themes.map((theme) => (
            <li key={theme.id}>
              <Theme theme={theme} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
