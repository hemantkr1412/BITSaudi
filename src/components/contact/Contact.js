import "./Contact.css";
import linkedinlogo from "../footer/assets/linkedinlogo.svg";
import instagramlogo from "../footer/assets/instagramlogo.svg";
import Twitterlogo from "../footer/assets/twitter-square-color-icon.svg";
import Telegram from "../footer/assets/telegram-icon.svg";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { SiMarketo } from "react-icons/si";
import { useTranslation } from "react-i18next";

const Contact = () => {
	const { t } = useTranslation();
	return (
		<div className="contactpage">
			<h3>{t("contact.reachout")}</h3>
			<div>
				<div>
					<div className="flex justify-center">
						<IoLocationOutline
							style={{ fontWeight: "800", fontSize: "3rem" }}
							className="text-4xl font-bold"
						/>
						<div
							style={{ marginTop: "auto", marginBottom: "auto" }}
							className="text-xl font-bold">
							{t("contact.locationText")}
						</div>
					</div>

					<p className="font-bold">{t("contact.company")}</p>
					<p className="font-bold">{t("contact.building")}</p>
					<p className="font-bold">{t("contact.address")}</p>
					<p className="font-bold">{t("contact.country")}</p>
				</div>
			</div>
			<hr style={{ width: "50vw" }} />
			<div className="flex">
				<HiOutlineMail
					style={{ fontWeight: "700", fontSize: "2rem" }}
					className="text-4xl font-bold"
				/>
				<div
					style={{ marginTop: "auto", marginBottom: "auto" }}
					className="text-xl font-bold">
					: {t("contact.supportEmail")}
				</div>
			</div>
			<br />
			<div className="flex">
				{" "}
				<SiMarketo
					style={{ fontWeight: "700", fontSize: "2rem" }}
					className="text-4xl font-bold"
				/>
				<div
					style={{ marginTop: "auto", marginBottom: "auto" }}
					className="text-xl font-bold">
					: {t("contact.marketingEmail")}
				</div>
			</div>
			<h3>{t("contact.checkSocial")}</h3>
			<div className="contactsocialcontainer">
				<img
					src={linkedinlogo}
					alt="BitMemoir Linkedin"
					height="100"
					width="50"
					onClick={() => {
						window.open(
							"https://www.linkedin.com/company/bitmemoir-latam/"
						);
					}}
				/>
				<img
					src={instagramlogo}
					alt="BitMemoir Instagram"
					height="200"
					width="120"
					onClick={() => {
						window.open(
							"https://instagram.com/bitmemoir_latam?igshid=YmMyMTA2M2Y="
						);
					}}
				/>
				<img
					src={Twitterlogo}
					alt=""
					height="90"
					width="40"
					onClick={() => {
						window.open(
							"https://twitter.com/bitmemoir_latam?s=21&t=caq4RpG9bzxouodNg7bJBw"
						);
					}}
				/>
				<img
					src={Telegram}
					style={{
						marginLeft: "30px",
					}}
					alt=""
					height="100"
					width="50"
					onClick={() => {
						window.open("https://t.me/bitmemoirofficial");
					}}
				/>
			</div>
		</div>
	);
};

export default Contact;
