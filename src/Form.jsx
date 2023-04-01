import React from 'react'
import { useState } from 'react';


const Form = ({ addItem }) => {
   const [newItem, setNewItem] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();

    if(!newItem) return;
    addItem(newItem);
    setNewItem('');
    console.log(newItem);
  }; 


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>grocery bud</h4>
        <div className='form-control'>
         <input type="text" className='form-input' value={newItem} onChange={(event) => setNewItem(event.target.value)}/>
          <button type='submit' className='btn'>
            Add Item
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form;