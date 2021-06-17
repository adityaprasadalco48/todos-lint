import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Namo');
  console.log(name);

  useEffect(() => {
    console.log('I have Done This');
  }, []);

  return (
    <div className="App">
      <h1>New Here! Wann
        
        
        
        a meet Developer ?</h1>
    </div>
  );
}

export default App;
