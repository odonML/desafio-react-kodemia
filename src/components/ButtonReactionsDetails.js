import React from "react";

function ButtonReactionsDetails({ children, number }) {
  return (
    <button className="flex gap-3 md:flex-col md:items-center hover:bg-red-300 hover:rounded-full">
      <span>{children}</span>
      <span>{number}</span>
    </button>
  );
}

export default ButtonReactionsDetails;
