import './style.css';
import Folder from './Folder';
import React from 'react';

export default function App() {
  const data = {
    id: 1,
    pid: null,
    children: [
      {
        id: 2,
        pid: 1,
        children: [{ id: 4, pid: 2, children: [{ id: 6, pid: 4 }] }],
      },
      { id: 3, pid: 1, children: [{ id: 5, pid: 3 }] },
    ],
  };
  return (
    <div>
      <Folder data={data} />
    </div>
  );
}
