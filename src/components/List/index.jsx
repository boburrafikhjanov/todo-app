import React from 'react';
import Badge from "../Badge";

import "./List.scss";

const List = ({ items, onClick }) => {
  return (
    <ul
      onClick={onClick}
      className='list'
    >
      {items?.map(item => (
        <li key={item.id} className={`${item.active ? 'active' : ''} ${item.className ? item.className : ''}`}>
          {item?.icon
            ? item?.icon
            : <Badge color={item.colorName}/>
          }
          <span>{item?.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;