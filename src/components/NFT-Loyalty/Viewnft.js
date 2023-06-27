import { React, useState } from "react";
import { NFTNavbar } from "./NFTLoyalty";
import { ScanPop } from "./ScanPop";
import { issueNftreward } from "../Scripts/apiCalls";
import UserContext from "../../context/userContext/UserContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

export const Viewnft = () => {
	const user = useContext(UserContext);
	const [walletAddress, setWalletAddress] = useState("");
	const [dialogOpen, setDialogOpen] = useState(false);
	const [NFTs, setNFTs] = useState([]);
	const [card, setCard] = useState(false);
	const [status, setStatus] = useState("");
	const [token_id, setTokenId] = useState("");
	const [nftlist, setNftlist] = useState([]);
	const { t } = useTranslation();
	//   // Optional Config object, but defaults to demo api-key and eth-mainnet.
	//   const settings = {
	//     apiKey: "demo", // Replace with your Alchemy API Key.
	//     network: Network.ETH_MAINNET, // Replace with your network.
	//   };

	//   const alchemy = new Alchemy(settings);

	//   // Print total NFT count returned in the response:
	//   alchemy.nft.refreshContract(
	//     "0x5180db8F5c931aaE63c74266b211F580155ecac8",
	//     "1590"
	//   ).then(console.log);

	const handleOnclick = async () => {
		setStatus(t("loading"));
		try {
			// let data = await fetch(`https://polygon-mumbai.g.alchemy.com/v2/grUWncEJ7W6uEsFhwdjcdVzDJPktAulv/getNFTs?owner=${walletAddress}`)
			// .then((data) => data.json());
			// for(let i=0;i<data.ownedNfts.length;i++){
			//     if (data.ownedNfts[i].title=="XYZ"){
			//         setNFTs([data.ownedNfts[i]]);
			//     }

			// }
			console.log(walletAddress);
			let data = await issueNftreward({
				request_type: "view_reward",
				account: user.userAccount,
				receiver: walletAddress,
				// token_id:token_id
			});
			// console.log(data.length)
			if (data.length > 0) {
				console.log(data);
				setNFTs(data);
				setNftlist(data);
				setStatus("");
				setCard(true);
			} else {
				setStatus("view.view.heading");
			}
		} catch (error) {
			console.log(error);
		}
	};

	console.log(NFTs);

	return (
		<div className="dashboardpage">
			<div className="dashboardcontainer">
				<NFTNavbar />
				<ScanPop
					dialogOpen={dialogOpen}
					setDialogOpen={setDialogOpen}
					setWalletAddress={setWalletAddress}
				/>
				<div style={{ marginTop: "20px" }}>
					<label htmlFor="contract-address-for-cert-verification">
						{t("loyalty.issue.walletAddress")}
					</label>
					<div className="input-icons">
						<i
							onClick={() => setDialogOpen(true)}
							className="fa fa-camera icon"></i>
						<input
							className="input-field"
							id="viewnft-input"
							type="text"
							placeholder={t(
								"loyalty.issue.walletAddressPlaceholder"
							)}
							value={walletAddress}
							onChange={(e) => setWalletAddress(e.target.value)}
						/>
					</div>
					{/* <label htmlFor="contract-address-for-cert-verification">
            Token Id:
            </label>
            <div className="input-icons">
                <i onClick={() => setDialogOpen(true)}  className="fa fa-camera icon">
                </i>
                <input className="input-field" id="viewnft-input"
                type="text"
                placeholder="Enter Token Id. e.g. 1"
                value={token_id}
                onChange={(e) => setTokenId(e.target.value)}/>
            </div> */}

					{/* <input
            type="text"
            id="contract-address-for-cert-verification"
            placeholder="Enter address. e.g. 0xbff6CbaE23f790826f4209438752bd269e63e8c5"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            /> */}
					<button onClick={handleOnclick}>
						{t("loyalty.nftLoyalty.view")}
					</button>
					<p style={{ textAlign: "center" }}>{status}</p>
				</div>
				<div
					style={{
						display: "flex",
						width: "80%",
						flexDirection: "row",
						justifyContent: "space-around",
						flexWrap: "wrap",
					}}
					className="card-container">
					{card &&
						NFTs.map((NFT, index) => {
							console.log(NFT);
							return (
								<div className="card">
									<div className="card-body">
										<div className="subheader">
											<div className="card-image">
												<img
													src={`http://127.0.0.1:8000${NFT.nft_image}`}
													alt="NFT"
													style={{
														marginTop: "20px",
														height: "200px",
														width: "200px",
													}}
												/>
											</div>
											<div className="card-title">
												<h4>{NFT.metadata.name}</h4>
												<p>
													{t(
														"VerifyDetails.Token_Id"
													)}
													<span>{NFT.token_id}</span>
												</p>
												<p>
													{t("view.view.membership")}
													<br />
													<span>
														{
															NFT.metadata
																.membership
														}
													</span>
												</p>
												{NFT.metadata
													.expiry_date_memberShip ===
												"" ? (
													<></>
												) : (
													<p>
														{t(
															"view.view.membershipExpiryDate"
														)}{" "}
														<br />
														<span>
															{" "}
															{
																NFT.metadata
																	.expiry_date_memberShip
															}
														</span>
													</p>
												)}
												<p>
													{t(
														"loyalty.issue.issueDate"
													)}{" "}
													:{" "}
													<span>
														{
															NFT.metadata
																.issue_date_nft
														}
													</span>
												</p>
											</div>
										</div>
										<div className="card-text">
											<p>
												{t(
													"loyalty.issue.walletAddress"
												)}
												: {walletAddress}
											</p>
										</div>
										<div className="rewardtable">
											<table>
												<tr>
													<th>
														{t(
															"loyalty.rewardTable.date"
														)}
													</th>
													<th>
														{t(
															"loyalty.rewardTable.reward"
														)}
													</th>
													<th>
														{t(
															"loyalty.rewardTable.redeem"
														)}
													</th>
													<th>
														{t(
															"loyalty.rewardTable.expiry"
														)}
													</th>
												</tr>

												{NFT.metadata.rewards &&
													NFT.metadata.rewards.map(
														(reward, index) => {
															return (
																<tr>
																	<td>
																		{
																			reward.issue_date_reward
																		}
																	</td>
																	<td>
																		{
																			reward.reward
																		}
																	</td>
																	<td>
																		{reward.is_claimed
																			? "Yes"
																			: "No"}
																	</td>
																	<td>
																		{
																			reward.expiry_date_reward
																		}
																	</td>
																</tr>
															);
														}
													)}
											</table>
										</div>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};
