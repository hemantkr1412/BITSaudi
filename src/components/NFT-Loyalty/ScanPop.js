import Dialog from "@mui/material/Dialog";
import React from "react";
import { NFTLoyaltyScript } from "./NFT-LoyaltyScript";
import Test from "./QRcodeScan";
import { useTranslation } from "react-i18next";

export const ScanPop = (props) => {
	const { dialogOpen, setDialogOpen, setWalletAddress } = props;
	const { t } = useTranslation();
	return (
		<Dialog onClose={() => setDialogOpen(false)} open={dialogOpen}>
			<div style={{ width: "400px" }}>
				<div style={{ display: "flex" }}>
					<div>
						<i
							style={{ marginTop: "10px" }}
							onClick={() => setDialogOpen(false)}
							className="fa fa-arrow-left icon"></i>
					</div>
					<div>
						<h4 style={{ textAlign: "center", marginLeft: "80px" }}>
							{t("loyalty.qr.scan")}
						</h4>
					</div>
				</div>
				<hr />
				<Test
					dialogOpen={dialogOpen}
					setDialogOpen={setDialogOpen}
					setWalletAddress={setWalletAddress}
				/>
			</div>
		</Dialog>
	);
};
