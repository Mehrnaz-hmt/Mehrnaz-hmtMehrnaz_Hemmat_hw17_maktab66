import React from "react";
import { useEffect, useState,useContext } from "react";
import myContext from "../context/MyContext";

export default function AllItems() {
  // const [fetchData, setfetchData] = useState([]);
  const {fetchData, setFetchData} = useContext(myContext)
  useEffect(() => {
    fetch("https://624c2cf471e21eebbcfb3e1e.mockapi.io/Birds")
      .then((dataa) => dataa.json())
      .then((response) => setFetchData(response));
  });

  const isChecked = (e) => {
      let isChecked = e.target.checked;
      console.log(isChecked)
     let valueOfcheckbox = e.target.label;
     console.log(valueOfcheckbox)
  }

 

  return (
    <div className="container">
      <p className="all-items">All Items</p>
      <div className="container-input">
        <div className="cont-fetch">
          {fetchData.map((item) => (
             
            <label
              style={{display: "flex",flexDirection: "row",alignItems: "center",}}>
              <input onChange={isChecked} style={{padding: "26px",width: "30px", height: "30px", 
              margin: "10px",}} type="checkbox" id="scales" name="scales"label={item.name} ></input>
               {item.name}
            </label>
          ))}
        </div>
      </div>
    </div>
  ); 
  // <></>
}