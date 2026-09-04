import { useState } from 'react';
const intialBoard = Array(9).fill(null);
const [board, setBoard] = useState(intialBoard); //i need to know the state of my board
const [turn, setTurn] = useState('x'); // i need to know the state of turn
const markCell = (index) => {
    if (board[index] != null)
        return;
    setBoard(board.map((cell, position) => {
        return position === index ? turn : cell;
    }));
    setTurn(turn === 'x' ? 'o' : 'x');
};
