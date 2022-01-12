import React, { useEffect } from "react";
import * as bi from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import ButtonBlueTrans from "../../components/ButtonBlueTrans";
import FormCreatePost from "../../components/FormCreatePost/FormCreatePost";
import NavCreatePost from "../../components/NavCreatePost/NavCreatePost";
import Post from "../../services/Post";

function UpdatePost() {
	const navigate = useNavigate();
	const params = useParams();
	useEffect(() => {
		const id = params.postID;
		const get = async () => {
			const data = Post.getPostById(id);
			console.log(JSON.parse(data));
		};
		get();
	}, []);

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
						<FormCreatePost action={"edit"} />
					</div>
					<div className="w-2/6 flex items-center">
						<div className="w-full h-auto">a</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UpdatePost;