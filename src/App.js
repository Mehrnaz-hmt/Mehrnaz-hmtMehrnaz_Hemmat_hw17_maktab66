import React from "react";
import { useState } from "react";
import "./App.css";
import AllItems from "./components/AllItems";
import myContext from "./context/MyContext";
import SelectedItems from "./components/SelectedItems";

function App() {
  //states
  const [fetchData, setFetchData] = useState([]);

  return (
    
    <div className="App">
      <myContext.Provider
        value={{      
          fetchData: fetchData,
          setFetchData: setFetchData,
        }}
      >
        <AllItems />
      </myContext.Provider>
      <SelectedItems />
    </div>
  );
}

export default App;