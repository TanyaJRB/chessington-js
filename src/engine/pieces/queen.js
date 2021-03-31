import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);

        let squares = [];

        for (let i=0; i<8; i++){
            if (currentSquare.row + i <= 7 && currentSquare.col + i <= 7){
                squares.push(Square.at(currentSquare.row + i, currentSquare.col + i));
            }
            if (currentSquare.row - i >= 0 && currentSquare.col - i >= 0){
                squares.push(Square.at(currentSquare.row - i, currentSquare.col - i));
            }
            if (currentSquare.row + i <= 7 && currentSquare.col - i >= 0){
                squares.push(Square.at(currentSquare.row + i, currentSquare.col - i));
            }
            if (currentSquare.row - i >= 0 && currentSquare.col + i <= 7){
                squares.push(Square.at(currentSquare.row - i, currentSquare.col + i));
            }
        }

        let squaresRefined = squares.filter(square => !square.equals(currentSquare));

        for (let i=0; i<8; i++){
            if (i != currentSquare.col){
                squaresRefined.push(Square.at(currentSquare.row, i))
            }
            if (i != currentSquare.row){
                squaresRefined.push(Square.at(i, currentSquare.col))
            }
        }

        return squaresRefined;
    }
}
