import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from '../InputOption/InputOption.js';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from '../Post/Post.js';
import { db } from '../../Firebase.js'
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import FlipMove from 'react-flip-move';
 
function Feed() {

  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // snapshot = real-time listener connection to this js with database
    // desc = descending
    db.collection("posts").orderBy("timeStamp","desc").onSnapshot(snapshot => (
      setPosts(snapshot.docs.map((doc) => (
        {
          id: doc.id,
          data: doc.data(),
        }
      )))
    ));
  }, [])

  const sendPost = (e) => {
    e.preventDefault();
    // console.log("hello");

    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "" ,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  }

  return (
    <div className='feed'>
      <div className="feed-inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input value={input} onChange={e=>setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type='submit'>
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOption">
          {/* inputOption */}
          <InputOption Icon={ImageIcon} title="Photo" color='#70B5F9' />
          <InputOption Icon={SubscriptionsIcon} title="Video" color='#E7A33E' />
          <InputOption Icon={EventNoteIcon} title="Event" color='#C0CBCD' />
          <InputOption Icon={CalendarViewDayIcon} title="Write article" color='#7FC15E' />
        </div>
      </div>

      {/* post */}
      <FlipMove>
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
      </FlipMove>
      {/* <Post name="Kangqiang Yang" description="Thisi is a test"
        message="Wow this worked"
      /> */}
      

    </div>
  )
}

export default Feed