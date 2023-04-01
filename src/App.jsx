import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Form from "./Form";
import nanoid from 'nanoid';
import SingleItem from './SingleItem';
import SingleItem from './SingleItem';
import Items from './Items';
import { ToastContainer, toast } from 'react-toastify';


const getLocalStorage = () => {
  let List = localStorage.getItem('list');
  console.log(List);
  if(List){
    List = JSON.parse(localStorage.getItem('list'));
  }else{
   List = []
  }
  return List;

}

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));  
}

const defaultItem = JSON.parse(localStorage.getItem('list') || '[]');
function App() {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
   const newItems = [...items, newItem];
   setItems(newItems);
    setLocalStorage(newItems);
  }

  const removeItem = (itemId) => {
     const newItem = items.filter((item) => item.id !== itemId);
  } 

  const editItem = (itemId) => {
     const newItem = {
      name: itemName,
      completed: !completed,
     }
  }

  return (
    <div className="App">
    <Form addItem={addItem}/>
    <Items removeItem={removeItem} items={items} editItem={editItem} />         
    <ToastContainer />
    </div>
  );
};

export default App;
