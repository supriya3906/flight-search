import { useState } from 'react'
function App(){
  const [flights,setFlights]=useState([]);
  const [Loading,setLonading]=useState(false);
  const[error,setError]=useState(null);
  const[seachParam,setParams]=useState(number);
  const[number,setNumber]=useState();
  const searchFlight=async(searchParam)=>{
    setLonading(true);
    setError(null);
    try{
      const response=await fetch('https://api//flights.com/search?quaary=${searchParam}'+setParams);
      if(!response.ok){
        throw newError('Network response was not ok');
      }
    }
  }
  return(
    <div>
      <h3>Flight Search App</h3>
      <input 
      text="text" placeholder='Enter flight number' value={number} onChange={(e)=>setNumber(e.target.value)}
      />
      <button onClick={(search)}>Search</button>
    </div>
  )
}