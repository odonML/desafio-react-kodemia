import React from "react";

function ButtonUserNameHome({ children }) {
  return (
    <button
      type="button"
      className={`text-base font-medium text-gray-900 hover:bg-neutral-100 rounded truncate px-2`}
    >
      {children}
    </button>
  );
}

export default ButtonUserNameHome;
