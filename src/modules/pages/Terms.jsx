import React from "react";
import CarArrayComponent from "../components/CarArrayComponent";

export default function Terms() {
  return (
    <div className="wrapper">
      <main className="MainWrapper">
        <h2>Terms</h2>
        <div className="carsCards">
          <CarArrayComponent search="param, oprin"/>
        </div>
      </main>
    </div>
  );
}
