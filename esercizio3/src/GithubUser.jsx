import React from 'react';

const GithubUser = ({ user }) => {
  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
      <img src={user.avatar_url} alt={`${user.name}'s avatar`} width="100" />
    </div>
  );
};

export default GithubUser;