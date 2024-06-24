import React, { useState } from "react";
import GithubUser from "./GithubUser";

export default function GithubUsers() {
  const [username, setUsername] = useState("");
  const [usernames, setUsernames] = useState([]);

  function handleInputChange(event) {
    setUsername(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (username.trim() !== "" && !usernames.includes(username)) {
      setUsernames([...usernames, username]);
      setUsername("");
    }
  }

  return (
    <div>
      <h1>Search Github Users</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter Github username"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {usernames.map((uname) => (
          <GithubUser key={uname} username={uname} />
        ))}
      </div>
    </div>
  );
}
