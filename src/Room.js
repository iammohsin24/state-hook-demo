import React , { useState } from 'react';
import './Room.css';

function Room() {
    let [lit,setLit] = useState(false);
    let [age,setage] = useState(20);
    let [temp,setTemp] = useState(72);
  return (
    <div className={`room ${lit? 'lit': 'dark'}`}>
        Room is {lit ? 'lit' : 'dark'}
        <br/>
        Current Temperature = ${temp} &deg;F
        <br/>
        Age  = {age}
        <br/>
        <button onClick={()=>setLit(lit=true)}>Toogle Light:ON</button>
        <button onClick={()=>setLit(lit=false)}>Toogle Light:OFF</button><br/>
        <button onClick={()=>setTemp(++temp)}>+</button>
        <button onClick={()=>setTemp(--temp)}>-</button><br/>
        <button onClick={()=>setage(++age)}>Increase Age</button>
    </div>
  );
}

export default Room;
