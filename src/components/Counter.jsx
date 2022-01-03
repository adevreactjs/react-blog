import React from 'react';

export default function Counter() {
    
    const [likes, setLikes] = React.useState(0);
    const [value, setValue] = React.useState('');
  
    function Inc() {
      setLikes(likes + 1);
    }
  
    function Dec() {
      setLikes(likes - 1);
    }
  return (
    <div>
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)}></input>
      <button onClick={Inc}>Inc</button>
      <button onClick={Dec}>Dec</button>
    </div>
  );
}
