import './style.css';
import React, { useState } from 'react';

export default function Folder(props) {
  const [flag, setFlag] = useState(false);
  console.log('111111111111', props.data);
  const expand = () => {
    setFlag(!flag);
  };
  return (
    <div className="App">
      <div className={flag ? 'best' : ''}>
        <span>{props.data.id}</span>
        <button className="test" onClick={() => expand()}>
          <div>{flag ? '-' : '+'}</div>
        </button>
      </div>
      {props.data.children &&
        flag &&
        props.data.children.map((x) => {
          return <Folder data={x} />;
        })}
    </div>
  );
}
