//import axios 
import axios from 'axios';

function ClearReset({getGroceries}){

	const reset = () => {
        console.log('reset has been clicked');

        axios({
            method: 'PUT',
            url: '/list',
            data: {
                purchased: false
            }

        })
        .then(() => {
            console.log('PUT success');
            //calling get again to get the new data
            getGroceries();
        })
        .catch((err) => {
            console.error('Error on PUT in ClearReset', err);
        });
    };

    const clear = () => {
        console.log('clear has been clicked');

        axios({
            method: 'DELETE',
            url: '/list'
        })
        .then((response) => {
            console.log('DELETE success');
            //calling get again to update the DOM
            getGroceries();
        })
        .catch((err) => {
            console.error('DELETE failed in ClearReset', err);
        });
    };
    
    return(
        <>
        <button className = "reset" onClick = {reset}>Reset</button>
        <button className = "clear" onClick = {clear}>Clear</button>
        </>
    );
}

export default ClearReset;