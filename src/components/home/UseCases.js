import school from "./assets/school.png";
import stethoscope from "./assets/stethoscope.png";
import individuals from "./assets/individuals.png";
import events from "./assets/events.png";
import hospitality from "./assets/hospitality.png";
import business from "./assets/business.png";
import government from "./assets/government.png";
import employers from "./assets/employers.png";
import { useTranslation } from "react-i18next";

export default function UseCases() {
	const { t } = useTranslation();
	const useCases = [
		{
			field: t("Home.usecases.container.field1.field"),
			detail: `${t("Home.usecases.container.field1.detail.detail1")} /
            ${t("Home.usecases.container.field1.detail.detail2")}`,
			img: school,
		},
		{
			field: t("Home.usecases.container.field2.field"),
			detail: `${t("Home.usecases.container.field2.detail.detail1")} /
            ${t("Home.usecases.container.field2.detail.detail2")}`,
			img: stethoscope,
		},
		{
			field: t("Home.usecases.container.field3.field"),
			detail: t("Home.usecases.container.field3.detail"),
			img: individuals,
		},
		{
			field: t("Home.usecases.container.field4.field"),
			detail: t("Home.usecases.container.field4.detail"),
			img: events,
		},
		{
			field: t("Home.usecases.container.field5.field"),
			detail: t("Home.usecases.container.field5.detail"),
			img: hospitality,
		},
		{
			field: t("Home.usecases.container.field6.field"),
			detail: `${t("Home.usecases.container.field6.detail.detail1")} /
            ${t("Home.usecases.container.field6.detail.detail2")} /
            ${t("Home.usecases.container.field6.detail.detail3")} /
            ${t("Home.usecases.container.field6.detail.detail4")} /
            ${t("Home.usecases.container.field6.detail.detail5")}`,
			img: business,
		},
		{
			field: t("Home.usecases.container.field7.field"),
			detail: `${t("Home.usecases.container.field7.detail.detail1")} /
				${t("Home.usecases.container.field7.detail.detail2")} /
				${t("Home.usecases.container.field7.detail.detail3")} /
				${t("Home.usecases.container.field7.detail.detail4")}`,
			img: government,
		},
		{
			field: t("Home.usecases.container.field8.field"),
			detail: t("Home.usecases.container.field8.detail"),
			img: employers,
		},
	];
	return (
		<div className="useCasesSection">
			<div className="useCasesHead">{t("Home.usecases.heading")}</div>
			<div className="useCasesDiv">
				{useCases.map((useCase) => {
					return (
						<div className="flip-card">
							<div className="flip-card-inner">
								<div className="flip-card-front">
									<div className="imgDiv">
										<img src={useCase.img} alt="" />
									</div>
								</div>
								<div className="flip-card-back">
									<ul>
										{useCase.detail
											.split("/")
											.map((item, index) => (
												<li key={index}>{item}</li>
											))}
									</ul>
								</div>
							</div>
							<h4 style={{ textAlign: "center" }}>
								{useCase.field}
							</h4>
						</div>
					);
				})}
			</div>
		</div>
	);
}
