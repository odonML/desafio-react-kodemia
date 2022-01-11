import React from "react";

function ButtonLightBorder({ children }) {
	return (
		<button
			type="button"
			className="text-gray-500 border-2 border-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
		>
			{children}
		</button>
	);
}

export default ButtonLightBorder;
