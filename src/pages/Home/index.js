import React from "react";
import Posts from "../../components/Posts/Posts";

function Home() {
	return (
		<div className="col-span-12 grid grid-cols-12">
			<aside className="px-6 col-span-3 h-16 border hidden md:block">
				Aside-izq
			</aside>
			<Posts/>
			<aside className="px-6 col-span-3 h-16 border hidden lg:block">
				Aside-der
			</aside>
			<footer className="px-6 col-span-12">Footer</footer>
		</div>
	);
}

export default Home;
