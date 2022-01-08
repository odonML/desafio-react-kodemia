import React from "react";
import * as fa from "react-icons/fa";
import devIcons from "../../utils/icons/icons";
import AsideBlock from "../AsideBlock";
import AsideBlockSocial from "../AsideBlockSocial";
import AsideBlockTitle from "../AsideBlockTitle";
import ButtonAsideLeft from "../ButtonAsideLeft";
import ButtonBlueTrans from "../ButtonBlueTrans";

function AsideLeft() {
	return (
		<aside className="px-6 py-2 col-span-3 hidden md:block">
			{/* ------MENU----- */}
			<AsideBlock>
				<ButtonAsideLeft icon={devIcons.Home} text={"Home"} />
				<ButtonAsideLeft icon={devIcons.ReadingList} text={"Reading List"} />
				<ButtonAsideLeft icon={devIcons.Listing} text={"Listing"} />
				<ButtonAsideLeft icon={devIcons.Podcasts} text={"Podcasts"} />
				<ButtonAsideLeft icon={devIcons.Videos} text={"Videos"} />
				<ButtonAsideLeft icon={devIcons.Tags} text={"Tags"} />
				<ButtonAsideLeft icon={devIcons.FAQ} text={"FAQ"} />
				<ButtonAsideLeft icon={devIcons.Devshop} text={"Dev Shop"} />
				<ButtonAsideLeft icon={devIcons.Sponsors} text={"Sponsors"} />
				<ButtonAsideLeft icon={devIcons.About} text={"About"} />
				<ButtonAsideLeft icon={devIcons.Contact} text={"Contact"} />
			</AsideBlock>
			{/* ------OTHERS----- */}
			<AsideBlock>
				<AsideBlockTitle text={"Other"} />
				<ButtonAsideLeft
					icon={devIcons.CodeOfConduct}
					text={"Code Of Conduct"}
				/>
				<ButtonAsideLeft
					icon={devIcons.PrivacyPolicy}
					text={"Privacy Policy"}
				/>
				<ButtonAsideLeft icon={devIcons.TermsOfUse} text={"Terms Of Use"} />
			</AsideBlock>
			{/* ------REDES----- */}
			<AsideBlockSocial>
				<ButtonBlueTrans>
					<fa.FaTwitter size={20} />
				</ButtonBlueTrans>
				<ButtonBlueTrans>
					<fa.FaFacebookSquare size={20} />
				</ButtonBlueTrans>
				<ButtonBlueTrans>
					<fa.FaGithub size={20} />
				</ButtonBlueTrans>
				<ButtonBlueTrans>
					<fa.FaInstagram size={20} />
				</ButtonBlueTrans>
				<ButtonBlueTrans>
					<fa.FaTwitch size={20} />
				</ButtonBlueTrans>
			</AsideBlockSocial>
			{/* ------TAGS----- */}
			<AsideBlock>
				<AsideBlockTitle text={"Tags"} />
				<ButtonAsideLeft text={"#Angular"} />
				<ButtonAsideLeft text={"#React"} />
			</AsideBlock>
		</aside>
	);
}

export default AsideLeft;
