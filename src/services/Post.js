const URL = "https://desafio-kodemia-backend.herokuapp.com/posts";

const getPosts = async () => {
	const response = await fetch(URL);
	return response.json();
};

const getPostById = async (id) => {
	const response = await fetch(`${URL}/${id}`);
	return response.json()
}

const createPost = async (data) => {
	const obj = {
		...data,
		reactions: {
			likes: 0,
			unicorn: 0,
			save: 0,
		},
	};
	const response = await fetch(URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(obj),
	});
	return response.json();
};


const upDatePost = async (data, id) => {
	const response = await fetch(`${URL}/${id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	return response.json();
};

export default {
	getPosts,
	getPostById,
	createPost,
	upDatePost,
};
