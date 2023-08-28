import blackKnight from '../images/black-knight.png';
import whiteKnight from '../images/white-knight.png';
function Knight(props){
    const knightImg = props.color === 'black'?blackKnight:whiteKnight;
    return <img src={knightImg}/>
}
export default Knight;