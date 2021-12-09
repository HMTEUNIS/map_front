import { useState } from 'react'
import './App.css';
import Map from './Map';
import Display from './Display'
import Navbar from './Navbar'


function App() {
  const [selected, setSelected] = useState("")
  return (
    <div className="App">
      <Navbar />
      <Display selected={selected} />
      <Map setSelected={setSelected} />
     
    </div>
  );
}

export default App;
