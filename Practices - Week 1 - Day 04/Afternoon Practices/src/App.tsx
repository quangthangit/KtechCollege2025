import "./App.css";
import RenderList01 from "./component/RenderList01";
import RenderList04 from "./component/RenderList04";
import State01 from "./component/State01";
import State02 from "./component/State02";
import State03 from "./component/State03";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <RenderList01 />
      <hr />
      <RenderList04 />
      <hr />
      <State01 />
      <hr />
      <State02 />
      <hr />
      <State03 />
    </div>
  );
}

export default App;
