import "./App.css";
import Exercise1 from "./Component/Exercise1";
import Exercise10 from "./Component/Exercise10";
import Exercise2 from "./Component/Exercise2";
import Exercise3 from "./Component/Exercise3";
import Exercise4 from "./Component/Exercise4";
import Exercise5 from "./Component/Exercise5";
import Exercise6 from "./Component/Exercise6";
import Exercise7 from "./Component/Exercise7";
import Exercise8 from "./Component/Exercise8";
import Exercise9 from "./Component/Exercise9";

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
