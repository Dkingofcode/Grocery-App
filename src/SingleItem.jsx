import React from 'react';
import{ useState } from 'react';

const SingleItem = ({ item, removeItem, editItem }) => {
    const [isChecked, setIsChecked ] = useState(item.completed);

    

  return (
    <div className='single-item'>
      <input type="checkbox" checked={item.completed} name='tick' onChange={() => editItem(item.id)} />
      <p style={{ textTransform: 'capitalize', textDecoration: isChecked && 'linethrough'}}>{item.name}</p>
      <button className='btn remove-btn' type='button' onClick={() => removeItem(item.id)}>
        delete
      </button>
    </div>
  );
};

export default SingleItem;