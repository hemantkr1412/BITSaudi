import React from "react";
import "./Roadmap.css";
import { useTranslation } from "react-i18next";
export const Roadmap = () => {
	const { t } = useTranslation();
	return (
		<div className="roadmappage">
			<div className="heading">{t("Roadmap.heading")}</div>
			<div className="qbox">
				<div className="cardroadmap">
					<div className="containerroadmap">
						<div className="headingq">
							{t("Roadmap.roadmap.Q2.heading")}
						</div>
						<ul className="listq">
							<li>{t("Roadmap.roadmap.Q2.point1")}</li>
							<li>{t("Roadmap.roadmap.Q2.point2")}</li>
							<li>{t("Roadmap.roadmap.Q2.point3")}</li>
							<li>{t("Roadmap.roadmap.Q2.point4")}</li>
							<li>{t("Roadmap.roadmap.Q2.point5")}</li>
						</ul>
					</div>
				</div>
				<div className="cardroadmap">
					<div className="containerroadmap">
						<div className="headingq">
							{t("Roadmap.roadmap.Q3.heading")}
						</div>
						<ul className="listq">
							<li>{t("Roadmap.roadmap.Q3.point1")}</li>
							<li>{t("Roadmap.roadmap.Q3.point2")}</li>
							<li>{t("Roadmap.roadmap.Q3.point3")}</li>
							<li>{t("Roadmap.roadmap.Q3.point4")}</li>
							<li>{t("Roadmap.roadmap.Q3.point5")}</li>
							<li>{t("Roadmap.roadmap.Q3.point6")}</li>
						</ul>
					</div>
				</div>
				<div className="cardroadmap">
					<div className="containerroadmap">
						<div className="headingq">
							{t("Roadmap.roadmap.Q4.heading")}
						</div>
						<ul className="listq">
							<li>{t("Roadmap.roadmap.Q4.point1")}</li>
							<li>{t("Roadmap.roadmap.Q4.point2")}</li>
							<li>{t("Roadmap.roadmap.Q4.point3")}</li>
							<li>{t("Roadmap.roadmap.Q4.point4")}</li>
							<li>{t("Roadmap.roadmap.Q4.point5")}</li>
							<li>{t("Roadmap.roadmap.Q4.point6")}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
