import blackBishop from '../images/black-bishop.png';
import whitBishop from '../images/white-bishop.png';
function Bishop(props){
    const bishopImg = props.color === 'black'? blackBishop:whitBishop;
    return <img src={bishopImg}/>
}
export default Bishop;