import "./Individual.css";
import { useContext } from "react";
import UserContext from "../../context/userContext/UserContext";
import Connect from "../connection/Connect";
import IndividualScript from "./IndividualScript";
import DND from "../Scripts/draganddrop/DND";
import NoWalletPage from "../connection/NoWalletPage";
import { useTranslation } from "react-i18next";
export const Individual = () => {
	const user = useContext(UserContext);
	const { t } = useTranslation();
	const {
		status,
		isUploading,
		uploadedImageURL,
		assetName,
		setAssetName,
		assetDescription,
		setAssetDescription,
		saveImage,
		submitHandler,
	} = IndividualScript();

	if (!user.iswalletAvailable) {
		return <NoWalletPage />;
	}

	if (!user.isConnected) {
		return <Connect />;
	}

	return (
		<div className="individualpage">
			<div className="individualformcontainer">
				<h1>{t("Individuals.create")}</h1>
				{Math.round((user.userData?.storage_used / 1024) * 100) /
					100}{" "}
				{t("Individuals.gbused")}{" "}
				{Math.round((user.userData?.storage_limit / 1024) * 100) / 100}{" "}
				{t("Individuals.gb")}
				<label htmlFor="fileselectorinput">
					{t("Individuals.uploadImage")}
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
				<label htmlFor="assetname">
					{t("Individuals.assetNameLabel")}
				</label>
				<input
					type="text"
					id="assetname"
					placeholder={t("Individuals.assetNamePlaceholder")}
					value={assetName}
					onChange={(e) => setAssetName(e.target.value)}
				/>
				<label htmlFor="description">
					{t("Individuals.descriptionLabel")}
				</label>
				<textarea
					name="description"
					id="description"
					value={assetDescription}
					onChange={(e) =>
						setAssetDescription(e.target.value)
					}></textarea>
				<div className="status">{status}</div>
				<div className="whitebutton">
					{isUploading ? (
						<button style={{ minWidth: "10rem" }}>
							{t("Individuals.uploading")}
						</button>
					) : (
						<button
							onClick={submitHandler}
							style={{ minWidth: "10em" }}>
							{t("Individuals.submitBtn")}
						</button>
					)}
				</div>
				{/* <div className="instructiontext">
					{t("Individuals.instructions")}
				</div> */}
			</div>
		</div>
	);
};
export default Individual;
