import React, { useContext } from 'react'
import { GithubCtx } from '../context/Github-ctx';
import { FaReact, FaUser, FaUserPlus, FaGithubSquare } from "react-icons/fa";

const Info = () => {
    const { gitUser } = useContext(GithubCtx);
    console.log(gitUser);
    const {
        public_repos,
        followers,
        following,
        public_gists
    } = gitUser;

    const items = [
        {
          id: 1,
          icon: <FaReact className='icon' />,
          label: 'repos',
          value: public_repos,
          color: 'pink',
        },
        {
          id: 2,
          icon: <FaUser className='icon' />,
          label: 'followers',
          value: followers,
          color: 'green',
        },
        {
          id: 3,
          icon: <FaUserPlus className='icon' />,
          label: 'following',
          value: following,
          color: 'purple',
        },
        {
          id: 4,
          icon: <FaGithubSquare className='icon' />,
          label: 'gists',
          value: public_gists,
          color: 'yellow',
        },
      ];

  return (
    <section className='section'>
        <div className='wrapper'>
            {items.map(item => {
                return <Item key={item.id} {...item} />
            })}
        </div>
    </section>
  )
}

const Item = ({ icon, label, value, color }) => {
    return (
      <article className='item'>
        <span className={color}>{icon}</span>
        <div>
          <h3>{value}</h3>
          <p>{label}</p>
        </div>
      </article>
    );
  };

export default Info