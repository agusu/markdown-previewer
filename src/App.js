import React, { useState } from 'react';
import './App.css';
import Editor from './Editor.js';
import Preview from './Preview.js';

function App() {
  const [rawInput, setInput] = useState("");

  return (
    <div className="App row" id="wrapper">
      <div className="col editor">
        Editor<br/>
      <Editor setInput={setInput}/>
      </div>
      <div className="col">
        Preview
      <Preview rawInput={rawInput}/>
      </div>
    </div>
  );
}

export default App;
