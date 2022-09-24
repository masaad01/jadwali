import React, { useState } from "react";
import Modal from "./Modal";
function BigSectionBox({ course, section }) {
  let { startTime, endTime } = section;
  let color = course.color;
  const [isOpen, setIsOpen] = useState(false);
  const doubleToStringTime = (time) => {
    const str = time.toString().split(".")
    let hours = str[0]
    let minutes = str.length>1 ? "30":"00"
    return `${hours}:${minutes}`
  };

  return (
    <div
      onClick={()=>setIsOpen(true)}
      className={`shadow-lg hover:cursor-pointer  hover:bg-gray-400  flex  items-center xsm:justify-center  leading-tight absolute start${
        startTime * 10
      }  w-full bg-gray-500  
    border-l-[6px] border rounded-t rounded-l  height${
      (endTime - startTime) * 10
    } h-100 overflow-clip px-[1px] text-ellipsis md:text-base ${color} border-t-0 border-b-gray-700 border-r-0  `}>
      <div>
        {isOpen&&<Modal close={()=>setIsOpen(false)} isOpen={isOpen }section={section} course={course} />}
        <div className="">
          <h1 className="text-base text-center text-mylight font-extrabold hidden lg:block">
            {endTime - startTime > 1.5
              ? course.name.substring(0, 40)
              : course.name.substring(0, 22)}
            ..(
            <span className="text-lg font-medium text-white">
              {section.number}
            </span>
            )
          </h1>
          <h1
            className="text-center font-extrabold 
          text-mylight sm:text-xl lg:hidden">
            {course.symbol.toUpperCase()}
          </h1>
          <h1 className="text-center sm:text-[1.2rem] lg:hidden">
            {section.number}
          </h1>
          <h1 className="text-[0.7rem]  xsm:text-center text-left sm:text-[1rem] ">
          {doubleToStringTime(section.startTime)}-{doubleToStringTime(section.endTime)}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default BigSectionBox;
