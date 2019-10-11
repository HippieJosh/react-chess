import React from 'react';
import './App.css';
import Board from './board.js';

function App() {
  return (
    <div className="App">
      <div className="chess-board">
        {new Board().board}
      </div>
    </div>
  );
}

export default App;