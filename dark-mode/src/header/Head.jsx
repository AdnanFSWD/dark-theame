import React from "react";
import "../styles.css";

const Head = (props) => {
  return (
    <header className={props.dark ? "lightHeader" : "App-header"}>
      <h1>{props.dark ? "Dark Mode " : "Light Mode"}</h1>
    </header>
  );
};

export default Head;
