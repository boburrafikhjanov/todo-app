import React from 'react';
import axios from 'axios';

import Badge from "../Badge";

import { RemoveIcon } from "../svg";

import "./Lists.scss";

const Lists = ({ items, isRemovable, onClick, onRemove }) => {

  const removeList = (item) => {
    if (window.confirm('Вы действительно хотите удалить список?')) {
      axios.delete('http://localhost:3001/lists/' + item.id).then(() => {
        onRemove(item.id);
      });
    }
  }

  return (
    <ul
      onClick={onClick}
      className='list'
    >
      {items?.map(item => (
        <li key={item.id} className={`${item.active ? 'active' : ''} ${item.className ? item.className : ''}`}>
          {item?.icon
            ? item?.icon
            : <Badge color={item.color.name}/>
          }
          <span>{item?.name}</span>
          {isRemovable &&
            <button
              className='listRemoveBtn'
              onClick={() => removeList(item)}
            >
              <RemoveIcon/>
            </button>}
        </li>
      ))}
    </ul>
  );
};

export default Lists;