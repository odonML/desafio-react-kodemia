import { Field, Form, Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import * as ai from "react-icons/ai";
import * as bi from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import ButtonBlueSolid from "../../components/ButtonBlueSolid";
import ButtonBlueTrans from "../../components/ButtonBlueTrans";
import ButtonLightSolid from "../../components/ButtonLightSolid";
import ButtonsFormCreatePost from "../../components/ButtonsFormCreatePost";
import NavCreatePost from "../../components/NavCreatePost/NavCreatePost";
import Post from "../../services/Post";

function UpdatePost() {
	const formikRef = useRef();
	const [datos, setDatos] = useState({});
	const navigate = useNavigate();
	const params = useParams();

	useEffect(() => {
		const get = async () => {
			const response = await Post.getPostById(params.postID);
			console.log("peticion", response);
			setDatos(response);
			console.log("estado", datos);

			// ----------------------------
			formikRef.current.setFieldValue("title", response.title);
			formikRef.current.setFieldValue("img", response.img);
			formikRef.current.setFieldValue("tags", response.tags);
			formikRef.current.setFieldValue("content", response.content);
		};
		get();
	}, [params.postID]);

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
						<Formik
							innerRef={formikRef}
							initialValues={{
								title: "",
							}}
							validate={(valores) => {
								let errores = {};
								if (!valores.img) {
									errores.img = "Por favor ingresa el link ";
								}
								if (!valores.title) {
									errores.title = "no hay titulo";
								}
								if (!valores.content) {
									errores.content = "Es obligatorio agregar c";
								}
								return errores;
							}}
							onSubmit={async (valores, { resetForm }) => {
								const response = await Post.updatePost(valores, datos._id);
								resetForm();
								console.log("valores", response);
							}}
						>
							{({ errors }) => (
								<div className="w-full h-5/6 max-h-full flex flex-col items-end">
									<Form className="w-11/12">
										<div className="w-full h-auto px-7 py-5 bg-white rounded-lg">
											<div>
												<Field
													className="w-36 text-gray-500 border-2 border-gray-400 font-medium rounded-lg text-sm p-2 mr-2 mb-2"
													type="text"
													name="img"
													placeholder="Add a cover image"
												/>
											</div>

											<div>
												<Field
													type="text"
													name="title"
													className="block mb-2 py-2 w-full text-5xl font-medium text-gray-900 sm:text-md outline-none"
													placeholder="Title Post..."
												/>
											</div>

											<div>
												<Field
													type="text"
													name="tags"
													className="block mb-2 py-2 w-full text-md font-medium text-gray-900 sm:text-md outline-none"
													placeholder="Add up to 4 tags..."
												/>
											</div>

											<ButtonsFormCreatePost />

											<div>
												<Field
													as="textarea"
													name="content"
													rows="4"
													className="block py-2 w-full text-lg text-gray-900 outline-none"
													placeholder="Write your post content here..."
												></Field>
											</div>
										</div>
										{/* BOTONES */}
										<div className="w-11/12 p-2 flex items-center">
											<ButtonBlueSolid type="submit">Edit</ButtonBlueSolid>
											<ButtonLightSolid>
												<ai.AiOutlineSetting size={20} />
											</ButtonLightSolid>
											<ButtonLightSolid>Revert new changes</ButtonLightSolid>
										</div>
									</Form>
								</div>
							)}
						</Formik>
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
