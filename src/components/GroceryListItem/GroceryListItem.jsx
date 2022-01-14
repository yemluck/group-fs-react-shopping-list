import axios from 'axios';
function GroceryListItem({item, buy, removeItem}) {
    
    // Buy function -- PUT and mark as purchased
    function buyItem() {
        console.log('itemId is,', item.id);
        buy({item});
        //move function into app.jsx like ClearReset
    }

    // Remove function -- DELETE
    function onRemoveItem() {
        console.log('in removeItem');
        removeItem({item});
    }


    return (
        <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.quantity} {item.unit}</p>
            { item.purchased ? 'Purchased' :
                <>
                    <button onClick={buyItem}>Buy</button>
                    <button onClick={onRemoveItem}>Remove</button>
                </>
            }       
        </div>
    )
}

export default GroceryListItem;