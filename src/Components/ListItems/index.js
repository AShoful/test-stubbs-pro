import React from 'react';
import Item from '../Item';

const ListItems = ({ store, onremove, handleName, handleValue }) => (
  <div>
    {' '}
    {store.map((item, index) => (
      <Item
        key={item.id}
        remove={onremove}
        handleValue={handleValue}
        handleName={handleName}
        item={item}
        index={index}
      />
    ))}
  </div>
);

export default ListItems;
