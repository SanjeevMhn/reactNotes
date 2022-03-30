import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar'
import NotesContainer from './components/NotesContainer/NotesContainer';

const App = () => {
  return (
    <div className="main-wrapper">
      <Navbar/>
      <Sidebar/>
      <NotesContainer/>
    </div>

  )
}

export default App;