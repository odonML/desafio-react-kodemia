import React from "react";

function ButtonFilterHome({ children }) {
  return (
    <button
      type="button"
      className={`mx-1 hover:bg-slate-100 hover:text-indigo-600 font-small rounded-lg text-base px-2 py-1.5 text-center`}
    >
      {children}
    </button>
  );
}

export default ButtonFilterHome;
