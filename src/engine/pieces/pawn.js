import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);

        let squares = [];

        if (this.player == Player.BLACK) {
            squares.push(Square.at(currentSquare.row - 1, currentSquare.col));
            if (currentSquare.row == 6){
                squares.push(Square.at(currentSquare.row - 2, currentSquare.col));
            }
        } else {
            squares.push(Square.at(currentSquare.row + 1, currentSquare.col));
            if (currentSquare.row == 1){
                squares.push(Square.at(currentSquare.row + 2, currentSquare.col));
            }
        }
        return squares;
    }
    
}
