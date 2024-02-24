import React from 'react';
import Header from './Sections/Header';
import Sidebar from './Sections/Sidebar';
import Feed from './Sections/Feed';


function App() {
  return (
    <main className="flex flex-col">
      <Header />
      <div className='bg-gray-100 flex py-3 px-14'>
        <Sidebar />

        {/* Feed */}
        <Feed />
        {/* Widgets */}
      </div>
    </main>
  );
}

export default App;
