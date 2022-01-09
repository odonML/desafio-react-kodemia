import React from "react";

function ButtonReactions({ children }) {
  return (
    <button
      type="button"
      className={`flex flex-row mx-1 hover:bg-slate-100 font-small rounded-lg text-sm px-2 py-1.5 text-center`}
    >
      {children}
    </button>
  );
}

export default ButtonReactions;
