import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'

const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'

function RandomUser() {
    const [user, setUser] = useState({});
  
  const fetchUser = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        const person = data['results'][0]
        const {
            name: { first, last },
            email,
            phone,
            location: { city, state },
            picture: { large },
        } = person;

        setUser({
            name: `${first} ${last}`,
            email,
            phone,
            location: `${city} ${state}`,
            picture: `${large}`
        })

        console.log(user);

    } catch(e) {

    }
  }

  useEffect(() => {
      fetchUser()
      return () => {
      };
  }, []);
 
  return (
    <section className='section'>
      <User user={user} />
      <button className='btn btn-primary' onClick={fetchUser}>GET</button>
    </section>
  );
}

const User = ({user}) => {
  return (
    <div className='container'>
      <div className='block'>
        <div className='user-title'><h2>Random User</h2></div>
        <p>{user.name} <FaUser /> </p> 
        <p>{user.phone}</p>
        <p>{user.email} <FaEnvelopeOpen /> </p> 
        <p>{user.location} <FaMap /> </p>
        <img src={user.picture} alt={user.name}  /> 
      </div>
    </div>
  )
}

export default RandomUser;