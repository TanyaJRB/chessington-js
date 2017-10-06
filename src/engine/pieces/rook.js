import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);

        let squares = [];

        for (let i=0; i<8; i++){
            if (i != currentSquare.col){
                squares.push(Square.at(currentSquare.row, i))
            }
            if (i != currentSquare.row){
                squares.push(Square.at(i, currentSquare.col))
            }
        }
        return squares;
    }
}
