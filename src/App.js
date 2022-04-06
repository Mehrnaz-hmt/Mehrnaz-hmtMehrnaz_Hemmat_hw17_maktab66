import React from 'react';
import { useState } from 'react';
import './App.css';
import AllItems from './components/AllItems';
import myContext from './context/MyContext';

function App() {
//states 
const [fetchData, setfetchData] = useState([]);


  return (
    <div className="App">
      <myContext.Provider value={{
          fetchData:fetchData
        }}>
        
          <AllItems/>
      </myContext.Provider>
   
    </div>
  );
}

export default App;
