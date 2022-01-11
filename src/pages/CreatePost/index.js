import React from "react";
import * as bi from "react-icons/bi";
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
					<bi.BiLeftArrowAlt size={20} />
				</ButtonBlueTrans>
				<div className="w-full h-full flex">
					<div className="w-4/6 h-full">
						<NavCreatePost />
						{/* Formik ----------------------------------- */}
						<FormCreatePost action={"create"} />
					</div>
					<div className="w-2/6 flex items-center">
						<div className="w-full h-auto">a</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CreatePost;
