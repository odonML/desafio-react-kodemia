import React from "react";

function ButtonBlueSolid({ children }) {
	return (
		<button
			type="button"
			className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
		>
			{children}
		</button>
	);
}

export default ButtonBlueSolid;
