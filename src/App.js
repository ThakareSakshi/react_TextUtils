import logo from "./logo.svg";
import "./App.css";
import { useState, useReducer } from "react";
import Header from "./Header";
import TextEditor from "./TextEditor";

function App() {
 

  return (
    <div className="App">
      <Header />
      <TextEditor/>
      
    </div>
  );
}

export default App;
