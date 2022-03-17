import React, { useContext } from 'react'
import { GithubCtx } from '../context/Github-ctx';

const Followers = () => {
    const { followers } = useContext(GithubCtx);
    console.log(followers);

  return (
    <section className='section'>
        <h1>Followers</h1>
        <div className='wrapper'>
            {followers.map((follower, idx) => {
                return <div key={idx} className='item'>
                    <img className='avatar' src={follower.avatar_url} alt={follower.login}/>
                    <span>
                        {follower.login} - 
                        <a href={follower.html_url}>Follow</a>
                    </span>
                </div>
            })}
        </div>
    </section>
  )
}

export default Followers;