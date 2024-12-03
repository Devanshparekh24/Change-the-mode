import React, { useState } from "react";


function Color() {
    const [color, setColor] = useState(true);

    const changeColor=()=>{
        setColor(!color);
        
    }
  return (
    <>
      <div className="">
        <div
          className={`  h-[50vh] w-[25vw]  ${
            color ? " bg-amber-500" : "bg-red-400"
          }`}
        >
          {" "}
        </div>
        <div>

        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={changeColor}
        >
          Chage Color
        </button>

        </div>
      </div>
    </>
  );
  {
    /* <div className='h-[50vh] bg-blue-600'>box 2</div> */
  }
}

export default Color;
