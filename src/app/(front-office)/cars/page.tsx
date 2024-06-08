"use client";

/*import React, { useState, useEffect } from 'react';


export default function Car() {

  return (
    <main style={{backgroundColor:"red"}}>

      <h1>All Brands</h1>
    
    </main>
  );
}*/
import React, { useState, useEffect, useRef } from "react";
import mixitup from "mixitup";

const MixItUpComponent = () => {
  const containerRef = useRef(null);
  const [selectedFilter, setSelectedFilter] = useState("*");
  const [selectedSort, setSelectedSort] = useState("");

  useEffect(() => {
    if (containerRef.current) {
      mixitup(containerRef.current, {
        selectors: {
          target: ".mix",
        },
        animation: {
          duration: 300,
        },
      });
    }
  }, []);

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    const mixer = mixitup(containerRef.current);
    mixer.filter(filter);
  };

  const handleSortClick = (sort) => {
    setSelectedSort(sort);
    const mixer = mixitup(containerRef.current);
    mixer.sort(sort);
  };

  const getButtonStyle = (isSelected) => ({
    backgroundColor: isSelected ? "black" : "white",
    color: isSelected ? "white" : "black",
    margin: "0 5px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  });

  return (
    <div
      className="w-screen min-h-min"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 className="font-bold" style={{marginTop:"20px" ,marginBottom:"10px"}}>ALL BRANDS</h1>
      <div style={{marginBottom:"10px"}}> 
        <button
          type="button"
          style={getButtonStyle(selectedFilter === "*")}
          onClick={() => handleFilterClick("*")}
        >
          All
        </button>
        <button
          type="button"
          style={getButtonStyle(selectedFilter === ".category-a")}
          onClick={() => handleFilterClick(".category-a")}
        >
          Peugeot
        </button>
        <button
          type="button"
          style={getButtonStyle(selectedFilter === ".category-b")}
          onClick={() => handleFilterClick(".category-b")}
        >
          Citroen
        </button>
        <button
          type="button"
          style={getButtonStyle(selectedFilter === ".category-c")}
          onClick={() => handleFilterClick(".category-c")}
        >
          Renault
        </button>
        <button
          type="button"
          style={getButtonStyle(selectedFilter === ".category-d")}
          onClick={() => handleFilterClick(".category-d")}
        >
          Audi
        </button>
        <button
          type="button"
          style={getButtonStyle(selectedFilter === ".category-e")}
          onClick={() => handleFilterClick(".category-e")}
        >
          Toyota
        </button>
        <button
          type="button"
          style={getButtonStyle(selectedFilter === ".category-f")}
          onClick={() => handleFilterClick(".category-f")}
        >
          Mercedes
        </button>
      </div>
      <div
        ref={containerRef}
        className="containe"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          margin: "0 auto",
          width: "60vw",
        }}
      >
        <div
          className="mix category-a"
          data-order="1"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/images/peugeot_208_2023_4x3.webp.png"
            alt=""
            style={{ width: "200PX", borderRadius: "20px" }}
          />

        </div>
        <div
          className="mix category-b"
          data-order="2"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <img
            src="/images/download.jpg"
            alt=""
            style={{ width: "200PX", borderRadius: "20px" }}
          />
        
        </div>
      </div>
    </div>
  );
};

export default MixItUpComponent;
