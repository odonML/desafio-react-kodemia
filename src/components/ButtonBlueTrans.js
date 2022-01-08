import React from "react";

function ButtonBlueTrans({ children, position=null}) {
	return (
		<button
			type="button"
			className={`${position} mx-1 text-black hover:text-indigo-500 hover:bg-indigo-200 hover:bg-opacity-4 font-small rounded-lg text-sm px-2 py-1.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600`}
		>
			{children}
		</button>
	);
}

export default ButtonBlueTrans;
