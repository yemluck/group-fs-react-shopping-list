//importing useState from react
import {useState} from 'react';

import './GroceryForm.css';

function GroceryForm({addNewGrocery}){

    const [ newGrocery, setNewGrocery] = useState('');
    const [ newQuantity, setNewQuantity] = useState('');
    const [ newUnit, setNewUnit] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        let newItem = {
            name: newGrocery,
            quantity: newQuantity,
            unit: newUnit
        }

        addNewGrocery(newItem);

        setNewGrocery('');
        setNewQuantity('');
        setNewUnit('');
    }
    return(
        <form onSubmit = {handleSubmit}>

            <label className='item'>Item:</label>
            <input 
            className='inputItem'
            onChange = { (event) => setNewGrocery(event.target.value)}
            value = {newGrocery}
            placeholder = 'Item'
            />
            <br></br>
            <label className='quantity'>Quantity:</label>
            <input
            className='inputQuantity'
            onChange = { (event) => setNewQuantity(event.target.value)}
            value = {newQuantity}
            placeholder = 'Quantity'
            />
            <label className='unit'>Units:</label>
            <input 
            className='inputUnit'
            onChange = { (event) => setNewUnit(event.target.value)}
            value = {newUnit}
            placeholder = 'Units'
            />
            <br></br>
            <button className='submit' type = "submit">Save</button>
        </form>
    )
}

export default GroceryForm;