import React,{useState, useRef} from 'react'


function Weather() {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const inputRef = useRef([]);

  inputRef.current = [city,state].map(
    (ref, index) => inputRef.current[index] = React.createRef()
  )
  const handleClick = (e, index) => {
    inputRef.current[index].current.select();
    document.execCommand("copy");
  };
  return (
    <div>
      <h1>If you want to know the weather in your location </h1>
        <h2>In your City and State</h2>
        <input
        ref={inputRef.current[setCity]}
        type="text"
        placeholder='City'
        value={setCity}
        />
        <input
        ref={inputRef.current[setState]}
        type="text"
        placeholder="State"
        value={setState}
        />
         <button onClick={handleClick} className="btn-yes">submit</button>
         <h1>{city} {state}</h1>
      </div>
  )
}

export default Weather