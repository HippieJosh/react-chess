import React from 'react';

function importAllFiles(r) {
  return r.keys().map(r);
}


let piece_images = importAllFiles(require.context('./assets/svg_shadow', false, /\.(png|jpe?g|svg)$/));
const B_BISHOP_IMG = piece_images[0];
const B_KING_IMG   = piece_images[1];
const B_KNIGHT_IMG = piece_images[2];
const B_PAWN_IMG   = piece_images[3];
const B_QUEEN_IMG  = piece_images[4];
const B_ROOK_IMG   = piece_images[5];
const W_BISHOP_IMG = piece_images[6];
const W_KING_IMG   = piece_images[7];
const W_KNIGHT_IMG = piece_images[8];
const W_PAWN_IMG   = piece_images[9];
const W_QUEEN_IMG  = piece_images[10];
const W_ROOK_IMG   = piece_images[11];


export default class Piece {
  constructor(file, rank) {
    this.file = file;
    this.rank = rank;
    this.image = this.get_piece_image(file, rank);
  }

  get_piece_image(file, rank) {
    if (rank === 0) {
      switch (file) {
        case 0: {
          return B_ROOK_IMG; //return JSON of img, name, move abilities?
        } case 1:  {
          return B_KNIGHT_IMG;
        } case 2: {
          return B_BISHOP_IMG;
        } case 3: {
          return B_QUEEN_IMG;
        } case 4: {
          return B_KING_IMG;
        } case 5: {
          return B_BISHOP_IMG;
        } case 6: {
          return B_KNIGHT_IMG;
        } case 7: {
          return B_ROOK_IMG;
        }
      }
    } else if (rank === 7) {
      switch (file) {
        case 0: {
          return W_ROOK_IMG;
        } case 1:  {
          return W_KNIGHT_IMG;
        } case 2: {
          return W_BISHOP_IMG;
        } case 3: {
          return W_QUEEN_IMG;
        } case 4: {
          return W_KING_IMG;
        } case 5: {
          return W_BISHOP_IMG;
        } case 6: {
          return W_KNIGHT_IMG;
        } case 7: {
          return W_ROOK_IMG;
        }
      }
    } else if (rank === 1) {
      return B_PAWN_IMG;
    } else if (rank === 6) {
      return W_PAWN_IMG;
    }
  }
}