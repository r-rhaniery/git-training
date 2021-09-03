import React, {useState} from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note (props) {

    const [isDone, setIsDone] = useState(false);

    function handleClick(event) {
        props.onDelete(props.id);
    }

    function handleLine (){
        setIsDone(!isDone);
    }

    return (
        <div className="note" >
            <div onClick={handleLine} style={{textDecoration: isDone ? "line-through" : "none"}}>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </div>
            <button onClick={handleClick}><DeleteIcon /></button>
        </div>
    );
}

export default Note;




// function handleLine (){
//     setIsDone(prevValue => {
//         return !prevValue;
//     });
// }