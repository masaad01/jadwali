import React, { useContext } from "react";

import JadwaliContext from "../../../context/jadwaliContext/JadwaliContext";

function MinimumFilter() {
  const { minNumberOfDays, dispatch } = useContext(JadwaliContext);

  const handleChange = (num) => {
    if (num > 0 && minNumberOfDays < 5)
      dispatch({ type: "SET_MIN", payload: minNumberOfDays + 1 });
    if (num < 0 && minNumberOfDays > 1)
      dispatch({ type: "SET_MIN", payload: minNumberOfDays - 1 });
  };
  return (
    <div className="mt-2 text-center flex justify-center flex-col items-center">
      {/* <h1>Choose minimum number of days per week</h1>
      <div>
        <button
          className={`rounded ml-2 ${
            minNumberOfDays === 1 ? "bg-mylight" : "bg-blue-700"
          } p-1 px-4 active:bg-mylight`}
          onClick={() => handleChange(-1)}>
          -
        </button>
        <input
          type="number"
          disabled
          value={minNumberOfDays}
          className=" mx-2 w-20 text-center bg-mylight text-blue-700 p-1 rounded mt-1"
          min="1"
          max="5"
          name="minDays"
        />
        <button
          className={`rounded  ${
            minNumberOfDays === 5 ? "bg-mylight" : "bg-blue-700"
          } p-1 px-4 active:bg-mylight`}
          onClick={() => handleChange(1)}>
          +
        </button>
      </div> 
          this is not working properly, so I am commenting it out for now*/}
    </div>
  );
}

export default MinimumFilter;
