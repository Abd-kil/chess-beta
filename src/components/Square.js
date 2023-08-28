import Pawn from '../pieces/Pawn';
import Rock from '../pieces/Rock';
import Knight from '../pieces/Knight';
import Bishop from '../pieces/Bishop';
import Queen from '../pieces/Queen';
import King from '../pieces/King';
function Square(props){
    const style = {
        background:props.color,
        display:'inline-block',
    }
    let pieceComponent = null;
    if(props.piece){
        switch(props.piece.piece){
            case 'pawn':
                pieceComponent = <Pawn color={props.piece.color}/>
                break;
            case 'rock':
                pieceComponent = <Rock color={props.piece.color}/>
                break;
            case 'knight':
                pieceComponent = <Knight color={props.piece.color}/>
                break;
            case 'bishop':
                pieceComponent = <Bishop color={props.piece.color} />;
                break;
            case 'queen':
                pieceComponent = <Queen color={props.piece.color} />;
                break;
            case 'king':
                pieceComponent = <King color={props.piece.color} />;
                break;
            default:
                break;
        }
    }
    return(
        <div style={style}>
            {pieceComponent}
        </div>
    )
}
export default Square;