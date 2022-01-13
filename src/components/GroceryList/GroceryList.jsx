import GroceryListItem from '../GroceryListItem/GroceryListItem';

function GroceryList({groceryList}) {
    return (
        <div>
        {
            groceryList.map(item => (
                <GroceryListItem key={item.id} item={item} />
            ))
        }
        </div>
    )
}

export default GroceryList;