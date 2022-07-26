import React, {useState} from "react";
import './style.css'

const App = ()=> {
    const [number, setNumber] = useState(0)
    return <div>
        <h1>{number}</h1>
        <button onClick={()=> setNumber(number+1)} className="button">+</button>
        <button onClick={()=> setNumber(number-1)} className="button">-</button>
        <button onClick={()=> setNumber(0)} className="button">Reset</button>
    </div>
}

export default App;