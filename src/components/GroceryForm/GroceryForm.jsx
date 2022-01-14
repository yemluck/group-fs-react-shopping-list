//importing useState from react
import {useState} from 'react';

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

            <label>Item:</label>
            <input 
            onChange = { (event) => setNewGrocery(event.target.value)}
            value = {newGrocery}
            placeholder = 'Item'
            type = "text"
            required
            />
            <br></br>
            <label>Quantity:</label>
            <input
            onChange = { (event) => setNewQuantity(event.target.value)}
            value = {newQuantity}
            placeholder = 'Quantity'
            type = "number"
            required
            />
            <br></br>
            <label>Units:</label>
            <input 
            onChange = { (event) => setNewUnit(event.target.value)}
            value = {newUnit}
            placeholder = 'Units'
            type = "text"
            required
            />

            <button type = "submit">Save</button>
        </form>
    )
}

export default GroceryForm;