import React, { useState } from 'react';
import './App.css';
import Homedetail from './Home/Homedetail';
import Homescreen from './Home/Homescreen';

function App() {
  const [detail,setDetail]=useState(false)
  const [id,setId]=useState(0);
  const[Url,setUrl]=useState('');
  return (
    <div className="App">
      {
        detail?<Homedetail id={id} fetchUrl={Url}/>:<Homescreen detail={detail} setDetail={setDetail} setId={setId} setUrl={setUrl}/>
      } 
    </div>
    
  );
}

export default App;
