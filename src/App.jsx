import React from 'react';
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className='todo'>
      <Sidebar/>
      <div className="todo__content"></div>
    </div>
  );
};

export default App;
