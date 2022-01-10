import React from "react";

function ButtonBlueTrans({ children, clase="", callback = null}) {
	return (
		<button
			type="button"
			className={`${clase} mx-1 text-black hover:text-indigo-500 hover:bg-indigo-200 hover:bg-opacity-4 font-small rounded-lg text-sm px-2 py-1.5 text-center`}
			onClick={callback}
		>
			{children}
		</button>
	);
}

export default ButtonBlueTrans;
