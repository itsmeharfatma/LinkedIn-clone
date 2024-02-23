import React from 'react';
import Header from './Sections/Header';
import Sidebar from './Sections/Sidebar';


function App() {
  return (
    <main className="flex flex-col">
      <Header />
      <div className='bg-gray-50 flex'>
        <Sidebar />

        {/* Feed */}

        {/* Widgets */}
      </div>
    </main>
  );
}

export default App;
