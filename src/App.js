import React, { useState } from 'react';
import './App.css';


function Button(props){
return <button onClick={()=> props.incrementFunction(incrementValue)}>+{props.incrementValue}</button>
}

function Display(props){
return <div>{props.message}</div>
}

function App() {
  const [counter, setCounter] = useState(0);
  const handleClick =() =>setCounter(counter+1);


  return (
    <div>
      <Display message={counter}/>
      <Button incrementFunction={handleClick} incrementValue={1}/>
      <Button incrementFunction={handleClick} incrementValue={5}/>
      <Button incrementFunction={handleClick} incrementValue={10}/>
      <Button incrementFunction={handleClick} incrementValue={100}/>
    </div>
  );
}

export default App;
