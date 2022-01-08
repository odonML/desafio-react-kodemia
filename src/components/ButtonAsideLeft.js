import React from "react";

function ButtonAsideLeft({ icon = null, text }) {
	return (
		<button
			type="button"
			className="w-full flex font-medium rounded-md text-sm px-3 py-2.5 text-left mr-2 text-gray-400 hover:text-indigo-500 hover:bg-indigo-100"
		>
			{icon !== null ? <img className="w-5 h-5" src={icon} alt={text} /> : ""}
			<p className="px-2 text-md">{text}</p>
		</button>
	);
}

export default ButtonAsideLeft;
