import React from "react";
import { useDispatch } from "react-redux";

function Buttons() {
   const dispatch =  useDispatch()

   const handleIncrement = ()=>{
    dispatch({type: 'INCREMENT'})
   }

   const handleDecrement = ()=>{
    dispatch({type: 'DECREMENT'})
   }
  return (
    <>
      <button type="button" className="btn btn-primary me-3" onClick={handleIncrement}>Inc +1</button>
      <button type="button" className="btn btn-danger" onClick={handleDecrement}>decr -1</button>
    </>
  );
}

export default Buttons;
