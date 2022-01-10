import React from "react";
import AsideLeft from "../../components/AsideLeft/AsideLeft";
import AsideRight from "../../components/AsideRight/AsideRight";
import Posts from "../../components/Posts/Posts";

function Home() {
return (
		<div className="col-span-12 grid grid-cols-12 bg-gray-100 xl:max-w-screen-xl">
			<AsideLeft />
			<Posts />
			<AsideRight />
			<footer className="px-6 w-full">Footer</footer>
		</div>
	);

}

export default Home;
