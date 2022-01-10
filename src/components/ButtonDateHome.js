import React from "react";

function ButtonDateHome({ children }) {
  return (
    <button
      type="button"
      className={`flex text-sm text-gray-600 hover:text-zinc-900 text-center px-2`}
    >
      {children}
    </button>
  );
}

export default ButtonDateHome;
