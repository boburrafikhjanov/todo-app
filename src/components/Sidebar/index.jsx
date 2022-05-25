import React from 'react';
import List from "../List";
import AddList from "../AddList";

import DB from '../../mock-data/db.json';

import {ListIcon} from "../svg";

import './Sidebar.scss';

const Sidebar = () => {

  return (
    <div className='todoSidebar'>
      <List
        items={[
          {
            id: 0,
            icon: <ListIcon/>,
            colorName: null,
            label: 'Все задачи',
            active: true,
          }
        ]}
        isRemovable={true}
      />

      <List
        items={[
          {
            id: 1,
            icon: null,
            colorName: 'Green',
            label: 'Покупки',
          },
          {
            id: 2,
            icon: null,
            colorName: 'Blue',
            label: 'Фронтенд',
          },
          {
            id: 3,
            icon: null,
            colorName: 'Pink',
            label: 'Фильмы и сериалы',
          },
          {
            id: 4,
            icon: null,
            colorName: 'Lime',
            label: 'Книги',
          },
          {
            id: 5,
            icon: null,
            colorName: 'Gray',
            label: 'Личное',
          },
        ]}
      />

      <AddList colors={DB.colors}/>

    </div>
  );
};

export default Sidebar;