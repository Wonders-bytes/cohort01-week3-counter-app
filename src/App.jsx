import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="card">
        <h1>Counter App</h1>

        <h2
          className={
            count > 0
              ? "positive"
              : count < 0
              ? "negative"
              : "zero"
          }
        >
          {count}
        </h2>

        <div className="buttons">
          <button
            onClick={() => setCount(count - 1)}
          >
            −
          </button>

          <button onClick={() => setCount(count + 1)}>
            +
          </button>

          <button
            className="reset"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>

        <p className="author">
            Made with ❤️ by <strong>Elijah (WondersHQ)</strong>
            
        </p>

      </div>
    </div>
  );
}

export default App;