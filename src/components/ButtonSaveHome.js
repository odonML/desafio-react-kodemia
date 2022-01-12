import React from "react";

function ButtonSaveHome({ children }) {
  return (
    <button
      type="button"
      className={`bg-teal-300 hover:bg-teal-400 focus:ring-4 font-small rounded-lg text-sm px-3 py-1.5 m-2 text-center`}
    >
      {children}
    </button>
  );
}

export default ButtonSaveHome;
