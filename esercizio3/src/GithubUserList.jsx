import React from "react";
import { Outlet } from "react-router-dom";

const GithubUserList = () => {
  return (
    <div>
      <h2>GitHub User List</h2>

      <Outlet />
    </div>
  );
};

export default GithubUserList;
