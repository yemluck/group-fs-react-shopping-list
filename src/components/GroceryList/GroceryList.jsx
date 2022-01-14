import GroceryListItem from '../GroceryListItem/GroceryListItem';
import './GroceryList.css';

function GroceryList({groceryList, buy, removeItem, getGroceries }) {
    return (
        <div className = "flexContainer">
        {
            groceryList.map(item => (
                <GroceryListItem key={item.id} item={item} buy = {buy} removeItem={removeItem}/>
            ))
        }
        </div>
    )
}

export default GroceryList;