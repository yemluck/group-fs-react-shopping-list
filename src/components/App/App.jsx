import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';

//importing GroceryFrom from component file
import GroceryForm from '../GroceryForm/GroceryForm'

function App() {
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
