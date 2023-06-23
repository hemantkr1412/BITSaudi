import { React, useState } from "react";
import "./nftloyalty.css";
import { NFTNavbar } from "./NFTLoyalty";
import { ScanPop } from "./ScanPop";
import { issueNftreward } from "../Scripts/apiCalls";
import UserContext from "../../context/userContext/UserContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

export const IssueNFT = () => {
	const user = useContext(UserContext);
	const navigate = useNavigate();
	const [walletAddress, setWalletAddress] = useState("");
	const [image, setImage] = useState("");
	const [membershipLevel, setMembershipLevel] = useState("REGULAR");
	const [membershipexpirydate, setMembershipExpiryDate] = useState("");
	const [isReward, setIsReward] = useState(false);
	const [dialogOpen, setDialogOpen] = useState(false);
	const [reward, setReward] = useState("");
	const [expiry_date_reward, setExpiryDateReward] = useState("");
	const [status, setStatus] = useState("");
	const { t } = useTranslation();
	const onClickIssueNft = async () => {
		if (walletAddress === "") {
			alert(t("loyalty.alert.walletAddress"));
			return;
		}
		if (image === "") {
			alert(t("loyalty.alert.selectImage"));
			return;
		}
		if (membershipLevel === "PREMIUM" && membershipexpirydate === "") {
			alert(t("loyalty.alert.expiryMembership"));
			return;
		}
		if (isReward && reward === "") {
			alert(t("loyalty.alert.reward"));
			return;
		}
		if (isReward && expiry_date_reward === "") {
			alert(t("loyalty.alert.expiryReward"));
			return;
		}
		if (user.userData.nft_quota === 0) {
			alert(t("loyalty.alert.noNftQuota"));
			navigate("/subscription");
			return;
		}

		setStatus(t("loyalty.alert.waiting"));
		let ismebsershipLevel = true;
		if (membershipLevel === "REGULAR") {
			ismebsershipLevel = false;
		}
		const result = await issueNftreward({
			request_type: "mint_nft",
			account: user.userAccount,
			receiver: walletAddress,
			nameOfOrg: user.userData.name,
			image: image,
			isMembership: ismebsershipLevel,
			membership: membershipLevel,
			expiry_date_of_membership: membershipexpirydate,
			isReward: isReward,
			reward: reward,
			expiry_date_of_reward: expiry_date_reward,
		});
		if (result == "Success") {
			alert(t("loyalty.alert.success"));
			navigate("/viewnft");
		} else {
			alert(t("loyalty.alert.failure"));
		}
	};

	return (
		<div className="dashboardpage">
			<div className="dashboardcontainer">
				<NFTNavbar />
				<div className="wallet-address">
					<div className="individualformcontainer">
						{/* <button onClick={() => setDialogOpen(true)}>Scan QR Code</button> */}
						<label htmlFor="contract-address-for-cert-verification">
							{t("loyalty.issue.walletAddress")}
						</label>
						<div className="input-icons">
							<i
								onClick={() => setDialogOpen(true)}
								className="fa fa-camera icon"></i>
							<input
								className="input-field"
								type="text"
								id="contract-address-for-cert-verification"
								placeholder={t(
									"loyalty.issue.walletAddressPlaceholder"
								)}
								value={walletAddress}
								onChange={(e) =>
									setWalletAddress(e.target.value)
								}
							/>
						</div>
						{/* <input
                type="text"
                id="contract-address-for-cert-verification"
                placeholder="Enter address. e.g. 0xbff6CbaE23f790826f4209438752bd269e63e8c5"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                /> */}
						<label htmlFor="image-for-nft">
							{t("loyalty.issue.image")}
						</label>
						<input
							type="file"
							id="image-for-nft"
							onChange={(e) => setImage(e.target.files[0])}
						/>
						<p style={{ fontSize: "0.6rem" }}>{image.name}</p>
						<label htmlFor="membership-level">
							{t("loyalty.issue.membership")}
						</label>
						<select
							onChange={(e) => setMembershipLevel(e.target.value)}
							name="membership-level"
							id="membership-level">
							<option value="REGULAR">
								{t("loyalty.issue.regular")}
							</option>
							<option value="PREMIUM">
								{t("loyalty.issue.premium")}{" "}
							</option>
						</select>

						{membershipLevel === "PREMIUM" && (
							<>
								<label htmlFor="Expiry-date-membership">
									{t("loyalty.issue.expiryMembership")}
								</label>
								<input
									type="date"
									id="Expiry-date-membership"
									value={membershipexpirydate}
									onChange={(e) =>
										setMembershipExpiryDate(e.target.value)
									}
								/>
							</>
						)}

						<label htmlFor="reward-yes-no">
							{t("loyalty.issue.reward")}
						</label>
						<select
							value={isReward}
							onChange={(e) => setIsReward(e.target.value)}
							name="reward-yes-no"
							id="reward-yes-no">
							<option value={true}>
								{t("loyalty.issue.yes")}{" "}
							</option>
							<option value={false}>
								{t("loyalty.issue.no")}{" "}
							</option>
						</select>

						{isReward && (
							<>
								<label htmlFor="reward-amount">
									{t("loyalty.issue.reward")}
								</label>
								<input
									type="text"
									id="reward-amount"
									placeholder="eg. 10% off"
									value={reward}
									onChange={(e) => setReward(e.target.value)}
								/>

								<label htmlFor="expiry-date-reward">
									{t("loyalty.issue.expiryReward")}
								</label>
								<input
									type="date"
									id="expiry-date-reward"
									value={expiry_date_reward}
									onChange={(e) =>
										setExpiryDateReward(e.target.value)
									}
								/>
							</>
						)}

						<button onClick={onClickIssueNft}>
							{t("loyalty.issue.issue")}
						</button>
						<p>{status}</p>
					</div>
				</div>
				<ScanPop
					dialogOpen={dialogOpen}
					setDialogOpen={setDialogOpen}
					setWalletAddress={setWalletAddress}
				/>
			</div>
		</div>
	);
};
