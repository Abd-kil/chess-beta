import Square from './Square';
function Board(){
    const squares = [];
    for(let i = 1; i <= 8; i++){
        const row = [];
        for(let j = 1; j <= 8; j++){
            row.push(<Square color={(i+j)%2===0?'white':'black'} piece={null} key={`${i}-${j}`}/>)
        }
        squares.push(row);
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