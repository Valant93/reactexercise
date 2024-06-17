import React from 'react';
import List from './LIst';

export default function App  ()  {
  const colorList = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Black' },
    { id: 3, name: 'Purple' },
  ];

  return (
    <div>
      <h1>Color List</h1>
      <List colors={colorList} />
    </div>
  );
};


