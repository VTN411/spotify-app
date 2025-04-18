import React from 'react'
import Slidebar from './components/Slidebar';
import Player from './components/Player';
import Display from './components/Display';

const App = () => {
  return (
    <div className=' h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Slidebar />
        <Display />
      </div>
      <Player />
    </div>
  )
};

export default App;
