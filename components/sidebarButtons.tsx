import React from "react";
const SidebarButtons = () => {
  return (
    <div className="fixed top-1/3 left-0 flex flex-col space-y-2 z-50">
      <a
        href=""
        className="primary-gradient border border-white text-white py-3  w-10  text-center font-semibold shadow-md hover:bg-purple-800 rotate-180 flex items-center"
        style={{ writingMode: "vertical-rl" }}
      >
        Enquire Us
      </a>
      <a
        href=""
        className="primary-gradient border border-white text-white  py-3  w-10 text-center font-semibold shadow-md hover:bg-purple-800 rotate-180  flex items-center"
        style={{ writingMode: "vertical-rl" }}
      >
        Download Price List
      </a>
    </div>
  );
};

export default SidebarButtons;
