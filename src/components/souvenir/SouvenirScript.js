import { useState, useContext } from "react";
import UserContext from "../../context/userContext/UserContext";
import { nftApi } from "../Scripts/apiCalls";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";
import Subscription from "../institution/instititeAdvanced/subscription/subscription";
import { useTranslation } from "react-i18next";

const SouvenirScript = () => {
	const user = useContext(UserContext);
	const navigate = useNavigate();
	const [status, setStatus] = useState("");
	const [isUploading, setIsUploading] = useState(false);
	const [uploadedImage, setUploadedImage] = useState(null);
	const [uploadedImageURL, setUploadedImageURL] = useState("");
	const [selectedFrame, setSelectedFrame] = useState("");
	const [assetName, setAssetName] = useState("");
	const [assetDescription, setAssetDescription] = useState("");
	const [recipient, setRecipient] = useState("");
	const [recipientEmail, setRecipientEmail] = useState("");
	const [addFrameopen, setAddFrameOpen] = useState(false);
	const [previewOpen, setPreviewOpen] = useState(false);
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
		console.log("submitHandler");
		setStatus("");
		if (!checkForEmptyData()) return;
		else if (!checkForFileSize()) return;
		if (parseInt(user.userData.nft_quota) === 0) {
			navigate("/subscription");
			return;
		} else {
			uploadImage();
		}
	};

	const checkForEmptyData = () => {
		let isAddressValid = true;
		if (recipient !== "") {
			try {
				isAddressValid = ethers.utils.getAddress(recipient);
			} catch {
				isAddressValid = false;
			}
		}
		if (assetName === "") {
			setStatus(t("Individuals.requirements.assetName"));
			return false;
		} else if (assetDescription === "") {
			setStatus(t("Individuals.requirements.assetDescription"));
			return false;
		} else if (!isAddressValid && recipient !== "") {
			setStatus(t("Individuals.requirements.invalidAddress"));
			return false;
		} else if (uploadedImage === null) {
			setStatus(t("Individuals.requirements.image"));
			return false;
		} else if (uploadedImage.size === undefined) {
			setStatus(t("Individuals.requirements.invalidImage"));
			return false;
		} else {
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

	const uploadImage = () => {
		let frameNameItems = selectedFrame.split("/");
		let frameName = frameNameItems[frameNameItems.length - 1];
		console.log(selectedFrame);
		console.log(frameName);
		setIsUploading(true);
		nftApi({
			account: user.userAccount,
			image: uploadedImage,
			asset_name: assetName,
			asset_description: assetDescription,
			recipient: recipient,
			recipientEmail: recipientEmail,
			frame: frameName,
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
	};
};

export default SouvenirScript;
