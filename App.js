import { useState } from 'react'
import './App.css';
import Map from './Map';
import Display from './Display'
function App() {
  const [selected, setSelected] = useState("")
  return (
    <div className="App">
      <Display selected={selected} />
      <Map setSelected={setSelected} />
     
    </div>
  );
}

export default App;
