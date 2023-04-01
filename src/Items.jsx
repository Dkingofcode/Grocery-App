import React from 'react';
import SingleItem from './SingleItem';

const Items = ({ removeItem, items, editItem }) => {
  return (
    <div>
    {items.map((item) => {
    <SingleItem item={item} removeItem={removeItem} editItem={editItem} />
    })}
    </div>
  )
}

export default Items;