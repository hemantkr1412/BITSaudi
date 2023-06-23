import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import productSuite2 from "./assets/productSuite2.png";
const imageAnimation = {
	offscreen: { scale: 0, opacity: 0 },
	// offscreen2: { scale: 1 },
	onscreen: {
		scale: 1.1,
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 260,
			damping: 50,
			rotate: 180,
		},
	},
};
const cardAnimation = {
	offscreen: { x: 100 },
	offscreen2: { x: 0 },
	onscreen: {
		x: 0,
		opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 2,
		},
	},
	onscreen2: {
		x: 100,
		opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 2,
		},
	},
};
export default function ProductSuite() {
	const { t } = useTranslation();
	const productSuiteCardData = t("Home.productsuite.container", {
		returnObjects: true,
	});
	return (
		<div className="howtousecontainer">
			<div className="howtouseheading">
				{t("Home.productsuite.heading")}
			</div>
			<div className="howtousesection">
				<div className="howtouseimageright">
					<motion.div
						variants={imageAnimation}
						initial={"offscreen"}
						whileInView={"onscreen"}
						//  animate={{ rotate: 360, scale: 1 }}
						//  viewport={{ once: true, amount: 0.3 }}
						//  transition={{ staggerChildren: 0.5 }}
					>
						<img src={productSuite2} alt="" />
					</motion.div>
				</div>

				<div className="cardsDiv">
					{productSuiteCardData.map((card) => {
						return (
							<motion.div
								variants={cardAnimation}
								initial={"offscreen"}
								whileInView={"onscreen"}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ staggerChildren: 0.5 }}>
								<Card
									sx={{
										maxWidth: 345,
										marginBottom: "3rem",
									}}
									className="cards">
									<CardContent>
										<Typography
											gutterBottom
											variant="h5"
											component="div"
											className="cardTitle">
											{card.title}
										</Typography>
										<Typography
											variant="body2"
											className="cardDesc">
											{card.description}
										</Typography>
									</CardContent>
								</Card>
							</motion.div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
// export const productSuiteCardData = [
// 	{
// 		title: "NFT Utility",
// 		desc: "Unlock new and unique possibilities in the digital realm by enabling unique digital ownership and facilitating seamless transactions with enhanced provenance, scarcity, and programmability.",
// 	},
// 	{
// 		title: "NFT as Souvenirs",
// 		desc: "A modern way to collect and preserve memories and create a lasting connection between the brands and its customers, allowing owning and commemorating unique moments, events, or experiences in a secure and verifiable way.",
// 	},
// 	{
// 		title: "Dynamic NFTs",
// 		desc: "Bring interactivity and programmability to the world of digital collectibles. This initiative will enable NFTs to change, adapt, and respond to various conditions or inputs, thereby, offering a unique experience, creating new possibilities for engagement and creativity within the NFT ecosystem.",
// 	},
// 	{
// 		title: "Non Custodial wallet",
// 		desc: "Owing to the increasing need of a NFT-friendly decentralised wallet, we present, BitWallet, which is both NFT and crypto friendly and with a super-simple UI/UX, will enhance the overall web3 experience for users.",
// 	},
// 	{
// 		title: "Digital Credentials",
// 		desc: "A secure and verifiable way to represent and authenticate individuals qualifications, skills, and achievements.Offering digital credentials will offer convenience, efficiency, and trust, revolutionizing the way credentials are issued, shared, and verified.",
// 	},
// 	{
// 		title: "Authentication and Verification",
// 		desc: "Negate the possibility of fake or fudged documents by verifying and authenticating the metadata of the digital documents using BitMemoir’s Verification service. ",
// 	},
// 	{
// 		title: "NFT Loyalty Programme",
// 		desc: "A unique initiative that enables using Non-fungible tokens (NFTs) as loyalty/reward points and coupons to engage with the customers. These NFTs may either be redeemed for multiple rewards from brands or further transferred to family, friends or acquaintances as a gift, giving brands an increased customer base.",
// 	},
// 	{
// 		title: "Skills Passport",
// 		desc: "An initiative towards creating a digital repository of verified documents and credentials for students,mapping their interests and skills, allowing them to create profiles that highlight their unique skill sets and experiences.",
// 	},
// 	{
// 		title: "Medical Passport",
// 		desc: "An effort towards mapping the medical history, creating a repository of medical documents and making the tracking of past medical conditions and diagnosis easier, thus helping in correct medical diagnosis and advice.",
// 	},
// ];
