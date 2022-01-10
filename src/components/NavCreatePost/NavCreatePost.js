import React from "react";
import ButtonBlueTrans from "../ButtonBlueTrans";
import LogoNav from "../LogoNav";

function NavCreatePost() {
	return (
		<nav className="w-full h-12 px-3 flex justify-between items-center">
			<div className="w-auto flex items-center">
				<LogoNav />
				<p className="px-2">Create Post</p>
				<select
					id="countries"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-auto p-2.5"
				>
					<option>Personal</option>
					<option>Freeda</option>
				</select>
			</div>
			<div className="w-auto flex items-center">
				<ButtonBlueTrans>Edit</ButtonBlueTrans>
				<ButtonBlueTrans>Preview</ButtonBlueTrans>
			</div>
		</nav>
	);
}

export default NavCreatePost;
