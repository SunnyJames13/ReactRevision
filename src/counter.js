import "./styles.css";

import "./styles.css";
import {useState} from 'react';

const Counter=(props)=>{
const[count,setCount]=useState(props.count)
const handleIncrement=()=>{
  setCount(count+1);
}
const handleDecrement=()=>{
  setCount(count-1);
}
return(
  <>
  <button onClick={handleIncrement}>Incrementer</button>
  <p>{count}</p>
  <button onClick={handleDecrement}>Decrementer</button>
  </>

)
}

Counter.defaultProps={count:10}

export default Counter
