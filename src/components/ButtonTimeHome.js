import React from "react";

function ButtonTimeHome({ children }) {
  return (
    <button type="button" className={`text-xs text-center px-1`}>
      {children}
    </button>
  );
}

export default ButtonTimeHome;
