import React, { useContext } from 'react'
import { GithubCtx } from '../context/Github-ctx';

const User = () => {
    const {
        gitUser
    } = useContext(GithubCtx);

    const {
        avatar_url, name,
        html_url, bio, company,
        location, twitter_username
    } = gitUser;
  return (
    <section className='section'>
        <div className='item'>
            <h1>User Info</h1>
            <img className='avatar' src={avatar_url} alt={name} />
            <div>
                {name}
            </div>
            <p>@{twitter_username || name}</p>
            <p>
                {bio}
            </p>
            <p>
                {company}
            </p>
            <p>{location}</p>
            <p>
                <a target={'_blank'} href={html_url}>Follow me</a>
            </p>
        </div>
    </section>
  )
}

export default User