import blackRock from '../images/black-rock.png';
import whiteRock from '../images/white-rock.png';
function Rock(props){
    const kingImg = props.color === 'black'?blackRock:whiteRock;
    return <img src={kingImg}/>
}
export default Rock;