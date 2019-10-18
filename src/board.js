import React from 'react';
import Piece from './Piece.js';

function importAll(r) {
  return r.keys().map(r);
}


export default class Board {
  constructor() {
    this.board_array = new Array(8);
    for (let i=0; i<8; i++) {
      this.board_array[i] = new Array(8);
    }
    this.create_board();
  }

  //need to create piece class and add this as function there
  select(key) {
    if (document.getElementsByClassName('selected-square')) {
      for (let sq of document.getElementsByClassName('selected-square')) {
        sq.classList.remove('selected-square');
      }
    }
    let selected_square = document.getElementById(key);
    selected_square.classList.add('selected-square')
  }
  
  //now we have to figure out the cheapest and easiest way to just write PGN commands that influence the board, which are narrowed down by the possible moves of each piece
  create_board() {
    let starting_ranks = [0,1,6,7];
    let flip = 'square white-square';
    let count = -1;
    
    for (let rank=0; rank<this.board_array[0].length; rank++) {
      for (let file=0; file<this.board_array[0].length; file++) {
        count ++;

        if(starting_ranks.includes(rank)) {
          let piece = new Piece(file,rank);
          let key = count.toString();

          this.board_array[rank][file] = (
            <div className={flip} id={key} key={key}> {/*make piece notation name the key, i.e. br for black rook*/}
              <img onClick={() => {piece.select(key)}}  src={piece.image} className='chess-piece'/>
            </div>
          );
        } else {
          this.board_array[rank][file] = (<div className={flip} key={count}></div>);
        }
  
        flip === 'square black-square' ? flip='square white-square' : flip='square black-square';
        }
        flip === 'square black-square' ? flip='square white-square' : flip='square black-square';
    }
  }
} 