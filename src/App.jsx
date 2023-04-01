import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Form from "./Form";
import nanoid from 'nanoid';
import SingleItem from './SingleItem';
import SingleItem from './SingleItem';
import Items from './Items';


const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));  
}

function App() {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    setItems([...items, newItem])
    setLocalStorage(items);
  }

  const removeItem = (itemId) => {
     const newItem = items.filter((item) => item.id !== itemId);
  } 

  return (
    <div className="App">
    <Form addItem={addItem}/>
    <Items removeItem={removeItem} items={items}/>         
    </div>
  );
};

export default App;
