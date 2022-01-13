import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';

//importing GroceryFrom from component file
import GroceryForm from '../GroceryForm/GroceryForm'





function App() {
    const addNewGrocery = (grocery) => {
        axios({
            method: '/POST',
            url: '/list',
            data: grocery
        })
        .then((response) => {
            console.log('response is:', response);
            getGrocery();
        })
        .catch((error) => {
            console.error('Error on POST app.jsx', error);
        });
   }

    return (
        <div className="App">
            <Header />
            <main>
                <GroceryForm addNewGrocery={addNewGrocery}/>
            </main>
        </div>
    );
}

export default App;
