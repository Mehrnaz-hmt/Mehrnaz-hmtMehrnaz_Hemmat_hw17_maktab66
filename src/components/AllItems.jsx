import React from "react";
import { useEffect, useState,useContext } from "react";
import myContext from "../context/MyContext";

export default function AllItems() {
  // const [fetchData, setfetchData] = useState([]);
  const {setfetchData} = useContext(myContext);
  useEffect(() => {
    fetch("https://624c2cf471e21eebbcfb3e1e.mockapi.io/Birds")
      .then((dataa) => dataa.json())
      .then((response) => myContext.setfetchData(response));
  });

  const isChecked = (e) => {
      let isChecked = e.target.checked;
      console.log(isChecked)
      // if (isChecked) {
      // }
  }

  return (
    <div className="container">
      <p className="all-items">All Items</p>
      <div className="container-input">
        <div className="cont-fetch">
          {myContext.fetchData.map((item) => (
            <label
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <input 
               onChange={isChecked}
                style={{
                  padding: "26px",
                  width: "30px",
                  height: "30px",
                  margin: "10px",
                }}
                type="checkbox"
                id="scales"
                name="scales"
              ></input>
              {item.name}
          {item.id}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
