const createPost = async (data) => {
	const obj = {
		...data,
		reactions: {
			likes: 0,
			unicorn: 0,
			save: 0,
		},
	};
	const response = await fetch(
		"https://desafio-kodemia-backend.herokuapp.com/posts",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(obj),
		}
	);
	return response.json();
};

export default {
	createPost,
};
