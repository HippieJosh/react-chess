import React from 'react';
import './App.css';
// import { SSL_OP_NO_TLSv1_1 } from 'constants'; whats this for?

function importAll(r) {
  return r.keys().map(r);
}
// const SQUARES = importAll(require.context('./assets/board_squares', false, /\.(png|jpe?g|svg)$/));

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
        {create_board()}
      </div>
    </div>
  );
}

//make this the constructor of a new class
function init_board() {
  let board_array = new Array(8);
  for (let i=0; i<8; i++) {
    board_array[i] = new Array(8);
  }
  return board_array;
}

//make this a class function
function create_board() {
  // const brown_dark  = SQUARES[0];
  // const brown_light = SQUARES[1];
  // const gray_dark   = SQUARES[2];
  // const gray_light  = SQUARES[3];
  // const alternate = [bd,bl];

  let board = init_board();
  // let piece_position
  let flip = 'square white-square';
  let count = -1

  for (let file=0; file<board[0].length; file++) {
    for (let rank=0; rank<board[0].length; rank++) {
      count ++;
      let piece = get_piece(rank,file);

      board[file][rank]=(
      <div class={flip}>
        <img src={piece} className="chess-piece" alt={piece} key={(count)}/>
      </div>)
      flip === 'square black-square' ? flip='square white-square' : flip='square black-square';
    }
    flip === 'square black-square' ? flip='square white-square' : flip='square black-square';
  }
  return board
}

function get_piece(file, rank) {
  if (rank === 0) {
    switch (file) {
      case (file===0): {
        return B_ROOK;
      } case (file===1):  {
        return B_KNIGHT;
      } case (file===2): {
        return B_BISHOP;
      } case (file===3): {
        return B_QUEEN;
      } case (file===4): {
        return B_KING;
      } case (file===5): {
        return B_BISHOP;
      } case (file===6): {
        return B_KNIGHT;
      } case (file===7): {
        return B_ROOK;
      }
    }
  } else if (rank === 7) {
    switch (file) {
      case (file===0): {
        return W_ROOK;
      } case (file===1):  {
        return W_KNIGHT;
      } case (file===2): {
        return W_BISHOP;
      } case (file===3): {
        return W_QUEEN;
      } case (file===4): {
        return W_KING;
      } case (file===5): {
        return W_BISHOP;
      } case (file===6): {
        return W_KNIGHT;
      } case (file===7): {
        return W_ROOK;
      }
    }
  } else if (rank === 1) {
    return B_PAWN
  } else if (rank === 6) {
    return W_PAWN
  }
}

export default App;