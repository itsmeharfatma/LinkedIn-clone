import React from 'react';
import Header from './Sections/Header';
import Sidebar from './Sections/Sidebar';


function App() {
  return (
    <div className="bg-gray-50 flex flex-col">
      <Header />
      <div className='flex'>
        <Sidebar />

        {/* Feed */}

        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
