import React from "react";
import * as ai from "react-icons/ai";
import * as bi from "react-icons/bi";
import * as ri from "react-icons/ri";
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
									<input
										className="w-36 text-gray-500 border-2 border-gray-400 font-medium rounded-lg text-sm p-2 mr-2 mb-2"
										placeholder="Add a cover image"
									/>
									<input
										type="text"
										id="large-input"
										className="block mb-2 py-2 w-full text-5xl font-medium text-gray-900 sm:text-md outline-none"
										placeholder="Title Post..."
									/>
									<input
										type="text"
										id="large-input"
										className="block mb-2 py-2 w-full text-md font-medium text-gray-900 sm:text-md outline-none"
										placeholder="Add up to 4 tags..."
									/>
									<div className="w-full h-auto flex justify-between">
										<div>
											<ButtonBlueTrans>
												<ai.AiOutlineBold size={25} />
											</ButtonBlueTrans>
											<ButtonBlueTrans>
												<ai.AiOutlineItalic size={25} />
											</ButtonBlueTrans>
											<ButtonBlueTrans>
												<bi.BiLink size={25} />
											</ButtonBlueTrans>
											<ButtonBlueTrans>
												<bi.BiListOl size={25} />
											</ButtonBlueTrans>
											<ButtonBlueTrans>
												<bi.BiListUl size={25} />
											</ButtonBlueTrans>
											<ButtonBlueTrans>
												<bi.BiHeading size={25} />
											</ButtonBlueTrans>
											<ButtonBlueTrans>
												<ri.RiDoubleQuotesL size={25} />
											</ButtonBlueTrans>

											<ButtonBlueTrans>
												<bi.BiCode size={25} />
											</ButtonBlueTrans>
											<ButtonBlueTrans>
												<bi.BiCodeBlock size={25} />
											</ButtonBlueTrans>
											<ButtonBlueTrans>
												<bi.BiImage size={25} />
											</ButtonBlueTrans>
										</div>
										<div>
											<ButtonBlueTrans>
												<bi.BiDotsVerticalRounded size={25} />
											</ButtonBlueTrans>
										</div>
									</div>
									<textarea
										id="message"
										rows="4"
										class="block py-2 w-full text-lg text-gray-900 outline-none"
										placeholder="Write your post content here..."
									></textarea>
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
					<div className="w-2/6 flex items-center">
						<div className="w-full h-auto">a</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CreatePost;
