import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import UserContext from "../../context/userContext/UserContext";
import { getCertificates, getIssuerDetails } from "../Scripts/apiCalls";
import { nftApi } from "../Scripts/apiCalls";
import { useTranslation } from "react-i18next";

const ViewScript = () => {
	const navigate = useNavigate();
	const user = useContext(UserContext);
	const [certificateData, setCertificateData] = useState([]);
	const [status, setStatus] = useState("");
	const { t } = useTranslation();
	useEffect(() => {
		if (user.isConnected) poppulateCertificates();
	}, [user]);

	const poppulateCertificates = async () => {
		setStatus(t("view.script.loading"));
		nftApi({ account: user.userAccount })
			.then((res) => {
				console.log(res);
				setStatus("");
				setCertificateData(res);
			})
			.catch((err) => {
				setStatus(t("view.script.error"));
			});
	};

	return { status, certificateData, user, navigate };
};

export default ViewScript;
