import { tsConstructorType } from "@babel/types";

class Board {
  constructor() {
    this.board_array = new Array(8);
    for (let i=0; i<8; i++) {
      this.board_array[i] = new Array(8);
    }
    create_board()
  }
      
  create_board() {
    let flip = 'square white-square';
    let count = -1
    
    for (let file=0; file<this.board[0].length; file++) {
      for (let rank=0; rank<this.board[0].length; rank++) {
      count ++;
      let piece = _get_piece(rank,file);
  
      this.board[file][rank]=(
        <div class={flip}>
          <img src={piece} className="chess-piece" alt={piece} key={(count)}/>
        </div>
      )
      flip === 'square black-square' ? flip='square white-square' : flip='square black-square';
      }
      flip === 'square black-square' ? flip='square white-square' : flip='square black-square';
    }
  }
      
  _get_piece(file, rank) {
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