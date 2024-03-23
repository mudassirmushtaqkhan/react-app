import React, { useState } from "react";

function Usestate() {
  const [counter, Setcounter] = useState(1);
  const [color,Setcolor]= useState('green');

  function changeColor(color){
    Setcolor(color);

  }

  function Addvalue() {
    Setcounter(counter + 1);

    var audio = new Audio("/public/button-124476.mp3");
    audio.play();
  }
  function RemoveValue() {
    if (counter > 1) {
      Setcounter(counter - 1);
      var audio = new Audio("/public/button-124476.mp3");
      audio.play();
    }
  }
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center flex-col bg-gray-500">
        <div className=" border border-white px-32 py-14 rounded-md flex items-center" style={{backgroundColor: color}}>
          <h1 className="mt-5 text-center font-bold text-8xl text-white ">
            {counter}
          </h1>
        </div>

        <div className="flex items-center justify-center mt-5">
          <button
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={Addvalue}
          >
            Add Value
          </button>{" "}
          {"  "}
          <button
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={RemoveValue}
          >
            Remove Value
          </button>
        </div>
        <div>
          <div className=" flex gap-2">
            <button className="  text-black bg-gray-200  px-10 py-2 rounded-md mb-5" onClick={()=> changeColor('red')}>
              {" "}
              Red{" "}
            </button>
            <button className="  text-black bg-gray-200  px-10 py-2 rounded-md mb-5" onClick={()=> changeColor('blue')}>
              {" "}
              Blue{" "}
            </button>
            <button className="  text-black bg-gray-200  px-10 py-2 rounded-md mb-5" onClick={()=> changeColor('green')}>
              {" "}
              Green{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Usestate;
