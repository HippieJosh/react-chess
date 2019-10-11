import React from 'react';
function importAll(r) {
  return r.keys().map(r);
}

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

export default class Board {
  constructor() {
    this.board_array = new Array(8);
    for (let i=0; i<8; i++) {
      this.board_array[i] = new Array(8);
    }
    this.create_board()
  }

  get board() {
    return this.board_array;
  }
      
  create_board() {
    let flip = 'square white-square';
    let count = -1
    
    for (let file=0; file<this.board_array[0].length; file++) {
      for (let rank=0; rank<this.board_array[0].length; rank++) {
      count ++;
      let piece = this.get_piece(rank,file);
  
      this.board_array[file][rank]=(
        <div class={flip}>
          <img src={piece} className="chess-piece" alt={piece} key={(count)}/>
        </div>
      )
      flip === 'square black-square' ? flip='square white-square' : flip='square black-square';
      }
      flip === 'square black-square' ? flip='square white-square' : flip='square black-square';
    }
  }
      
  get_piece(file, rank) {
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
}