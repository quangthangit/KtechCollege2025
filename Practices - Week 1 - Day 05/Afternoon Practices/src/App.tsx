import "./App.css";
import Exercise1 from "./components/Exercise1";
import Exercise10 from "./components/Exercise10";
import Exercise2 from "./components/Exercise2";
import Exercise3 from "./components/Exercise3";
import Exercise4 from "./components/Exercise4";
import Exercise5 from "./components/Exercise5";
import Exercise6 from "./components/Exercise6";
import Exercise7 from "./components/Exercise7";
import Exercise8 from "./components/Exercise8";
import Exercise9 from "./components/Exercise9";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Exercise1 />
      <Exercise2 />
      <Exercise3 />
      <Exercise4 />
      <Exercise5 />
      <Exercise6 />
      <Exercise7 />
      <Exercise8 />
      <Exercise9 />
      <Exercise10 />
    </div>
  );
}

export default App;
