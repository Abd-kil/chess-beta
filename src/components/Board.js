import Square from './Square';
import pieces from '../pieces/pieces';
import { useEffect } from 'react';
function Board(){
    const squares = [];
    //const pieces = require('../pieces/pieces');
    const index = ['a','b','c','d','e','f','g','h'];
    for(let i = 1; i <= 8; i++){
        for(let j = 1; j <= 8; j++){
            squares.push(
            <Square 
            color={(i+j)%2===0?'white':'#850'} 
            piece={pieces.has(`${index[j-1]}${i}`)?pieces.get(`${index[j-1]}${i}`):null}
            key={`${index[i]}${j}`}/>
            );
        }
    }
    const style = {
        padding:'0',
        margin:'30px auto',
        width:'500px',
        height:'500px',
        border:'3px solid black',
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 1fr)',
        gridTemplateRows: 'repeat(8, 1fr)',
    };
    return(
        <div style={style}>
        {squares}
        </div>
    )
}
export default Board;