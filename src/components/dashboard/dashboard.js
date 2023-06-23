import "./dashboard.css";
import { useContext, useState } from "react";
import UserContext from "../../context/userContext/UserContext";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import DeleteIcon from "@mui/icons-material/Delete";
import { fileDownload } from "../Scripts/tools";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { userApi, nftApi } from "../Scripts/apiCalls";
import Dialog from "@mui/material/Dialog";
import Certificate from "../institution/certificate";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
	return (
		<div className="dashboardpage">
			<div className="dashboardcontainer">
				<PrimaryDetails />
				<KPI />
				<Templates />
				<Frames />
			</div>
		</div>
	);
};

export default Dashboard;

const PrimaryDetails = () => {
	const { t } = useTranslation();
	const user = useContext(UserContext);
	const userData = user.userData;
	const details1 = {
		[t("Dashboard.contentDashboard.name")]: userData.name,
		[t("Dashboard.contentDashboard.description")]: userData.description,
		[t("Dashboard.contentDashboard.email")]: userData.email,
		[t("Dashboard.contentDashboard.Website")]: userData.website,
		[t("Dashboard.contentDashboard.account")]: userData.account,
	};
	const details2 = {
		[t("Dashboard.contentDashboard.Status")]:
			userData.status === "Approved"
				? "Verified"
				: userData.status === "in_progress"
				? "Verification Pending"
				: "Unverified",
		[t("Dashboard.contentDashboard.regId")]: userData.regId,
		[t("Dashboard.contentDashboard.IdProof")]: (
			<IconButton
				onClick={() => fileDownload(userData.idProof, "idProof")}>
				<DownloadForOfflineIcon color="primary" />
			</IconButton>
		),
		[t("Dashboard.contentDashboard.personalStorage")]:
			userData["storage_used"] +
			" / " +
			userData["storage_limit"] +
			" MB",
		[t("Dashboard.contentDashboard.contractAddress")]:
			userData["contract_address"],
	};

	return (
		<>
			<div className="sectionheading">
				<h2>{t("Dashboard.sidebar.PrimaryDetails")}</h2>
			</div>
			<div className="primarydatacontainer">
				<div className="userdetail">
					{Object.keys(details1).map((item) => (
						<div className="userdetails" key={item + "inuserData1"}>
							<h4>{item}:</h4>
							<h4>{details1[item]}</h4>
						</div>
					))}
				</div>
				<div className="userdetail">
					{Object.keys(details2).map((item) => (
						<div className="userdetails" key={item + "inuserData2"}>
							<h4>{item}:</h4>
							<h4>{details2[item]}</h4>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

const KPI = () => {
	const { t } = useTranslation();
	const user = useContext(UserContext);
	const userData = user.userData;

	return (
		<div className="certificatesectioncontainer">
			<div className="certificatesissued">
				<div className="heading3">{userData["total_certificates"]}</div>
				<div className="heading2">
					{t("Dashboard.KPI.totalCertificates")}
				</div>
			</div>

			<div className="certificatesissued">
				<div className="heading3">{userData["total_souvenirs"]}</div>
				<div className="heading2">
					{t("Dashboard.KPI.totalSouvenirs")}
				</div>
			</div>
		</div>
	);
};

const Frames = () => {
	const user = useContext(UserContext);
	const userData = user.userData;
	const frameNames = Object.keys(userData?.["frames"]);
	const [selectedFrame, setSelectedFrame] = useState("");
	const [dialogOpen, setDialogOpen] = useState(false);
	const [status, setStatus] = useState("");
	const { t } = useTranslation();
	const deleteFrame = async (frameName) => {
		userApi({
			account: user.userAccount,
			frame_name: frameName,
			frames: true,
		})
			.then(async (res) => {
				await user.poppulateUserData();
			})
			.catch((err) => {
				alert(t("Dashboard.frames.error"));
			});
	};

	const addFrame = () => {
		userApi({
			account: user.userAccount,
			file: selectedFrame,
			frames: true,
			frame_name: document.getElementById("frame-name-select").value,
		})
			.then(async (res) => {
				await user.poppulateUserData();
				setDialogOpen(false);
			})
			.catch((err) => {
				setStatus(t("Dashboard.frames.error"));
			});
	};

	const AddFrameDialog = () => {
		return (
			<Dialog onClose={() => setDialogOpen(false)} open={dialogOpen}>
				<div className="individualpage">
					<div className="individualformcontainer">
						<h1>{t("Dashboard.frames.newFrame")}</h1>
						<label htmlFor="frame-select">
							{t("Dashboard.frames.selectFrame")}
						</label>
						{selectedFrame.name}
						<input
							type="file"
							id="frame-select"
							onChange={(e) =>
								setSelectedFrame(e.target.files[0])
							}
						/>
						<label htmlFor="frame-name-select">
							{t("Dashboard.frames.frameName")}
						</label>

						<input
							type="text"
							id="frame-name-select"
							placeholder="Enter name for the frame"
						/>
						<div className="status">{status}</div>
						<button onClick={addFrame}>
							{t("Dashboard.frames.saveFrame")}
						</button>
					</div>
				</div>
			</Dialog>
		);
	};

	return (
		<>
			<div className="sectionheading">
				<h2>{t("Dashboard.frames.souvenirFrames")}</h2>
			</div>
			<div className="certContainer">
				{frameNames.length > 0 && (
					<>
						{frameNames.map((frame, index) => (
							<div className="framecard" key={index + frame}>
								<div className="framepreview">
									<img
										src={userData["frames"][frame]}
										alt={frame}
									/>
								</div>
								<div className="framebuttons">
									<DownloadForOfflineIcon
										color="white"
										onClick={() =>
											fileDownload(
												userData["frames"][frame],
												frame
											)
										}
									/>
									<DeleteIcon
										color="white"
										onClick={() => deleteFrame(frame)}
									/>
								</div>
								<h4>{frame}</h4>
							</div>
						))}
					</>
				)}

				<div className="framecard">
					<div
						className="framepreview"
						onClick={() => {
							console.log("clicked");
							setDialogOpen(true);
						}}>
						<AddCircleOutlineIcon sx={{ fontSize: 200 }} />
					</div>
					<div className="framebuttons"></div>
					<h4>{t("Dashboard.frames.addFrame")}</h4>
				</div>
			</div>
			<AddFrameDialog />
		</>
	);
};
const Templates = () => {
	const user = useContext(UserContext);
	const userData = user.userData;
	const templateNames = Object.keys(userData?.["certificates"]);
	const { t } = useTranslation();
	const deleteTemplate = async (template) => {
		userApi({
			account: user.userAccount,
			delete_certificate: true,
			template: template,
			certificates: "",
		})
			.then(async (res) => {
				console.log(res);
				await user.poppulateUserData();
			})
			.catch((err) => {
				alert(t("Dashboard.frames.error"));
			});
	};

	const downloadTemplate = async (template) => {
		nftApi({
			account: user.userAccount,
			recipient: "walletAddress",
			cert: "download",
			template: template,
			variable1: userData["certificates"][template]["variable1"],
			variable2: userData["certificates"][template]["variable2"],
		})
			.then(async (res) => {
				fileDownload(res, "sample");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<div className="sectionheading">
				<h2>{t("Dashboard.frames.certificateTemplate")}</h2>
			</div>
			<div className="certContainer">
				{templateNames.length > 0 && (
					<>
						{templateNames.map((template, index) => (
							<div className="framecard" key={index + template}>
								<div className="framepreview">
									<Certificate
										certData={
											userData["certificates"][template]
										}
										width={250}
									/>
								</div>
								<div className="framebuttons">
									<DownloadForOfflineIcon
										color="white"
										onClick={() =>
											downloadTemplate(template)
										}
									/>
									<DeleteIcon
										color="white"
										onClick={() => deleteTemplate(template)}
									/>
								</div>
								<h4>{template}</h4>
							</div>
						))}
					</>
				)}
			</div>
		</>
	);
};
