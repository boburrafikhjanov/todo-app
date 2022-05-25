import React, {useEffect, useState} from 'react';
import List from "../List";
import Badge from "../Badge";

import {AddIcon, CloseIcon} from "../svg";

import './AddList.scss';

const AddList= ({ colors }) => {

  const [visiblePopup, setVisiblePopup] = useState(true);
  const [selectedColor, selectColor] = useState(colors[0].id);

  return (
    <div className='addList'>

      <List
        onClick={() => setVisiblePopup(!visiblePopup)}
        items={[
          {
            id: 6,
            icon: <AddIcon/>,
            colorName: null,
            className: 'listItemAdd',
            label: 'Добавить папку',
            active: false,
          }
        ]}
      />

      {visiblePopup && (
        <div className='addListPopup'>
          <button onClick={() => setVisiblePopup(false)} className='addListPopupClose'><CloseIcon/></button>
          <input className='input' type="text" placeholder='Название списка'/>
          <div className='addListPopupColors'>
            {
              colors.map(color => (
                <Badge
                  key={color.id}
                  onClick={() => selectColor(color.id)}
                  className={selectedColor === color.id ? 'active' : ''}
                  color={color.name}/>
              ))
            }
          </div>
          <button className='button'>Добавить</button>
        </div>
      )}

    </div>
  );
};

export default AddList;