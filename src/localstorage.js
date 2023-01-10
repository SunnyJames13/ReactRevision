import "./styles.css";
import {useState, useEffect} from 'react';

const Count=()=>{
const[notes,setNotes]=useState("")

useEffect(()=>{
  const text=JSON.parse(localStorage.getItem("Notes"))
  if(text){
    setNotes(text)
  }
},[])

const handleChange=(e)=>{
  let text=e.target.value;
  setNotes(text);
  localStorage.setItem("Notes",JSON.stringify(text))
}
return(
  <>
  <textarea value={notes} onChange={handleChange}/>
  <p>{notes}</p>
  </>

)
}

export default Count;


