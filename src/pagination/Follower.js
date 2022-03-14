import React from 'react'

const Follower = ({ nb, avatar_url, login }) => {
  return (
    <article className='card'>
        <img src={avatar_url} alt='' />
        <h4>{nb + '-' + login}</h4>
    </article>
  )
}

export default Follower;