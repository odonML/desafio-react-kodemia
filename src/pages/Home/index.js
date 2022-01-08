import React from "react";
import AsideLeft from "../../components/AsideLeft/AsideLeft";
import Posts from "../../components/Posts/Posts";
import AsideRight from '../../components/AsideRight/AsideRight';

function Home() {
	return (
		<div className="col-span-12 grid grid-cols-12 bg-gray-100">
			<AsideLeft/>
			<Posts/>
			<AsideRight />
			<footer className="px-6 col-span-12">Footer</footer>
		</div>
	);
}

export default Home;
