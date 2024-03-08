import React, { useEffect } from 'react';
import Header from './Sections/Header';
import Sidebar from './Sections/Sidebar';
import Feed from './Sections/Feed';
import { login, logout, selectUser } from './features/counter/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { auth } from './firebase';
import Widgets from './Sections/Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <main className="bg-gray-100 flex flex-col">
      {!user ? (
        <Login />
      ) : (
        <div className='bg-gray-100 flex flex-col'>
          <Header />

          <div className='flex max-md:flex-col max-w-7xl justify-center max-md:items-center md:mx-auto pt-0 sm:pt-3 pb-3 sm:px-10 md:px-14'>
            <Sidebar />

            <Feed />

            <Widgets />
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
