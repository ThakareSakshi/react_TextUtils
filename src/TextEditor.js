import React from "react";
import { useState, useReducer } from "react";

const TextEditor = () => {
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
        return state.trim();
    }
  };

  const CopyText=(text)=>{
    console.log('text', text)
  var textField = document.createElement('textarea')
  textField.innerText = text
  document.body.appendChild(textField)
  textField.select()
  document.execCommand('copy')
  textField.remove()
  }

  const [state, dispatch] = useReducer(reducer, "");
  return (
    <div className="App">
      <h1>TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h1>
      <h3>Enter your text here:</h3>
      <textarea
        rows={20}
        value={state}
        onChange={(e) => {
          dispatch({ type: "ONCHANGE", text: e.target.value });
        }}
      ></textarea>

      <div>
        <button
          style={{ backgroundColor: "rgb(64,152,254)" }}
          onClick={() => {
            dispatch({ type: "UPPERCASE" });
          }}
        >
          uppercase
        </button>
        <button
          style={{ backgroundColor: "rgb(172,100,139)" }}
          onClick={() => {
            dispatch({ type: "LOWERCASE" });
          }}
        >
          lowercase
        </button>
        <button
          style={{ backgroundColor: "rgb(100,172,139)" }}
          onClick={() => {
            dispatch({ type: "CLEAR_TEXT" });
          }}
        >
          clear text
        </button>
        <button onClick={()=>{CopyText(state)}}>copy to clipboard</button>
        <button
          style={{ backgroundColor: "rgb(100,172,139)" }}
          onClick={() => {
            dispatch({ type: "REMOVE_SPACE" });
          }}
        >
          remove space
        </button>
      </div>
      <h1>Summery Of Your Text</h1>
      <span>character count: {state.length}</span>
      <span>word count: {state.split(" ").length - 1}</span>

      <h2>Preview Document</h2>
      <textarea value={state} readOnly="readOnly"></textarea>
    </div>
  );
};

export default TextEditor;
