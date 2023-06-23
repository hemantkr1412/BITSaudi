import "./LearnMore.css";
import howtouseimage from "../home/assets/howtouseimage3.png";

import React from "react";
import { useTranslation } from "react-i18next";

const Individualinfo = () => {
	const { t } = useTranslation();
	const infotext = t("learnmore.individual.infotext");
	return (
		<div className="learnmorepage">
			<div className="headingsection">
				<div className="heading">
					{t("learnmore.destination.heading")}
				</div>
				{t("learnmore.individual.subheading")}
			</div>
			<div className="infosection">
				<div className="infotext">{infotext}</div>
				<img src={howtouseimage} alt="How to use BitMemoir" />
			</div>
			<div className="infosectionmobile">
				<img src={howtouseimage} alt="How to use BitMemoir" />
				<div className="infotext">{infotext}</div>
			</div>
		</div>
	);
};

export default Individualinfo;
