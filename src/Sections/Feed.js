import React, { useEffect, useState } from 'react';
import Post from './Post';
import { db } from '../firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/counter/userSlice';
import FlipMove from 'react-flip-move';

const Feed = () => {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
    }, [])

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput('');
    };

    return (
        <div className='flex flex-col w-1/2 mx-6'>
            <div className='flex flex-col justify-between bg-white pt-4 pb-1 px-4 border border-gray-200 rounded-lg'>
                <div className='flex justify-between mb-1'>
                    <div className='bg-[#9b9b9b] rounded-full overflow-hidden mr-2 text-center items-center text-white w-[52px] h-[52px]'>
                        <img src={user.photoUrl} alt='' width={52} />
                        <div className='flex items-center justify-center text-xl rounded-full w-[52px] h-[52px]'>
                            {user?.displayName?.charAt(0) || ''}
                        </div>
                    </div>
                    <div className='w-[90%] h-[50px] border border-gray-400 rounded-full py-3 px-6'>
                        <form className='flex justify-between'>
                            <input value={input} onChange={(e) => setInput(e.target.value)} type='text' placeholder='Start a post' className='w-full outline-none border-none' />
                            <button onClick={sendPost} type='submit' className='hidden'></button>
                        </form>
                    </div>
                </div>

                <div className='flex justify-around font-medium text-sm text-[#86888a]'>
                    <button className='hover:bg-slate-100 py-3 px-3 rounded-md'>
                        <i class="fa-regular fa-image fa-lg mr-2" style={{ color: "#00a0dc" }}></i>
                        Media
                    </button>
                    <button className='hover:bg-slate-100 py-3 px-3 rounded-md'>
                        <i class="fa-solid fa-calendar-days fa-lg mr-2" style={{ color: "#e68523" }}></i>
                        Event
                    </button>
                    <button className='hover:bg-slate-100 py-3 px-3 rounded-md'>
                        <i class="fa-solid fa-newspaper fa-lg mr-2" style={{ color: "#dd5143" }}></i>
                        Write article
                    </button>
                </div>
            </div>
            <hr className='h-px my-3 bg-[#bbbbbb] border-0 rounded-full' />

            <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoURL } }) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoURL={photoURL}
                    />
                ))}
            </FlipMove>

        </div>
    );
}

export default Feed;