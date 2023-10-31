import React from "react";
import "../CSS/App.css";
import MyButton from "../components/button/MyButton";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MyButton>
        <Link to={"/client"}>Клиент</Link>
      </MyButton>
      <MyButton>
        {" "}
        <Link to={"/manager"}>Менеджер</Link>
      </MyButton>
    </div>
  );
}

export default App;
