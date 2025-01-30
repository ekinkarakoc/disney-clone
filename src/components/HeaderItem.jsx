import React from "react";

const HeaderItem = ({ name, Icon }) => {
  return (
    <div className="text-white flex items-center  gap-3 text-[15px] font-semibold cursor-pointer relative group mb-2">
      <Icon />
      <h2 className="md:block  relative group">
        {name}
        <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
      </h2>

      <span className="absolute hidden  bottom-[-6px] left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full md:block"></span>
    </div>
  );
};

export default HeaderItem;
