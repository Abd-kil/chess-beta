function Square(props){
    const style = {
        background:props.color,
        display:'inline-block',
    }
    return(
        <div style={style}>
            {props.piece}
        </div>
    )
}
export default Square;