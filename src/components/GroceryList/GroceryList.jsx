import GroceryListItem from '../GroceryListItem/GroceryListItem';

function GroceryList({groceryList, getGroceries}) {
    return (
        <div>
        {
            groceryList.map(item => (
                <GroceryListItem key={item.id} item={item} getGroceries = {getGroceries} />
            ))
        }
        </div>
    )
}

export default GroceryList;