import React from "react";
import { useContext } from "react";
import UserContext from "../../context/userContext/UserContext";
import NoWalletPage from "../connection/NoWalletPage";
import KYC from "../kyc/kyc";
import Connect from "../connection/Connect";
import { useNavigate } from "react-router-dom";
import "./nftloyalty.css";
import { useTranslation } from "react-i18next";
export const NFTLoyalty = () => {
	const user = useContext(UserContext);
	const navigate = useNavigate();
	const { t } = useTranslation();
	if (!user.iswalletAvailable) {
		return <NoWalletPage />;
	}

	if (!user.isConnected) {
		return <Connect />;
	}

	if (user.userData.status !== "Approved") {
		return <KYC />;
	}

	return (
		<div className="dashboardpage">
			<div className="dashboardcontainer">
				<NFTNavbar />
				<h3>{t("loyalty.nftloyalty.heading")}</h3>
				<ol>
					<li>{t("loyalty.nftloyalty.issueClick")}</li>
					<li>{t("loyalty.nftloyalty.viewClick")}</li>
					<li>{t("loyalty.nftloyalty.updateClick")}</li>
				</ol>
			</div>
		</div>
	);
};

const NFTNavbar = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();

	return (
		<div className="sectionheading">
			<div className="navbuttoncontainer2">
				<div
					className="navbutton"
					onClick={() => navigate("/issuenft")}>
					{t("loyalty.nftloyalty.issue")}
				</div>
				<div className="navbutton" onClick={() => navigate("/viewnft")}>
					{t("loyalty.nftloyalty.view")}
				</div>
				<div
					className="navbutton"
					onClick={() => navigate("/updatenft")}>
					{t("loyalty.nftloyalty.update")}
				</div>
			</div>
		</div>
	);
};
export { NFTNavbar };
