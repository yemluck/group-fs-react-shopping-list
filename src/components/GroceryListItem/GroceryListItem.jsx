import axios from 'axios';
import './GroceryListItem.css'

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
        <div className="listItem"key={item.id}>
            <p className = "itemName">{item.name}</p>
            <p className = "itemUnit">{item.quantity} {item.unit}</p>
            { item.purchased ? <p className = "purchased">Purchased</p> :
                <>
                <div className = "buyRemove">
                    <button onClick={buyItem}>Buy</button>
                    <button onClick={onRemoveItem}>Remove</button>
                </div>
                </>
            }       
        </div>
    )
}

export default GroceryListItem;