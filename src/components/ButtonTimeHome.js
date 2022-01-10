import React from "react";

function ButtonTimeHome({ children }) {
  return (
    <button type="button" className={`text-xs text-gray-500 text-center px-3`}>
      {children}
    </button>
  );
}

export default ButtonTimeHome;
