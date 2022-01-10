import React from "react";
import * as ai from "react-icons/ai";
import * as bi from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import ButtonBlueSolid from "../../components/ButtonBlueSolid";
import ButtonBlueTrans from "../../components/ButtonBlueTrans";
import ButtonLightSolid from "../../components/ButtonLightSolid";
import NavCreatePost from "../../components/NavCreatePost/NavCreatePost";

function CreatePost({ action = "create" }) {
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
						{/* Form */}
						<div className="w-full h-5/6 max-h-full flex flex-col items-end">
							<div className="w-11/12 h-full rounded-lg bg-white border flex flex-col items-center justify-center">
								<form className="w-5/6 h-5/6">
									<h1>form</h1>
								</form>
							</div>
							{/* BOTONES */}
							<div className="w-11/12 p-2 flex items-center">
								{action == "create" ? (
									<div>
										<ButtonBlueSolid>Publish</ButtonBlueSolid>
										<ButtonLightSolid>Save draft</ButtonLightSolid>
									</div>
								) : (
									<ButtonBlueSolid>Edit</ButtonBlueSolid>
								)}
								<ButtonLightSolid>
									<ai.AiOutlineSetting size={20} />
								</ButtonLightSolid>
								<ButtonLightSolid>Revert new changes</ButtonLightSolid>
							</div>
						</div>
						{/* Form */}
					</div>
					<div className="w-2/6 flex items-center border border-blue-800">
						<div className="w-full h-5/6  border border-red-500">
							a
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CreatePost;
