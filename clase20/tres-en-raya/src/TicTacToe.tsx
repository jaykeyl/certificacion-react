import {useState} from 'react';
import './TicTacToe.css'

type Mark = 'x' | 'o'; //estamos creando un nuevo tipo de dato qeu acepta solo la x o la o
type Cell = Mark | null;
type Board = Cell[];

export default function TicTacToe () {
    const intialBoard: Board = Array<Cell>(9).fill(null);

    const [board, setBoard] = useState<Board>(intialBoard); //i need to know the state of my board
    const [turn, setTurn] = useState<Mark>('x'); // i need to know the state of turn

    const markCell = (index:number):void => {
        if(board[index] != null) return;

        setBoard(
            board.map((cell, position) => {
            return position === index ? turn : cell;
        }))
        setTurn(turn === 'x' ? 'o' : 'x');
    }
    return <table>
        <tbody>
            {[0, 1, 2].map((row)=>{
                return (
                <tr key={row}>
                    {board.slice(row*3, row*3+3).map((cell, column)=>{ 
                        return <td key={column}>
                            <button onClick={() => {markCell(row*3+column);}}> {cell}</button>
                        </td>})}
                </tr>
            )})}
            
        </tbody></table>
}
