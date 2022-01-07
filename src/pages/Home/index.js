import React from "react";

function Home() {
	return (
		<div className="col-span-12 grid grid-cols-12">
			<aside className="px-6 col-span-3 h-16 border hidden md:block">
				Aside-izq
			</aside>
			<section className="px-6 col-span-12 h-16 border md:col-span-9 lg:col-span-6">
				Center
			</section>
			<aside className="px-6 col-span-3 h-16 border hidden lg:block">
				Aside-der
			</aside>
			<footer className="px-6 col-span-12">Footer</footer>
		</div>
	);
}

export default Home;
