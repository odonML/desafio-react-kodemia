import React from "react";

function ButtonPost({ children }) {
  return (
    <button
      type="button"
      className={`hover:text-indigo-600 font-bold text-2xl tracking-tight px-2 py-1.5 text-center`}
    >
      {children}
    </button>
  );
}

export default ButtonPost;
