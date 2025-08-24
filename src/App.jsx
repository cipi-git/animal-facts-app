import React, { useState } from "react";
import { animals } from "./animals";


export default function App() {
  const [fact, setFact] = useState("");
  const title = "";
  const showBackground = true;
const background = (
  <>
    <img
      alt="ocean"
      src="/images/ocean.jpg"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: 0,
      }}
    />
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "rgba(0, 0, 0, 0.4)", // 👈 semi-transparent black
        zIndex: 0.5,
      }}
    />
  </>
);


  function displayFact(e) {
    const animal = e.target.alt;
    const facts = animals[animal].facts;
    const i = Math.floor(Math.random() * facts.length);
    setFact(facts[i]);
  }

  const images = Object.keys(animals).map((animal) => (
    <img
      key={animal}
      alt={animal}
      src={animals[animal].image}
      onClick={displayFact}
      style={{
        width: 200,
        height: 200,
        objectFit: "cover",
        cursor: "pointer",
        borderRadius: 10,
        margin: 10,
      }}
    />
  ));

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {showBackground && background}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: 16,
          color: "#fff",
          textShadow: "0 1px 2px rgba(0,0,0,.6)",
        }}
      >
        <h1>{title || "Click an animal for a fun fact"}</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>{images}</div>
        <p>{fact}</p>
      </div>
    </div>
  );
}
