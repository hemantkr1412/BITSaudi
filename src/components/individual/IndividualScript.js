import { useState } from "react";
import { useContext } from "react";
import UserContext from "../../context/userContext/UserContext";
import { nftApi } from "../Scripts/apiCalls";
import { useTranslation } from "react-i18next";

export const IndividualScript = () => {
	const user = useContext(UserContext);
	const [status, setStatus] = useState("");
	const [isUploading, setIsUploading] = useState(false);
	const [uploadedImage, setUploadedImage] = useState(null);
	const [uploadedImageURL, setUploadedImageURL] = useState("");
	const [assetName, setAssetName] = useState("");
	const [assetDescription, setAssetDescription] = useState("");
	const { t } = useTranslation();
	const saveImage = (file) => {
		setUploadedImage(file);
		let filereader = new FileReader();
		filereader.addEventListener("load", () => {
			setUploadedImageURL(filereader.result);
		});
		filereader.readAsDataURL(file);
	};

	const submitHandler = () => {
		setStatus("");
		if (!checkForEmptyData()) return;
		else if (!checkForFileSize()) return;
		else if (!checkforstoragelimit()) return;
		else {
			uploadImage();
		}
	};

	const checkForEmptyData = () => {
		if (assetName === "") {
			setStatus(t("Individuals.requirements.assetName"));
			return false;
		} else if (assetDescription === "") {
			setStatus(t("Individuals.requirements.assetDescription"));
			return false;
		} else if (uploadedImage === null) {
			setStatus(t("Individuals.requirements.image"));
			return false;
		} else if (uploadedImage.size === undefined) {
			setStatus(t("Individuals.requirements.invalidImage"));
			return false;
		} else {
			console.log(uploadedImage.size);
			return true;
		}
	};

	const checkForFileSize = () => {
		let filesize = parseFloat(uploadedImage.size) / 1024;
		if (filesize <= 102400) {
			return true;
		} else {
			setStatus(t("Individuals.requirements.fileSize"));
			return false;
		}
	};

	const checkforstoragelimit = () => {
		let filesize = parseFloat(uploadedImage.size) / 1024 / 1024;
		if (
			filesize + user.userData?.storage_used >
			user.userData?.storage_limit
		) {
			setStatus(t("Individuals.requirements.storageExceeded"));
			return false;
		} else {
			return true;
		}
	};

	const uploadImage = () => {
		setIsUploading(true);
		nftApi({
			account: user.userAccount,
			image: uploadedImage,
			asset_name: assetName,
			asset_description: assetDescription,
		})
			.then(async (res) => {
				setStatus(t("Individuals.requirements.uploadSuccess"));
				await user.poppulateUserData();
				setIsUploading(false);
			})
			.catch((err) => {
				setStatus(t("Individuals.requirements.uploadFailure"));
				setIsUploading(false);
			});
	};

	return {
		status,
		isUploading,
		uploadedImageURL,
		assetName,
		setAssetName,
		assetDescription,
		setAssetDescription,
		saveImage,
		submitHandler,
	};
};

export default IndividualScript;
