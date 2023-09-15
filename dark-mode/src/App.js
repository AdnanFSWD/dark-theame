import "./styles.css";
import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import Head from "./header/Head";
import Main from "./main/Main";

function App() {
  const [dark, setDark] = useState(false);

  const darkModeSwitch = () => {
    setDark(true);
  };
  const lightModeSwitch = () => {
    setDark(false);
  };

  return (
    <div className={dark ? "darkApp" : "App"}>
      <Head dark={dark} />
      <Main dark={dark} dMode={darkModeSwitch} pMode={lightModeSwitch} />
    </div>
  );
}

export default App;
