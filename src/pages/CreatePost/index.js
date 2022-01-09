import React from "react";
import * as icon from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import ButtonBlueTrans from "../../components/ButtonBlueTrans";

function CreatePost() {
	const navigate = useNavigate();
	return (
		<div className=" absolute w-full h-full bg-gray-100">
			<div className="relative w-full h-full col-span-12 grid grid-cols-12 p-2">
				<h1>hola</h1>
				<ButtonBlueTrans
					clase="absolute right-0 mt-2 mr-2"
					callback={() => {
						navigate("/")
					}}
				>
					<icon.BiLeftArrowAlt size={20} />
				</ButtonBlueTrans>
			</div>
		</div>
	);
}

export default CreatePost;
