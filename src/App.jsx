import React, {useEffect, useState} from 'react';
import axios from 'axios';

import { Lists, AddList, Tasks } from './components';

import { ListIcon } from './components/svg';

const App = () => {
  const [lists, setLists] = useState(null);
  const [colors, setColors] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/lists?_expand=color&_embed=tasks')
    .then(({ data }) => {
      setLists(data);
    });
    axios.get('http://localhost:3001/colors')
    .then(({ data }) => {
      setColors(data);
    });
  },[]);

  const onAddList = (obj) => {
    const newList = [ obj, ...lists ]
    setLists(newList);
  }

  return (
    <main className='todoMain'>
      <div className='todoSidebar'>
      <Lists
        items={[
          {
            id: 0,
            icon: <ListIcon/>,
            colorName: null,
            name: 'Все задачи',
            active: true,
          }
        ]}
      />

      {lists ? (
          <Lists
            items={lists}
            onRemove={id => {
              const newLists = lists.filter(item => item.id !== id);
              setLists(newLists);
            }}
            isRemovable
          />
        ) : (
          'Загрузка...'
      )}

        <AddList onAdd={onAddList} colors={colors} />
      </div>

      <div className='todoContent'>
        {lists && <Tasks list={lists[1]}/>}
      </div>
    </main>
  );
};

export default App;
