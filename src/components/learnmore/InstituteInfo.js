import "./LearnMore.css";
import howtouseimage from "../home/assets/howtouseimage1.png";

import React from "react";
import { useTranslation } from "react-i18next";

const InstituteInfo = () => {
	const { t } = useTranslation();
	const Infotext = () => {
		const info = t("learnmore.institute.infotext", { returnObjects: true });
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
				<div className="heading">How to use BitMemoir</div>
				For educational institutions including schools, colleges, and
				universities.
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

export default InstituteInfo;
