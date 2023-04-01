import React from 'react';

const SingleItem = ({ item, removeItem }) => {
    const [isChecked, setIsChecked ] = useState(item.completed);

    

  return (
    <div className='single-item'>
      <input type="checkbox" checked={isChecked} name='tick' onChange={() => setIsChecked(!isChecked)} />
      <p style={{ textTransform: 'capitalize', textDecoration: isChecked && 'linethrough'}}>{item.name}</p>
      <button className='btn remove-btn' type='button' onClick={() => removeItem(item.id)}>
        delete
      </button>
    </div>
  );
};

export default SingleItem;