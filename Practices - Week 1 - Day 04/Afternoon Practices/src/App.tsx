import { useState } from "react";
import "./App.css";
import ButtonComponent from "./component/ButtonComponent";

function App() {
  const [count,setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <ButtonComponent name="True" handle={() => setCount(count + 1)} children="Button" styles={{ color: "red" }} />
    </>
  );
}

export default App;
