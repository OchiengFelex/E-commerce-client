import React, { useState } from 'react';
import './Admin.css';

// Components for each option in the side navbar

function AddItem({ onAddItem }) {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemDescription, setItemDescription] = useState('');

  // Function to handle adding an item
  const handleAddItem = () => {
    if (itemName.trim() !== '' && itemPrice.trim() !== '' && itemDescription.trim() !== '') {
      onAddItem({
        name: itemName,
        price: itemPrice,
        description: itemDescription,
      });
      setItemName('');
      setItemPrice('');
      setItemDescription('');
    }
  };

  return (
    <div className="add-item">
      <h2>Add Item</h2>
      <label>Item Name:</label>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Item name"
      />
      <label>Item Price:</label>
      <input
        type="text"
        value={itemPrice}
        onChange={(e) => setItemPrice(e.target.value)}
        placeholder="Item price"
      />
      <label>Item Description:</label>
      <input
        type="text"
        value={itemDescription}
        onChange={(e) => setItemDescription(e.target.value)}
        placeholder="Item description"
      />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
}

function DeleteItem({ items, onDeleteItem }) {
  // Function to handle deleting an item
  const handleDeleteItem = (item) => {
    onDeleteItem(item);
  };

  return (
    <div>
      <h2>Delete Item</h2>
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            {item.name} - {item.price}
            <button onClick={() => handleDeleteItem(item)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
function PaymentTracking() {
    const [payments, setPayments] = useState([]);
  
    // Function to handle adding a payment
    const handleAddPayment = () => {
      const newPayment = {
        id: payments.length + 1,
        amount: Math.floor(Math.random() * 1000), // Random payment amount for demonstration
        status: 'Completed', // Payment status can be modified as needed
      };
  
      setPayments((prevPayments) => [...prevPayments, newPayment]);
    };
  
    return (
      <div>
        <h2>Payment Tracking</h2>
        <button onClick={handleAddPayment}>Add Payment</button>
        <ul>
          {payments.map((payment) => (
            <li key={payment.id}>
              Payment ID: {payment.id} - Amount: {payment.amount} - Status: {payment.status}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  function OrderTracking() {
    const [orders, setOrders] = useState([]);
  
    // Function to handle adding an order
    const handleAddOrder = () => {
      const newOrder = {
        id: orders.length + 1,
        customerName: 'John Doe', // Customer name for demonstration
        status: 'Pending', // Order status can be modified as needed
      };
  
      setOrders((prevOrders) => [...prevOrders, newOrder]);
    };
  
    return (
      <div>
        <h2>Order Tracking</h2>
        <button onClick={handleAddOrder}>Add Order</button>
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              Order ID: {order.id} - Customer: {order.customerName} - Status: {order.status}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  

function Admin() {
  const [selectedOption, setSelectedOption] = useState('payment'); // Default selected option
  const [items, setItems] = useState([]);

  // Function to handle option selection in the side navbar
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // Function to handle adding an item
  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  // Function to handle deleting an item
  const handleDeleteItem = (item) => {
    setItems((prevItems) => prevItems.filter((prevItem) => prevItem !== item));
  };

  return (
    <div className="admin-page">
      {/* Side Navbar */}
      <div className="side-navbar">
        <ul>
         
          <li className={selectedOption === 'add' ? 'active' : ''} onClick={() => handleOptionSelect('add')}>
            Add Item
          </li>
          <li className={selectedOption === 'delete' ? 'active' : ''} onClick={() => handleOptionSelect('delete')}>
            Delete Item
          </li>
          <li
            className={selectedOption === 'payment' ? 'active' : ''}
            onClick={() => handleOptionSelect('payment')}
          >
            Payment Tracking
          </li>
          <li
            className={selectedOption === 'order' ? 'active' : ''}
            onClick={() => handleOptionSelect('order')}
          >
            Order Tracking
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {selectedOption === 'payment' && <PaymentTracking />}
        {selectedOption === 'order' && <OrderTracking />}
        {selectedOption === 'add' && <AddItem onAddItem={handleAddItem} />}
        {selectedOption === 'delete' && <DeleteItem items={items} onDeleteItem={handleDeleteItem} />}
      </div>
    </div>
  );
}

export default Admin;
