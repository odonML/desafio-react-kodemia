import React from "react";
import * as ai from "react-icons/ai";
import * as bi from "react-icons/bi";
import * as ri from "react-icons/ri";
import ButtonBlueTrans from "./ButtonBlueTrans";

function ButtonsFormCreatePost() {
	return (
		<div className="w-full h-auto flex justify-between">
			<div>
				<ButtonBlueTrans>
					<ai.AiOutlineBold size={25} />
				</ButtonBlueTrans>
				<ButtonBlueTrans>
					<ai.AiOutlineItalic size={25} />
				</ButtonBlueTrans>
				<ButtonBlueTrans>
					<bi.BiLink size={25} />
				</ButtonBlueTrans>
				<ButtonBlueTrans>
					<bi.BiListOl size={25} />
				</ButtonBlueTrans>
				<ButtonBlueTrans>
					<bi.BiListUl size={25} />
				</ButtonBlueTrans>
				<ButtonBlueTrans>
					<bi.BiHeading size={25} />
				</ButtonBlueTrans>
				<ButtonBlueTrans>
					<ri.RiDoubleQuotesL size={25} />
				</ButtonBlueTrans>

				<ButtonBlueTrans>
					<bi.BiCode size={25} />
				</ButtonBlueTrans>
				<ButtonBlueTrans>
					<bi.BiCodeBlock size={25} />
				</ButtonBlueTrans>
				<ButtonBlueTrans>
					<bi.BiImage size={25} />
				</ButtonBlueTrans>
			</div>
			<div>
				<ButtonBlueTrans>
					<bi.BiDotsVerticalRounded size={25} />
				</ButtonBlueTrans>
			</div>
		</div>
	);
}

export default ButtonsFormCreatePost;
