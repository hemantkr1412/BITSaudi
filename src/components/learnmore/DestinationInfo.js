import "./LearnMore.css";
import howtouseimage from "../home/assets/howtouseimage2.png";

import React from "react";
import { useTranslation } from "react-i18next";

const DestinationInfo = () => {
	const { t } = useTranslation();
	const Infotext = () => {
		const info = t("learnmore.destination.infotext", {
			returnObjects: true,
		});
		return (
			<ol>
				{info.map((infotext, index) => {
					return <li key={index}>{infotext.text}</li>;
				})}
			</ol>
		);
	};
	return (
		<div className="learnmorepage">
			<div className="headingsection">
				<div className="heading">
					{t("learnmore.destination.heading")}
				</div>
				{t("learnmore.destination.subheading")}
			</div>
			<div className="infosection">
				<div className="infotext">
					<Infotext />
				</div>
				<img src={howtouseimage} alt="How to use BitMemoir" />
			</div>
			<div className="infosectionmobile">
				<img src={howtouseimage} alt="How to use BitMemoir" />
				<div className="infotext">
					<Infotext />
				</div>
			</div>
		</div>
	);
};

export default DestinationInfo;
