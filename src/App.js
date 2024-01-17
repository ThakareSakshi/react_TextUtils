import logo from "./logo.svg";
import "./App.css";
import { useState, useReducer } from "react";
import Header from "./Header";

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ONCHANGE":
        return action.text;
      case "UPPERCASE":
        return state.toUpperCase();
      case "LOWERCASE":
        return state.toLowerCase();
      case "COPY_TO_CLIPBOARD":
        break;
      case "CLEAR_TEXT":
        return "";
      case "REMOVE_SPACE":
        return "";
    }
  };

  const [state, dispatch] = useReducer(reducer, "");

  return (
    <div className="App">
      <Header />
      <h1>TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h1>

      <textarea
        rows={20}
        value={state}
        onChange={(e) => {
          dispatch({ type: "ONCHANGE", text: e.target.value });
        }}
      ></textarea>

      <div>
        <button
          onClick={() => {
            dispatch({ type: "UPPERCASE" });
          }}
        >
          uppercase
        </button>
        <button
          onClick={() => {
            dispatch({ type: "LOWERCASE" });
          }}
        >
          lowercase
        </button>
        <button
          onClick={() => {
            dispatch({ type: "CLEAR_TEXT" });
          }}
        >
          clear text
        </button>
        <button>copy to clipboard</button>
      </div>
       <h1>Summery Of Your Text</h1>
      <span>character count: {state.length}</span>
      <span>word count: {state.split(" ").length - 1}</span>
    </div>
  );
}

export default App;
