import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);

        let squares = [];

        const x = currentSquare.row;
        const y = currentSquare.col;
        const xa = x + 1; 
        const xz = x - 1; 
        const ya = y + 1;
        const yz = y - 1;
        
        const xCords = [x, xa, xz];
        const yCords = [y, ya, yz];

        for (let i=0; i < yCords.length; i++){
            xCords.forEach(cord => {
                squares.push(Square.at(cord, yCords[i]));
            });
        }

        /*
        squares.push(Square.at(x, ya));
        squares.push(Square.at(x, yz));
        squares.push(Square.at(xa, y));
        squares.push(Square.at(xa, ya));
        squares.push(Square.at(xa, yz));
        squares.push(Square.at(xz, y));
        squares.push(Square.at(xz, ya));
        squares.push(Square.at(xz, yz));
        */

        let squaresRefined = squares.filter(square => square.row <= 7 && square.col <= 7 && square.row >= 0 && square.col >= 0 && !square.equals(currentSquare));

        return squaresRefined;

    }
}
