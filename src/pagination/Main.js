import React, { useState, useEffect } from "react";
import Follower from "./Follower";
import { useFetch } from "./useFetch";

const Main = () => {
  const { data: users, loading } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
      if (loading) return
      setFollowers(users[page])
      return () => {
      };
  }, [loading, page, users]);

  const handleButton = (idx) => {
      setPage(idx)
  }

  const prevPage = () => {
      setPage(old => {
          let prev = old - 1;
          if (prev < 0) {
              prev = users.length - 1
          }
          return prev
      })
  }

  const nextPage = () => {
    setPage(old => {
        let next = old + 1;
        if (next > (users.length - 1)) {
            next = 0
        }
        return next
    })
}

  return (
    <div>
      <h1>Pagination</h1>
      <main>
        <div className="followers">
          <div className="container">
            {followers.map((user, idx) => {
              return <Follower nb={idx + 1} key={user.id} {...user} />;
            })}
          </div>
          {!loading && (
              <div className="btn-container">
                  <button className="btn" onClick={prevPage}>Prev</button>
                  {users.map((user, idx) => {
                      return <button 
                      onClick={() => handleButton(idx)} 
                      className={`btn ${(idx === page) ? 'btn-primary':''}`} 
                      key={idx}>{idx + 1}</button>
                  })}
                <button className="btn" onClick={nextPage}>Next</button>
              </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Main;
