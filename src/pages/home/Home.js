import React, {useState , useRef}from 'react';
import './home.css';

function Home() {
  const inputRef = useRef(null);
  const [name, setName] = useState('');
  function handleClick(){
    setName(inputRef.current.value);
  }
  return (
    <div>
    <div className="home-container">
    <h1>HOME PAGE</h1>
     <input
     ref={inputRef}
      type="text"
     className="name"
     placeholder='Please Enter Name'  
     />
     <button onClick={handleClick}>
    Submit
     </button>
     <h1> Welcome: {name}</h1>
    </div>
    </div>
  )
}

export default Home