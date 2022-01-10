import React from "react";
import * as icon from "react-icons/bi";
import { Link } from "react-router-dom";
import AvatarUser from "../AvatarUser";
import ButtonBlueBorder from "../ButtonBlueBorder";
import ButtonBlueTrans from "../ButtonBlueTrans";
import InputSearch from "../InputSearch";
import LogoNav from '../LogoNav';

function Navbar() {
	return (
		<nav className="px-3 w-full h-10 border flex justify-between items-center xl:max-w-screen-xl">
			<div className="flex items-center">
				<ButtonBlueTrans clase="block md:hidden">
					<icon.BiMenu size={20} />
				</ButtonBlueTrans>

				<Link to="/">
					<LogoNav />
				</Link>
				<InputSearch />
			</div>

			<div className="flex items-center">
				<Link to="/new" className="hidden md:block">
					<ButtonBlueBorder>Create post</ButtonBlueBorder>
				</Link>
				<ButtonBlueTrans clase="block md:hidden">
					<icon.BiSearch size={20} />
				</ButtonBlueTrans>
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
