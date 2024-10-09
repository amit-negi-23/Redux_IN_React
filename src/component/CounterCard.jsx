import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowCount from "./ShowCount";
import Buttons from "./Buttons";
import CustomButton from "./CustomButton";

function CounterCard() {
  return (
    <div className="card p-4 mt-5">
      <div className="card-body">
        <ShowCount />
        <Buttons />
        <CustomButton/>
      </div>
    </div>
  );
}

export default CounterCard;
