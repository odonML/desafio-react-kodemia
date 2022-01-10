import React from "react";
import * as icon from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import ButtonBlueTrans from "../../components/ButtonBlueTrans";
import FormCreatePost from "../../components/FormCreatePost/FormCreatePost";
import NavCreatePost from "../../components/NavCreatePost/NavCreatePost";

function CreatePost() {
	const navigate = useNavigate();
	return (
		<div className=" absolute w-full h-full bg-gray-100">
			<div className="relative w-full h-full ">
				<ButtonBlueTrans
					clase="absolute right-0 mt-2 mr-2"
					callback={() => {
						navigate("/");
					}}
				>
					<icon.BiLeftArrowAlt size={20} />
				</ButtonBlueTrans>
				<div className="w-full h-full">
					<div className="w-4/6 h-full">
						<NavCreatePost />
						<FormCreatePost />
					</div>
				</div>
			</div>
		</div>
	);
}

export default CreatePost;
