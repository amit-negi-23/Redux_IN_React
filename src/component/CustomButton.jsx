import React, { useRef } from "react";
import { useDispatch } from "react-redux";

function CustomButton() {
  const numRef = useRef();
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch({
      type: "CHANGE_COUNT",
      payload: { num: Number(numRef.current.value) },
    });
    numRef.current.value = "";
  };

  return (
    <div className="mt-4">
      <input type="text" ref={numRef} placeholder="Number" className="w-50" />
      <button type="button" className="btn btn-success ms-3" onClick={handleChange}>
        Change Count
      </button>
    </div>
  );
}

export default CustomButton;
