import React from "react";
import * as icon from "react-icons/bi";
import { Link } from "react-router-dom";
import AvatarUser from "../AvatarUser";
import ButtonBlueBorder from "../ButtonBlueBorder";
import ButtonBlueTrans from "../ButtonBlueTrans";
import InputSearch from "../InputSearch";

function Navbar() {
	return (
		<nav className="px-6 col-span-12 h-10 border flex justify-between items-center">
			<div className="flex items-center">
				<Link to="/">
					<img
						className="w-8 h-7"
						src="https://res.cloudinary.com/practicaldev/image/fetch/s--T8ep-K_P--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/3/13d3b32a-d381-4549-b95e-ec665768ce8f.png"
						alt="logo"
					/>
				</Link>
				<InputSearch />
			</div>

			<div className="flex items-center">
				<Link to="/new">
					<ButtonBlueBorder>Create post</ButtonBlueBorder>
				</Link>
				<ButtonBlueTrans>
					<icon.BiBell size={25} />
				</ButtonBlueTrans>
				<AvatarUser
					img="https://res.cloudinary.com/practicaldev/image/fetch/s--huswOyCZ--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/212929/a8f974f4-40e6-48df-9b84-debd1a207e38.jpeg"
					text="imagen del usuario principal"
				/>
			</div>
		</nav>
	);
}

export default Navbar;
