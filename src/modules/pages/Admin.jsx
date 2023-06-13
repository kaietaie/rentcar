import React from "react";
import AddCarForm from "../components/AddCarFormComponent";

function Admin() {
  return (
    <div className="MainWrapper">
      <h1>Adding cars to Database</h1>
      <div className="carAddAdmin">
        <AddCarForm />
      </div>
    </div>
  );
}

export default Admin;
