import React from "react";

function ButtonLightSolid({ children }) {
	return (
		<button
			type="button"
			className="ml-1 text-gray-900 bg-gray-100 hover:bg-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
		>
			{children}
		</button>
	);
}

export default ButtonLightSolid;
