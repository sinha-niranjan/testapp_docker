import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is just a testing app for learning Docker . {count} </p>

        <a className="App-link" onClick={() => setCount((prev) => prev + 1)}>
          increase
        </a>
      </header>
    </div>
  );
}

export default App;
