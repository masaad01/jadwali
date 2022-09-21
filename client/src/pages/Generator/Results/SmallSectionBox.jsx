import React, { useState } from "react";
import Modal from "./Modal";
function SmallSectionBox({ course, section }) {
  const { startTime, endTime } = section;
  let color = course.color;
  let style = `hover:cursor-pointer shadow-lg leading-tight absolute start${
    startTime * 10
  }  w-full bg-gray-500 hover:bg-gray-400 
    border-l-[6px] border rounded-t rounded-l  height${
      (endTime - startTime) * 10
    } text-left  overflow-clip px-[1px] text-ellipsis md:text-base ${color} border-t-0 border-b-gray-700 border-r-0 `;
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((pre) => !pre);
  };
  return (
    <div className={style}onClick={handleClick}>
      <div className="">
        <h1
          className="text-left  font-extrabold text-xs md:text-[1.4rem]
        text-mylight sm:text-center sm:text-lg ">
          {course.symbol}
        </h1>
        {isOpen&& <Modal section={section} course={course}/>}
        <h1 className="text-[0.7rem]  text-center sm:text-[1rem] ">
          {section.startTime}-{section.endTime}&nbsp;({section.number})
        </h1>
      </div>
    </div>
  );
}

export default SmallSectionBox;
