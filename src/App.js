import { useState } from 'react';
import './App.css';
import ComponentOne from "./Components/ClassComponent"
import FuncComponent from './Components/FunctionComponent';

function App() {
  const [funClick,setfunClick] = useState(true)
  const [comClick,setcomClick] =useState(true)
  return (
  <div className="App">
      <h1 className='head'>STYLING USING FUNCTIONAL AND CLASS COMPONENTS </h1>
      <div className='buttoncontainer'>
         <button onClick={()=>setfunClick(!funClick)}>CLICK To see styling in Function component</button>
         <button onClick={()=>setcomClick(!comClick)}>CLICK To see styling in Class component</button>
      </div>
    <div className='ComponentContainer'>
    {funClick && <FuncComponent/>}
     {comClick && <ComponentOne/>}
    </div>
  </div>
  );
}

export default App;
