import React from "react";
import * as icon from "react-icons/bi";
import ButtonBlueTrans from "./ButtonBlueTrans";

function InputSearch() {
	return (
		<div className="mx-2 relative flex items-center">
			<input
				type="text"
				className=" p-2 w-80 h-8 border border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500"
				placeholder="Search..."
			/>
			<ButtonBlueTrans position="absolute right-0">
				<icon.BiSearch size={20} />
			</ButtonBlueTrans>
		</div>
	);
}

export default InputSearch;
