
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Counter from './Counter';
import ShowGithubUser from './ShowGithubUser';  

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome name="User" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users/:username" element={<ShowGithubUser />} /> 
      </Routes>
    </Router>
  );
};

export default App;
