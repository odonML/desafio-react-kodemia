import React from "react";

function ButtonBlueBorder({ children }) {
	return (
		<button
			type="button"
			className="mx-1 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-small rounded-lg text-sm px-5 py-1.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600"
		>
			{children}
		</button>
	);
}

export default ButtonBlueBorder;
