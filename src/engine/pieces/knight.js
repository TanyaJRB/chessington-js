import Piece from './piece';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);

        let squares = [];

        const x = currentSquare.row;
        const y = currentSquare.col;

        const xa = x + 2; 
        const xb = x - 2; 
        const xc = x + 1;
        const xd = x - 1;
        const ya = y + 2;
        const yb = y - 2;
        const yc = y + 1;
        const yd = y - 1;

        //Upwards-focus
        squares.push(Square.at(xa, yc));
        squares.push(Square.at(xa, yd));
        squares.push(Square.at(xb, yc));
        squares.push(Square.at(xb, yd));
        //Lateral-focus
        squares.push(Square.at(xc, ya));
        squares.push(Square.at(xd, ya));
        squares.push(Square.at(xc, yb));
        squares.push(Square.at(xd, yb));
        
        let squaresRefined = squares.filter(square => square.row <= 7 && square.col <= 7 && square.row >= 0 && square.col >= 0);

        return squaresRefined;
    }
}
