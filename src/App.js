import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDark(true);
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  function calSum() {
    try {
      setValue(String(eval(value)));
    } catch {
      setValue("Error");
    }
  }

  return (
    <div className={`container ${dark ? "dark" : ""}`}>
      <div className="calculator">

       
        <div className="themeBtn">
          <button onClick={() => setDark(!dark)}>
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

        <form>
          <div className="inputBox">
            <input type="text" value={value} readOnly />
          </div>

          <div>
            <input type="button" value="AC" className="operator"
              onClick={() => setValue("")} />

            <input type="button" value="DE" className="operator"
              onClick={() => setValue((prev) => prev.slice(0, -1))} />

            <input type="button" value="." className="operator"
              onClick={(e) => setValue(value + e.target.value)} />

            <input type="button" value="/" className="operator"
              onClick={(e) => setValue(value + e.target.value)} />
          </div>

          <div>
            <input type="button" value="7" className="num"
              onClick={(e) => setValue(value + e.target.value)} />

            <input type="button" value="8" className="num"
              onClick={(e) => setValue(value + e.target.value)} />

            <input type="button" value="9" className="num"
              onClick={(e) => setValue(value + e.target.value)} />

            <input type="button" value="*" className="operator"
              onClick={(e) => setValue(value + e.target.value)} />
          </div>

          <div>
            <input type="button" value="4" className="num"
              onClick={(e) => setValue(value + e.target.value)} />

            <input type="button" value="5" className="num"
              onClick={(e) => setValue(value + e.target.value)} />

            <input type="button" value="6" className="num"
              onClick={(e) => setValue(value + e.target.value)} />

            <input type="button" value="-" className="operator"
              onClick={(e) => setValue(value + e.target.value)} />
          </div>

          <div>
            <input type="button" value="1" className="num"
              onClick={(e) => setValue(value + e.target.value)} />

            <input type="button" value="2" className="num"
              onClick={(e) => setValue(value + e.target.value)} />

            <input type="button" value="3" className="num"
              onClick={(e) => setValue(value + e.target.value)} />

            <input type="button" value="+" className="operator"
              onClick={(e) => setValue(value + e.target.value)} />
          </div>

          <div>
            <input type="button" value="00" className="num"
              onClick={(e) => setValue(value + e.target.value)} />

            <input type="button" value="0" className="num"
              onClick={(e) => setValue(value + e.target.value)} />

            <input type="button" value="=" className="equal"
              onClick={calSum} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
