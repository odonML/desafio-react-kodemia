import React from "react";

function AsideCard({ children }) {
	return (
		<div className="col-auto mt-2 mb-5 p-4 rounded-lg bg-white border">
			{children}
		</div>
	);
}

export default AsideCard;
