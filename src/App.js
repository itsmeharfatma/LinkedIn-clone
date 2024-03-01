import React, { useEffect } from 'react';
import Header from './Sections/Header';
import Sidebar from './Sections/Sidebar';
import Feed from './Sections/Feed';
import { login, logout, selectUser } from './features/counter/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { auth } from './firebase';

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
