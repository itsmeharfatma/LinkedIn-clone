import React from 'react';
import Header from './Sections/Header';
import Sidebar from './Sections/Sidebar';
import Feed from './Sections/Feed';
import { selectUser } from './features/counter/userSlice';
import { useSelector } from 'react-redux';
import Login from './Components/Login';

function App() {
  const user = useSelector(selectUser);

  return (
    <main className="flex flex-col">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className='bg-gray-100 flex py-3 px-14'>
          <Sidebar />

          {/* Feed */}
          <Feed />
          {/* Widgets */}
        </div>
      )}
    </main>
  );
}

export default App;
