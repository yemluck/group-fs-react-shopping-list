function GroceryListItem({item}) {
    
    // Buy function -- PUT and mark as purchased
    function buyItem() {
        console.log('in buyItem');
    }

    // Remove function -- DELETE
    function removeItem() {
        console.log('in removeItem');
    }


    return (
        <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.quantity} {item.unit}</p>
            <button onClick={buyItem}>Buy</button>
            <button onClick={removeItem}>Remove</button>
        </div>
    )
}

export default GroceryListItem;