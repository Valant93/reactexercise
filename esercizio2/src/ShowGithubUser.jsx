import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GithubUser from './GithubUser';

const ShowGithubUser = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [username]);

  return <GithubUser user={user} />;
};

export default ShowGithubUser;