import {useEffect,useState} from 'react'
import useSound from 'use-sound';
// import mySound from '../assets/play.mp3'

function Start() {
    const [username,setUsername]=useState('');
     
     
  const handleChange = (event) => {
    setUsername(event.target.value);
  };
  return (

    
    <div  className='start'>
        <label>Username</label>
        <input id='user-name' name='username' onChange={handleChange}/><br/>
        <button >Start</button>
    </div>
  )
}

export default Start
