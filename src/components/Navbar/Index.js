import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="px-6 col-span-12 h-10 border">
			<Link to="/">Home</Link>
			<Link to="/create">Create</Link>
		</nav>
	);
}

export default Navbar;
