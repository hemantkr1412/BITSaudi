import Dialog from "@mui/material/Dialog";
import UserContext from "../../context/userContext/UserContext";
import { useContext } from "react";
import { useState } from "react";
import { userApi } from "../Scripts/apiCalls";
import { useTranslation } from "react-i18next";

function SimpleDialog(props) {
	const user = useContext(UserContext);
	const [status, setStatus] = useState("");
	const [selectedFrame, setSelectedFrame] = useState("");
	const [frameName, setFrameName] = useState("");
	const { onClose, open } = props;
	const { t } = useTranslation();
	const handleClose = () => {
		onClose();
	};

	const uploadFrame = () => {
		setStatus("");
		userApi({
			account: user.userAccount,
			file: selectedFrame,
			frames: true,
			frame_name: frameName,
		})
			.then(async (res) => {
				await user.poppulateUserData();
				onClose();
			})
			.catch((err) => {
				setStatus(t("dashboard.frames.error"));
			});
	};

	const saveFrame = () => {
		if (selectedFrame === "")
			setStatus(t("souvenir.addFrame.status.select"));
		else if (frameName === "")
			setStatus(t("souvenir.addFrame.status.name"));
		else uploadFrame();
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<div className="individualpage">
				<div className="individualformcontainer">
					<h1>{t("dashboard.frames.newFrame")}</h1>
					<label htmlFor="frame-select">
						{t("dashboard.frames.selectFrame")}
					</label>
					{selectedFrame.name}
					<input
						type="file"
						id="frame-select"
						onChange={(e) => setSelectedFrame(e.target.files[0])}
					/>
					<label htmlFor="frame-name-select">
						{t("souvenir.addFrame.name")}
					</label>

					<input
						type="text"
						id="frame-name-select"
						placeholder="Enter name"
						value={frameName}
						onChange={(e) => setFrameName(e.target.value)}
					/>
					<div className="status">{status}</div>
					<button onClick={saveFrame}>
						{t("dashboard.frames.saveFrame")}
					</button>
				</div>
			</div>
		</Dialog>
	);
}

export default function AddFrame(props) {
	const { open, setOpen } = props;

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<SimpleDialog open={open} onClose={handleClose} />
		</div>
	);
}
