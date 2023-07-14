
import React, { useState } from 'react';
import './PlaceOrder.css'


function PlaceOrder() {
  
      const [selectedItems, setSelectedItems] = useState([]);
      
      // Function to handle adding an item to the order
      const handleAddToOrder = (item) => {
        setSelectedItems((prevItems) => [...prevItems, item]);
      };
      
      // Function to handle submitting the order
      const handleSubmitOrder = () => {
        alert('Order Submitted!');
        setSelectedItems([]);
      };
    
      return (

            <div className="order-main">

        <div className="order-container">
          <h1>Place Order</h1>
            <br/>

          <div className="list">
          <h3>Select the items you want to order:</h3><br/>
          <ul>
            <li>
              Item 1
              <button onClick={() => handleAddToOrder('Item 1')}>Add to Order</button>
            </li><br/>
            <li>
              Item 2
              <button onClick={() => handleAddToOrder('Item 2')}>Add to Order</button>
            </li><br/>
            <li>
              Item 3
              <button onClick={() => handleAddToOrder('Item 3')}>Add to Order</button>
            </li><br/>
          </ul><br/>
          <h2>Selected Items:</h2>
          <ul>
            {selectedItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul><br/>
          <button onClick={handleSubmitOrder}>Submit Order</button>
                </div>
             </div>

        </div>
      );
    }
    
   
    

export default PlaceOrder