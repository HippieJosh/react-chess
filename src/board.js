//imports
import React from 'react';
import Piece from './piece.js';

function importAll(r) {
  return r.keys().map(r);
}


//class def
export default class Board {
  constructor() {
    this.board_array = new Array(8);
    for (let i=0; i<8; i++) {
      this.board_array[i] = new Array(8);
    }
    this.create_board()
  }
      
  create_board() {
    let valid_ranks = [0,1,6,7];
    let flip = 'square white-square';
    let count = -1;
    
    for (let rank=0; rank<this.board_array[0].length; rank++) {
      for (let file=0; file<this.board_array[0].length; file++) {
        count ++;

        if(valid_ranks.includes(rank)) {
          let piece = new Piece(file,rank);
          this.board_array[rank][file] = (
            <div className={flip} key={count}>
              <img src={piece.image} className="chess-piece" alt={piece.image}/>
            </div>
          )
        } else {
          this.board_array[rank][file] = (<div className={flip} key={count}></div>)
        }
  
        flip === 'square black-square' ? flip='square white-square' : flip='square black-square';
        }
        flip === 'square black-square' ? flip='square white-square' : flip='square black-square';
    }
  }
} 