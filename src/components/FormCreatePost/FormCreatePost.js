import { Field, Form, Formik } from "formik";
import React from "react";
import * as ai from "react-icons/ai";
import ButtonBlueSolid from "../../components/ButtonBlueSolid";
import ButtonLightSolid from "../../components/ButtonLightSolid";
import Post from "../../services/Post";
import ButtonsFormCreatePost from "../ButtonsFormCreatePost";

function FormCreatePost({ action }) {
	return (
		<Formik
			initialValues={{
				title: "",
				tags: [],
				img: "",
				content: "",
				date: "",
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
				
				await Post.createPost(valores);
				resetForm();
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
									class="block py-2 w-full text-lg text-gray-900 outline-none"
									placeholder="Write your post content here..."
								></Field>
							</div>
						</div>
						{/* BOTONES */}
						<div className="w-11/12 p-2 flex items-center">
							{action === "create" ? (
								<div>
									<ButtonBlueSolid type="submit">Publish</ButtonBlueSolid>
									<ButtonLightSolid>Save draft</ButtonLightSolid>
								</div>
							) : (
								<ButtonBlueSolid type="submit">Edit</ButtonBlueSolid>
							)}
							<ButtonLightSolid>
								<ai.AiOutlineSetting size={20} />
							</ButtonLightSolid>
							<ButtonLightSolid>Revert new changes</ButtonLightSolid>
						</div>
					</Form>
				</div>
			)}
		</Formik>
	);
}

export default FormCreatePost;
