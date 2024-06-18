import { useState } from "react";
import reactLogo from "./assets/react.svg";
import SideBar from "../components/SideBar/SideBar";
import Main from "../components/Main/Main";
import "./app.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <SideBar />
      <Main />
    </div>
  );
}

export default App;
