import React from "react";

function ButtonTagHome({ children }) {
  return (
    <button
      type="button"
      className={`mx-1 hover:bg-slate-100 hover:border border-gray-400 font-small rounded-lg text-sm px-1 py-1.5 text-center`}
    >
      {children}
    </button>
  );
}

export default ButtonTagHome;
