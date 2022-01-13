import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../Header/Header.jsx'
import './App.css';

function App() {

    const [groceryList, setGroceryList] = useState([]);

    const getGroceries = () => {
        axios({
            method: 'GET',
            url: '/list'
        })
            .then( res => {
                console.log('Groceries received: ', res.data);

                // Set retrieved data to state variable
                setGroceryList(res.data);
            })
            .catch( err => {
                console.error('Error retrieving groceries: ', err);
            });
    }

    // Call getGroceries function using useEffect so it only runs once on component load
    useEffect( () => {
        getGroceries();
    }, []);

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
