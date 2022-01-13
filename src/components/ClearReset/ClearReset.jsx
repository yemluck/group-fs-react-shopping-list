//import axios 
import axios from 'axios';

function ClearReset({clear, reset}){

    return(
        <>
        <button className = "reset" onClick = {reset}>Reset</button>
        <button className = "clear" onClick = {clear}>Clear</button>
        </>
    );
}

export default ClearReset;