import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Lists, Badge } from '../../components';

import { AddIcon, CloseIcon } from "../svg";

import './AddList.scss';

const AddList = ({ colors, onAdd }) => {

  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectedColor, selectColor] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (Array.isArray(colors)) {
      selectColor(colors[0].id);
    }
  }, [colors]);

  const onClose = () => {
    setVisiblePopup(false);
    setInputValue('');
    selectColor(colors[0].id);
  }

  const addList = () => {
    if(!inputValue) {
      alert('Введите название списка!');
      return;
    }
    setIsLoading(true);
    axios
      .post('http://localhost:3001/lists', {
        name: inputValue,
        colorId: selectedColor
      })
      .then(({ data }) => {
        const color = colors.filter(c => c.id === selectedColor)[0].name;
        const listObj = { ...data, color: { name: color } };
        onAdd(listObj);
        onClose();
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className='addList'>

      <Lists
        onClick={() => setVisiblePopup(true)}
        items={[
          {
            id: 6,
            icon: <AddIcon/>,
            color: null,
            className: 'listItemAdd',
            name: 'Добавить список',
            active: false,
          }
        ]}
      />

      {visiblePopup && (
        <div className='addListPopup'>

          <button
            onClick={onClose}
            className='addListPopupClose'>
            <CloseIcon/>
          </button>

          <input
            value={inputValue}
            onChange={event => setInputValue(event.target.value)}
            className='input'
            type="text"
            placeholder='Название списка'/>

          <div className='addListPopupColors'>
            {colors.map(color => (
              <Badge
                onClick={() => selectColor(color.id)}
                key={color.id}
                color={color.name}
                className={selectedColor === color.id && 'active'}
              />
            ))}
          </div>

          <button onClick={addList} className='button'>
            {isLoading ? 'Добавление...' : 'Добавить'}
          </button>

        </div>
      )}

    </div>
  );
};

export default AddList;
