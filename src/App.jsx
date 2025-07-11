import "./App.css";
import ColorCard from "./components/ColorCard";
import { themes } from "./db";

function App() {
  const theme = themes[0];
  return (
    <>
      <header>
        <h1>Theme Creator</h1>
      </header>
      <main className="main">
        <article>
          <h2>{theme.name}</h2>
          <ul>
            {theme.colors.map((color) => (
              <li key={color.id}>
                <ColorCard color={color} />
              </li>
            ))}
          </ul>
        </article>
      </main>
    </>
  );
}

export default App;
