import blackPawn from '../images/black-pawn.png';
import whitPawn from '../images/white-bishop.png';
function Pawn(props){
    const pawnImg = props.color === 'black'?blackPawn:whitPawn;
    return <img src={pawnImg} alt=''/>
}
export default Pawn;