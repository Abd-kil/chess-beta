import blackKing from '../images/black-king.png';
import whiteKing from '../images/white-king.png';
function King(props){
    const kingImg = props.color === 'black'?blackKing:whiteKing;
    return <img src={kingImg}/>
}
export default King;