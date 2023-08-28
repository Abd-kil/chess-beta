import blackQueen from '../images/black-queen.png';
import whiteQueen from '../images/white-queen.png';
function Queen(props){
    const kingImg = props.color === 'black'?blackQueen:whiteQueen;
    return <img src={kingImg}/>
}
export default Queen;