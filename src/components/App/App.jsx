import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../Header/Header.jsx';
import GroceryList from '../GroceryList/GroceryList';
import './App.css';

//importing GroceryFrom from component file
import GroceryForm from '../GroceryForm/GroceryForm';

//importing Clear and Reset Buttons
import ClearReset from '../ClearReset/ClearReset';

function App() {
	const [ groceryList, setGroceryList ] = useState([]);

	const getGroceries = () => {
		axios({
			method: 'GET',
			url: '/list'
		})
			.then((res) => {
				console.log('Groceries received: ', res.data);

				// Set retrieved data to state variable
				setGroceryList(res.data);
			})
			.catch((err) => {
				console.error('Error retrieving groceries: ', err);
			});
	};

	const addNewGrocery = (grocery) => {
		axios({
			method: 'POST',
			url: '/list',
			data: grocery
		})
			.then((response) => {
				console.log('response is:', response);
				getGroceries();
			})
			.catch((error) => {
				console.error('Error on POST app.jsx', error);
			});
	};

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
        })
        .catch((err) => {
            console.error('DELETE failed in ClearReset', err);
        });
    };

	// Buy function -- PUT and mark as purchased
    function buyItem() {
        console.log('in buyItem');

        //move function into app.jsx like ClearReset
    }
	// Call getGroceries function using useEffect so it only runs once on component load
	useEffect(() => {
		getGroceries();
	}, []);

	return (
		<div className="App">
			<Header />
			<main>
				<GroceryForm addNewGrocery={addNewGrocery} />
        		<h2>Shopping List</h2>
       		 	<ClearReset clear = {clear} reset = {reset}/>
        		<GroceryList groceryList={groceryList} />
			</main>
		</div>
	);
}

export default App;
