import React from "react";

function ButtonDelHome({ children }) {
  return (
    <button
      type="button"
      className={`bg-rose-600 hover:bg-rose-700 focus:ring-4 font-small rounded-lg text-white text-sm px-3 py-1.5 m-2 text-center`}
    >
      {children}
    </button>
  );
}

export default ButtonDelHome;
