import GroceryListItem from '../GroceryListItem/GroceryListItem';

function GroceryList({groceryList, buy, removeItem, getGroceries }) {
    return (
        <div>
        {
            groceryList.map(item => (
                <GroceryListItem key={item.id} item={item} buy = {buy} removeItem={removeItem}/>
            ))
        }
        </div>
    )
}

export default GroceryList;