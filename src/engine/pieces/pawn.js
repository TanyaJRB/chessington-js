import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);

        let square;
        if (this.player == Player.BLACK) {
            square = Square.at(currentSquare.row - 1, currentSquare.col);
        } else {
            square = Square.at(currentSquare.row + 1, currentSquare.col);
        }
        return [ square ];
    }
    
}
