import React from "react";
import "./Home.css";
import ProductSuite from "./ProductSuite";
import img1 from "./assets/img1.png";
import solutionimg1 from "./assets/solutionimg1.png";
import solutionimg2 from "./assets/solutionimg2.png";
import solutionimg3 from "./assets/solutionimg3.png";
import solutionimg4 from "./assets/solutionimg4.png";
import solutionimg5 from "./assets/solutionimg5.png";
import solutionimg6 from "./assets/solutionimg6.png";
import digitalcertimage from "./assets/digitalcertimage.png";
import bulk from "./assets/bulk.svg";
import UseCases from "./UseCases";
import cerifycert from "./assets/cerifycert.svg";
import dataprotection from "./assets/dataprotection.svg";
import integration from "./assets/integration.svg";
import robustinfra from "./assets/robustinfra.svg";
import UserContext from "../../context/userContext/UserContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { kpiApi } from "../Scripts/apiCalls";
import QuestionBox from "./QuestionBox";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Insta from "./assets/instagramlogo.svg";
import twitter from "./assets/twitter-square-color-icon.svg";
import Linkidein from "./assets/linkedinlogo.svg";
import telegram from "./assets/telegram-icon.svg";
import { Segment } from "semantic-ui-react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
function TabPanel(props) {
	const { value } = props;
	const { t } = useTranslation();

	return (
		<div>
			{value === 0 ? (
				<QuestionBox />
			) : (
				<>
					<iframe
						width="560"
						height="315"
						src={t("Home.FAQ.videoLink")}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen></iframe>
				</>
			)}
		</div>
	);
}
const Home = () => {
	const user = useContext(UserContext);
	const navigate = useNavigate();
	const [value, setValue] = React.useState(0);
	const { t } = useTranslation();
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	// const solutionsData = [
	//   {
	//     image: solutionimg1,
	//     heading: "Digital Certificates for Universities",
	//     text: "Real-time issuing of verifiable digital certificates to students.",
	//   },
	//   {
	//     image: solutionimg2,
	//     heading: "Digital Certificates for Schools",
	//     text: "With BitMemoir, you can offer everything from grade reports to diplomas for sports, music, dance, and yearly functions.",
	//   },
	//   {
	//     image: solutionimg3,
	//     heading: "Digital Certificates for Training and Coaching Institutes",
	//     text: "Verifiable certificates for training and coaching institutions.",
	//   },
	//   {
	//     image: solutionimg4,
	//     heading: "Digital Certificates for Individuals",
	//     text: "File and certificate storage for individuals is secured via blockchain. There's no need to lug around your certificate binder.",
	//   },
	//   {
	//     image: solutionimg5,
	//     heading: "Digital Certificates for Events",
	//     text: "With BitMemoir, you can hand out prizes and attendance certificates with just a click at your next event.",
	//   },
	//   {
	//     image: solutionimg6,
	//     heading: "Digital Certificates for Destinations",
	//     text: "Digital Certificates for Destinations Verified digital souvenirs for holiday destinations.",
	//   },
	// ];

	const [certificates, setCertificates] = useState(0);
	const [souvenirs, setSouvenirs] = useState(0);

	useEffect(() => {
		poppulateCertificates();
	}, []);

	const poppulateCertificates = async () => {
		kpiApi().then((res) => {
			setCertificates(res.certificates);
			setSouvenirs(res.souvenirs);
		});
	};

	return (
		<>
			{/* About Section ------------------- */}

			<div className="aboutSectionContainer">
				<Segment
					floated="left"
					style={{
						position: "fixed",
						left: "0px",
						bottom: "50%",
						zIndex: "1000",
					}}>
					<div className="socialmedia">
						<a
							href="https://www.instagram.com/bitmemoir/"
							target="_blank"
							rel="noreferrer">
							<img
								src={Insta}
								alt="FAQLogo"
								style={{ width: "50px", height: "50px" }}
							/>
						</a>
						<hr />
						<a
							href="https://twitter.com/Bit_Memoir"
							target="_blank"
							rel="noreferrer">
							<img
								src={twitter}
								alt="FAQLogo"
								style={{ width: "40px", height: "40px" }}
							/>
						</a>
						<hr />
						<a
							href="https://www.linkedin.com/company/bitmemoir/"
							target="_blank"
							rel="noreferrer">
							<img
								src={Linkidein}
								alt="FAQLogo"
								style={{ width: "40px", height: "40px" }}
							/>
						</a>
						<hr />
						<a
							href="https://t.me/bitmemoirofficial"
							target="_blank"
							rel="noreferrer">
							<img
								src={telegram}
								alt="FAQLogo"
								style={{ width: "40px", height: "40px" }}
							/>
						</a>
					</div>
				</Segment>
				<div className="aboutsection">
					<div className="writing">
						<div className="mainheading">{t("Home.heading")}</div>
						<div className="secondheading1">
							{t("Home.heading2")}
						</div>
						<div className="secondheading">
							{t("Home.subheading")}
						</div>
						<div style={{ display: "flex", gap: "10px" }}>
							<button
								style={{
									background: "white",
									color: "var(--primary)",
								}}
								onClick={() => {
									navigate("/tryforfree");
								}}>
								{t("Home.button1")}
							</button>
							<button
								onClick={() => {
									let toScrollElement =
										document.getElementById(
											"whatisbitmemoir"
										);
									toScrollElement.scrollIntoView();
								}}>
								{t("Home.button2")}
							</button>
						</div>
					</div>
					<div className="illustration">
						<img src={img1} alt="" />
					</div>
				</div>
				<div className="aboutsectionmobile">
					<div className="illustration">
						<img src={img1} alt="" />
					</div>
					<div className="writing">
						<div className="mainheading">{t("Home.heading")}</div>
						<div className="secondheading1">
							{t("Home.heading2")}
						</div>
						<div className="secondheading">
							{t("Home.subheading")}
						</div>
						<div style={{ display: "flex", gap: "10px" }}>
							<button
								style={{
									background: "white",
									color: "var(--primary)",
								}}
								onClick={() => {
									navigate("/tryforfree");
								}}>
								{t("Home.button1")} {">"}
							</button>
							<button
								onClick={() => {
									let toScrollElement =
										document.getElementById(
											"whatisbitmemoir"
										);
									toScrollElement.scrollIntoView();
								}}>
								{t("Home.button2")}
							</button>
						</div>
					</div>
				</div>
				<div className="nextpagearrowcontainer">
					<div className="nextpagearrow"></div>
				</div>
			</div>

			{/* BitMemoir Description Section ------------------------ */}

			<div className="descriptionsectioncontainer" id="whatisbitmemoir">
				{/* <div className="descriptionsection"> */}
				<div className="writing">
					<div className="descriptionDiv">
						<div id="intro">
							<h2>{t("Home.aboutus.about")}</h2>
							<p>{t("Home.aboutus.description")}</p>
						</div>
						<Box
							sx={{
								width: "40%",
								maxWidth: "720px",
								height: "22rem",
								border: "1px solid lightgrey",
								borderRadius: "20px",
								padding: "20px",
								margin: "20px 0",
								alignSelf: "center",
								alignItems: "center",
								backgroundColor: "#D8E4F7",
							}}
							id="videoDiv">
							<iframe
								width="500"
								height="150"
								style={{ width: "100%", height: "100%" }}
								src="https://www.youtube.com/embed/YDsqedqmF84"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen></iframe>
						</Box>
					</div>
				</div>
				{/* </div> */}
			</div>

			{/* Certificates Section------------------------ */}

			{/* <div className="certificatesectioncontainer">
        <div className="certificatesissued">
          <div className="heading1">Total number of</div>
          <div className="heading2">Certificates Issued: </div>
          <div className="heading3">{certificates}</div>
        </div>
        <div className="certificatesissued">
          <div className="heading1">Total number of</div>
          <div className="heading2">Souvenirs Issued:</div>
          <div className="heading3">{souvenirs}</div>
        </div>
      </div> */}

			{/* How to use Section--------------------- */}

			<ProductSuite />

			<UseCases />

			{/* Why Bit Section ---------------------------------------- */}

			<div className="whybitcontainer">
				<div className="heading">{t("Home.features.heading")}</div>
				{t("Home.features.subheading")}
				<div className="benefitscontainer">
					<div className="benefit">
						<img src={robustinfra} alt="bit infrastructure" />
						{t("Home.features.list.heading1")}
					</div>
					<div className="benefitdivider">
						<div className="dividerleft"></div>
						<div className="dividerright"></div>
					</div>
					<div className="benefit">
						<img src={integration} alt="Bit Integration" />
						{t("Home.features.list.heading2")}
					</div>
					<div className="benefitdivider">
						<div className="dividerleft"></div>
						<div className="dividerright"></div>
					</div>
					<div className="benefit">
						<img src={dataprotection} alt="Bit Protection" />
						{t("Home.features.list.heading3")}
					</div>
					<div className="benefitdivider">
						<div className="dividerleft"></div>
						<div className="dividerright"></div>
					</div>
					<div className="benefit">
						<img src={cerifycert} alt="Bit Certificate" />
						{t("Home.features.list.heading4")}
					</div>
					<div className="benefitdivider">
						<div className="dividerleft"></div>
						<div className="dividerright"></div>
					</div>
					<div className="benefit">
						<img src={bulk} alt="Bit Bulk certs" />
						{t("Home.features.list.heading5")}
					</div>
					<div className="benefitdivider">
						<div className="dividerleft"></div>
						<div className="dividerrightwithdot">
							<div className="dot"></div>
						</div>
					</div>
					{!user.isConnected && (
						<div className="purplebutton">
							<button
								onClick={() => {
									if (user.iswalletAvailable) {
										user.login();
									} else {
										navigate("/wallet");
									}
								}}>
								{t("Home.features.connect")} {">"}
							</button>
						</div>
					)}
				</div>
			</div>

			<div className="joinContainer">
				<div className="joinContainerHeading">
					{t("Home.FAQ.heading")}
				</div>
				{/* <QuestionBox /> */}
				<Box
					sx={{
						width: "85%",
						maxWidth: "750px",
						border: "1px solid lightgrey",
						borderRadius: "20px",
						padding: "20px",
						margin: "20px",
					}}>
					<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
						<Tabs
							value={value}
							onChange={handleChange}
							aria-label="basic tabs example">
							<Tab label="FAQs" sx={{ color: "black" }} />
							<Tab label="Video FAQs" sx={{ color: "black" }} />
						</Tabs>
					</Box>
					<TabPanel
						value={value}
						// index={0}
						// users={props.users}
						// update={props.update}
					></TabPanel>
				</Box>
			</div>
		</>
	);
};

export default Home;
