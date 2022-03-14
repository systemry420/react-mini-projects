import React, { useState, useEffect } from "react";
import { paginate } from "./utils";

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getFollowers = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      const pages = paginate(data)
      setData(pages);
      setLoading(false);
    } catch (e) {}
  };

  useEffect(() => {
    getFollowers();
    return () => {};
  }, []);

  return { data, loading };
};
