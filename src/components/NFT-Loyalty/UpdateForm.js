import React from "react";
import Dialog from "@mui/material/Dialog";
import { useTranslation } from "react-i18next";

export const UpdateForm = (props) => {
	const { t } = useTranslation();
	const {
		dialogOpen,
		setDialogOpen,
		setImage,
		setMembershipLevel,
		membershipLevel,
		membershipexpirydate,
		setMembershipExpiryDate,
		isReward,
		setIsReward,
		reward,
		setReward,
		rewardexpirydate,
		setRewardExpiryDate,
		update_nft,
	} = props;
	return (
		<Dialog onClose={() => setDialogOpen(false)} open={dialogOpen}>
			<div className="individualpage">
				<div className="individualformcontainer">
					<h3>{t("loyalty.nftLoyalty.update")}</h3>
					<label htmlFor="image-for-nft">
						{t("loyalty.issue.image")}
					</label>
					<input
						type="file"
						id="image-for-nft"
						onChange={(e) => setImage(e.target.files[0])}
					/>

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
							{t("loyalty.issue.premium")}
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
						<option value={true}>{t("loyalty.issue.yes")}</option>
						<option value={false}>{t("loyalty.issue.no")}</option>
					</select>

					{isReward && (
						<>
							<label htmlFor="reward-amount">
								{t("loyalty.issue.reward")}
							</label>
							<input
								type="text"
								id="reward-amount"
								value={reward}
								onChange={(e) => setReward(e.target.value)}
								placeholder="eg. 10% off"
							/>

							<label htmlFor="expiry-date-reward">
								{t("loyalty.issue.expiryReward")}
							</label>
							<input
								type="date"
								id="expiry-date-reward"
								value={rewardexpirydate}
								onChange={(e) =>
									setRewardExpiryDate(e.target.value)
								}
							/>
						</>
					)}

					<button onClick={update_nft}>
						{t("loyalty.nftLoyalty.update")}
					</button>
				</div>
			</div>
		</Dialog>
	);
};
