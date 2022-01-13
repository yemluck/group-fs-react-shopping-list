import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../Header/Header.jsx';
import GroceryList from '../GroceryList/GroceryList';
import './App.css';

//importing GroceryFrom from component file
import GroceryForm from '../GroceryForm/GroceryForm';

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
	// Call getGroceries function using useEffect so it only runs once on component load
	useEffect(() => {
		getGroceries();
	}, []);

	return (
		<div className="App">
			<Header />
			<main>
				<GroceryForm addNewGrocery={addNewGrocery} />
                <GroceryList groceryList={groceryList} />
			</main>
		</div>
	);
}

export default App;
