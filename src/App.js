import React from 'react';
import './App.css';
// import { SSL_OP_NO_TLSv1_1 } from 'constants'; whats this for?

function importAll(r) {
  return r.keys().map(r);
}
const SQUARES = importAll(require.context('./assets/board_squares', false, /\.(png|jpe?g|svg)$/));
const PIECES = importAll(require.context('./assets/svg_no_shadow', false, /\.(png|jpe?g|svg)$/));

function App() {
  //divide chess-board into ranks and files? using css pixels to display chessboard may be keeping them from touching
  return (
    <div className="App">
      <div className="chess-board">
        {create_board()}
      </div>
    </div>
  );
}

//make this a class function
function create_board() {
  let bd = SQUARES[0];
  let bl = SQUARES[1];
  // let gd = SQUARES[2];
  // let gl = SQUARES[3];
  let board = init_board();
  let piece_position
  let alternate = [bd,bl];
  let flip = '#FFF'; //make into counter for each indivudual square
  let count = -1

  for (let file=0; file<board[0].length; file++) {
    for (let rank=0; rank<board[0].length; rank++) {
      count ++;
      let piece = get_file_piece(rank,file);

      board[file][rank]=(
      <div background={flip}>
        <img src={piece} className="chess-piece" alt={piece} key={(count)}/>
      </div>)
      flip === '#000' ? flip='#FFF' : flip='#000';
    }
    flip === '#000' ? flip='#FFF' : flip='#000';
  }
  console.log(PIECES)
  return board
}

//make this the constructor of a new class
function init_board() {
  let board_array = new Array(8);
  for (let i=0; i<8; i++) {
    board_array[i] = new Array(8);
  }
  return board_array;
}

function get_file_piece(rank, file) {
  if (file === 0) {
    switch (rank) {
      case (rank===0): {
        return PIECES[5];
      } case (rank===1):  {
        return PIECES[2];
      } case (rank===2): {
        return PIECES[0];
      } case (rank===3): {
        return PIECES[4];
      } case (rank===4): {
        return PIECES[1];
      } case (rank===5): {
        return PIECES[0];
      } case (rank===6): {
        return PIECES[2];
      } case (rank===7): {
        return PIECES[5];
      }
    }
  } else if (file === 7) {
    switch (rank) {
      case (rank===0): {
        return PIECES[11];
      } case (rank===1):  {
        return PIECES[8];
      } case (rank===2): {
        return PIECES[6];
      } case (rank===3): {
        return PIECES[10];
      } case (rank===4): {
        return PIECES[7];
      } case (rank===5): {
        return PIECES[6];
      } case (rank===6): {
        return PIECES[8];
      } case (rank===7): {
        return PIECES[11];
      }
    }
  } else if (file === 1) {
    return PIECES[3]
  } else if (file === 6) {
    return PIECES[9]
  }
}

export default App;