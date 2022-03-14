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

    } catch(e) {

    }
  }

  useEffect(() => {
      fetchUser()
      return () => {
      };
  }, []);

  return (
    <>
      <h2>Random User</h2>
      {user.name} - 
      {user.phone} - 
    </>
  );
}

export default RandomUser;