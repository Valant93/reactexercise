import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Counter from './Counter';
import ShowGithubUser from './ShowGithubUser';
import GithubUserList from './GithubUserList';  

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/users">GitHub Users</Link>  
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Welcome name="User" />} />
        <Route path="/counter" element={<Counter />} />
        
       
        <Route path="/users" element={<GithubUserList />}>
          
          <Route
            index
            element={<p>Add a user and select it</p>}  
          />
          
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;