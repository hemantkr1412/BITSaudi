import "../individual/Individual.css";
// import "./Souvenir.css";
import SouvenirScript from "./SouvenirScript";
import Connect from "../connection/Connect";
import DND from "../Scripts/draganddrop/DND";
import { useContext } from "react";
import UserContext from "../../context/userContext/UserContext";
import NoWalletPage from "../connection/NoWalletPage";
import KYC from "../kyc/kyc";
import AddFrame from "./addFrame";
import Preview from "./preview";

import React from "react";
import { useTranslation } from "react-i18next";
export const Souvenir = () => {
	const { t } = useTranslation();
	const user = useContext(UserContext);
	const {
		status,
		isUploading,
		uploadedImageURL,
		selectedFrame,
		setSelectedFrame,
		assetName,
		setAssetName,
		assetDescription,
		setAssetDescription,
		recipient,
		setRecipient,
		recipientEmail,
		setRecipientEmail,
		saveImage,
		submitHandler,
		addFrameopen,
		setAddFrameOpen,
		previewOpen,
		setPreviewOpen,
	} = SouvenirScript();

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
		<div className="individualpage">
			<div className="individualformcontainer">
				<h1>
					{t("souvenir.souvenir.welcome")} {user.userData.name}
				</h1>
				<div>{user.userData.description}</div>
				{user.userData.total_souvenirs}{" "}
				{t("souvenir.souvenir.totalSouvenirs")}
				<h1>{t("souvenir.souvenir.give")}</h1>
				<label htmlFor="individualfile">
					{t("souvenir.souvenir.uploadImage")}
				</label>
				<input
					type="file"
					id="fileselectorinput"
					style={{ display: "none" }}
					onChange={(e) => {
						saveImage(e.target.files[0]);
					}}
				/>
				<DND
					uploadedImageURL={uploadedImageURL}
					saveImage={saveImage}
				/>
				<label htmlFor="souvenirname">
					{t("souvenir.souvenir.frame")}
				</label>
				<select
					name="frameselector"
					id="frameselector"
					value={selectedFrame}
					onChange={(e) => {
						if (e.target.value === "addFrame") {
							setAddFrameOpen(true);
						} else {
							setSelectedFrame(e.target.value);
						}
					}}>
					<option value="">{t("souvenir.souvenir.none")}</option>
					{Object.keys(user.userData.frames).map((frame) => (
						<option value={user.userData.frames[frame]} key={frame}>
							{frame}
						</option>
					))}
					<option
						value="addFrame"
						style={{ background: "rgba(1, 1, 1, 0.2)" }}
						onClick={() => console.log("Add frame")}>
						{t("souvenir.souvenir.addFrame")}
					</option>
				</select>
				<label htmlFor="souvenirname">
					{t("souvenir.souvenir.souvenirName")}
				</label>
				<input
					type="text"
					id="souvenirname"
					placeholder={t("souvenir.souvenir.souvenirNamePlaceholder")}
					value={assetName}
					onChange={(e) => setAssetName(e.target.value)}
				/>
				<label htmlFor="recipientaddress">
					{t("souvenir.souvenir.recipientWalletAddress")}
				</label>
				<input
					type="text"
					id="recipientaddress"
					placeholder={t(
						"souvenir.souvenir.recipientWalletAddressPlaceholder"
					)}
					value={recipient}
					onChange={(e) => setRecipient(e.target.value)}
				/>
				<label htmlFor="recipientemail">
					{t("souvenir.souvenir.recipientEmail")}
				</label>
				<input
					type="text"
					id="recipientemail"
					placeholder={t(
						"souvenir.souvenir.recipientEmailAddressPlaceholder"
					)}
					value={recipientEmail}
					onChange={(e) => setRecipientEmail(e.target.value)}
				/>
				<label htmlFor="description">
					{t("kycForm.descriptionLabel")}
				</label>
				<textarea
					name="description"
					id="description"
					value={assetDescription}
					onChange={(e) =>
						setAssetDescription(e.target.value)
					}></textarea>
				<div className="status">{status}</div>
				<div
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "space-around",
					}}>
					{isUploading ? (
						<button>{t("souvenir.souvenir.uploading")}</button>
					) : (
						<button onClick={submitHandler}>
							{t("Individuals.submitBtn")}
						</button>
					)}
					<button onClick={() => setPreviewOpen(true)}>
						{t("templateCert.preview")}
					</button>
				</div>
			</div>
			<AddFrame open={addFrameopen} setOpen={setAddFrameOpen} />
			<Preview
				open={previewOpen}
				setOpen={setPreviewOpen}
				souvenir={uploadedImageURL}
				frame={selectedFrame}
			/>
		</div>
	);
};
export default Souvenir;
