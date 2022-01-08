import React from "react";
import * as fa from "react-icons/fa";
import devIcons from "../../utils/icons/icons";
import AsideBlock from "../AsideBlock";
import AsideBlockSocial from "../AsideBlockSocial";
import AsideBlockTitle from "../AsideBlockTitle";
import AsideCard from "../AsideCard";
import AsideImg from "../AsideImg";
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
			<AsideCard>
				<AsideImg
					img="https://res.cloudinary.com/practicaldev/image/fetch/s--pVCMYZWJ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://scontent-lga3-1.cdninstagram.com/vp/7c898e2c9e9fa71f72dd5d422d444549/5DFE1BFA/t51.2885-15/fr/e15/s1080x1080/57390242_386431405416711_440644832181536446_n.jpg%3F_nc_ht%3Dscontent-lga3-1.cdninstagram.com"
					text="imagen card"
				/>
				<p className="text-lg font-medium text-indigo-500">
					Do you have your sticker pack yet?
				</p>
			</AsideCard>
			<AsideCard>
				<p className="text-lg font-normal text-black">
					DEV runs on 100% open source code known as <span className="text-indigo-500">Forem</span>. Contribute to the
					codebase or host your own!
				</p>
			</AsideCard>
		</aside>
	);
}

export default AsideLeft;
