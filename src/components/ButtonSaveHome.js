import React from "react";

function ButtonSaveHome({ children, click = null }) {
	return (
		<button
			onClick={click}
			type="button"
			className={`bg-teal-300 hover:bg-neutral-400 focus:ring-4 font-small rounded-lg text-sm px-3 py-1.5 m-2 text-center`}
		>
			{children}
		</button>
	);
}

export default ButtonSaveHome;
