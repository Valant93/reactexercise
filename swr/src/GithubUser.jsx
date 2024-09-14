import React, { useState } from 'react';
import useGithubUser from '/useGithubUser';

const GithubUser = () => {
  const [username, setUsername] = useState(''); 
  const { user, loading, error } = useGithubUser(username);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={handleChange}
        placeholder="Enter GitHub username"
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {user && (
        <div>
          <h2>{user.login}</h2>
        </div>
      )}
    </div>
  );
};

export default GithubUser;