import React , { useState } from 'react';
import './App.css';

function Room() {
    let [lit,setLit] = useState(false);
    let [age,setage] = useState(20);
  return (
    <div>
        Room is {lit ? 'lit' : 'dark'}
        <br/>
        Age  = {age}
        <br/>
        <button onClick={()=>setLit(!lit)}>Toogle Light</button><br/>
        <button onClick={()=>setage(++age)}>Increase Age</button>
    </div>
  );
}

export default Room;
