import GroceryListItem from '../GroceryListItem/GroceryListItem';

function GroceryList({groceryList, buy }) {
    return (
        <div>
        {
            groceryList.map(item => (
                <GroceryListItem key={item.id} item={item} buy = {buy}/>
            ))
        }
        </div>
    )
}

export default GroceryList;