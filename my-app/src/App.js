import './App.css';
import React,{useState} from 'react';
function App() {
    const[count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
  return (
    <div className="App">
      
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={increment}>Click to increment</button>
        <h2>{count}</h2>
        <button onClick={decrement}>Click to decrement</button>

    </div>
    
  );
}


export default App;
