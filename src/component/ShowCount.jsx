import React from "react";
import { useSelector } from "react-redux";

function ShowCount() {
  const count = useSelector((state) => state.count);
  return (
    <>
      <h3 className="card-title">Counter Functionality</h3>
      <p className="card-text mb-5 mt-4 fw-bold fs-5">
        Count value: <span className="text-warning">{count}</span>
      </p>
    </>
  );
}

export default ShowCount;
