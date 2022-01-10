import React from "react";
import AsideCard from "../AsideCard";
import AsideImg from "../AsideImg";

function AsideRight() {
	return (
		<aside className="px-2 py-2 col-span-3 h-16 hidden lg:block">
			<AsideCard>
				<AsideImg
					img="https://res.cloudinary.com/practicaldev/image/fetch/s--9vVmp1An--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x2ub0oz6n38corcwxqg8.png"
					text="imagen card"
				/>
				<p className="text-md font-normal text-black">
					CodeNewbie Challenge 2022 |Write More|Start Coding|Code More|Get a
					Job|Learn in Public| → Join Cohort 1 by Jan 30th   
				</p>
			</AsideCard>
		</aside>
	);
}

export default AsideRight;
