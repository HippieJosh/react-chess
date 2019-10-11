import React from 'react';
import './App.css';
import './board.js'

function importAll(r) {
  return r.keys().map(r);
}
// const SQUARES = importAll(require.context('./assets/board_squares', false, /\.(png|jpe?g|svg)$/));       //probs not needed

let pieces     = importAll(require.context('./assets/svg_no_shadow', false, /\.(png|jpe?g|svg)$/));
const B_BISHOP = pieces[0]
const B_KING   = pieces[1]
const B_KNIGHT = pieces[2]
const B_PAWN   = pieces[3]
const B_QUEEN  = pieces[4]
const B_ROOK   = pieces[5]
const W_BISHOP = pieces[6]
const W_KING   = pieces[7]
const W_KNIGHT = pieces[8]
const W_PAWN   = pieces[9]
const W_QUEEN  = pieces[10]
const W_ROOK   = pieces[11]


function App() {
  return (
    <div className="App">
      <div className="chess-board">
        {board = new Board()}
      </div>
    </div>
  );
}

export default App;