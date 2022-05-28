import React from 'react';

import {CheckIcon, EditIcon} from "../svg";

import './Tasks.scss';

const Tasks = ({ list }) => {
  console.log(list);

  return (
    <div className='tasks'>
      <h2 className='tasksTitle'>
        {list.name}
        <button className='tasksTitleEdit'><EditIcon/></button>
      </h2>

      {list.tasks.map(task =>
        <div key={task.id} className="taskItem">
          <div className="checkbox">
            <input id={`task-${task.id}`} type="checkbox"/>
            <label htmlFor={`task-${task.id}`}>
              <CheckIcon/>
            </label>
             <input readOnly={true} type='text' className='taskItemText' value={task.text}/>
          </div>
        </div>
      )}

    </div>
  );
};

export default Tasks;