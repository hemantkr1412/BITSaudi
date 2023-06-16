import React, { useState } from "react";
import "./Navbar.css";
import menu from "./assets/menu.svg";
import globe from "./assets/globe.svg";
import logo from "../assets/logo.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/userContext/UserContext";
import { Button } from "@mui/material";

const Navbar = () => {
	const user = useContext(UserContext);
	const navigate = useNavigate();
	const [isMenu, setIsMenu] = useState(false);
	const [aboutustext, setaboutustext] = useState("About Us");

	const Menubar = () => {
		return (
			<div className="menubar">
				<div
					className="menupad"
					onClick={() => {
						setIsMenu(!isMenu);
					}}></div>
				<div
					className="menuitem"
					onClick={() => {
						navigate("/home");
						setIsMenu(false);
					}}>
					Home
				</div>
				<div
					className="menuitem"
					onClick={() => {
						navigate("/individual");
						setIsMenu(false);
					}}>
					Individuals
				</div>
				<div
					className="menuitem"
					onClick={() => {
						navigate("/view");
						setIsMenu(false);
					}}>
					View
				</div>
				<div
					className="menuitem"
					onClick={() => {
						navigate("/institution");
						setIsMenu(false);
					}}>
					Sectors
				</div>
				<div
					className="menuitem"
					onClick={() => {
						navigate("/souvenir");
						setIsMenu(false);
					}}>
					Souvenirs
				</div>
				<div
					className="menuitem"
					onClick={() => {
						navigate("/verify");
						setIsMenu(false);
					}}>
					Verify
				</div>
				<div
					className="menuitem"
					onClick={() => {
						navigate("/nftlayalty");
						setIsMenu(false);
					}}>
					NFT Loyalty
				</div>
				<div
					className="menuitem"
					onClick={() => {
						navigate("/bitwalletpage");
						setIsMenu(false);
					}}>
					BitWallet
				</div>
				<div
					className="menuitem"
					onClick={() => {
						navigate("/partners");
						setIsMenu(false);
					}}>
					Partners
				</div>
				<div
					className="menuitem"
					onClick={() => {
						navigate("/contact");
						setIsMenu(false);
					}}>
					Contact Us
				</div>
				<div
					className="menuitem"
					onClick={() => {
						navigate("/team");
						setIsMenu(false);
					}}>
					Team
				</div>
				<div
					className="menuitem"
					onClick={() => {
						navigate("/roadmap");
						setIsMenu(false);
					}}>
					RoadMap
				</div>
			</div>
		);
	};
	return (
		<div className="navbar">
			<div className="logocontainer">
				<img
					src={logo}
					alt="BEYOND IMAGINATION TECHNOLOGIES"
					onClick={() => navigate("/home")}
					style={{
						width: "150px",
						height: "80px",
					}}
				/>
			</div>
			<div className="navbuttoncontainer">
				{/* <div className="navbutton" onClick={() => navigate("/individual")}>
          Individuals
        </div>
        <div className="navbutton" onClick={() => navigate("/view")}>
          View
        </div>
        <div className="navbutton" onClick={() => navigate("/institution")}>
          Institutions
        </div> */}
				<div className="navbutton">
					<div class="dropdown">
						<Button class="dropbtn">Create</Button>
						<div class="dropdown-content">
							<a
								onClick={() => {
									navigate("/individual");
									// setaboutustext("Team")
								}}>
								Individual
							</a>
							<a
								onClick={() => {
									navigate("/institution");
								}}>
								{" "}
								Sectors
							</a>
						</div>
					</div>
				</div>
				<div className="navbutton" onClick={() => navigate("/view")}>
					View
				</div>
				{/* <div className="navbutton" onClick={() => navigate("/souvenir")}>
          Souvenirs
        </div> */}
				<div className="navbutton">
					<div class="dropdown">
						<Button class="dropbtn">Utility</Button>
						<div class="dropdown-content">
							<a
								onClick={() => {
									navigate("/souvenir");
									// setaboutustext("Team")
								}}>
								Souvenirs
							</a>
							<a
								onClick={() => {
									navigate("/dnft");
								}}>
								{" "}
								Batch dNFT
							</a>
							<a
								onClick={() => {
									navigate("/individualdnft");
								}}>
								{" "}
								Individual dNFT
							</a>
							<a
								onClick={() => {
									navigate("/nftlayalty");
								}}>
								{" "}
								Loyalty dNFT
							</a>
						</div>
					</div>
				</div>

				<div className="navbutton" onClick={() => navigate("/verify")}>
					Verify
				</div>
				<div
					className="navbutton"
					onClick={() => navigate("/bitwalletpage")}>
					BitWallet
				</div>
				{/* <div className="navbutton" onClick={() => navigate("/partners")}>
        Partners
        </div> */}
				{/* <div className="navbutton" >
          <div class="dropdown">
            <Button class="dropbtn">{aboutustext}</Button>
            <div class="dropdown-content">
              <a  onClick={() => { 
                navigate("/team")
                // setaboutustext("Team")
              } }>Team</a>
              <a onClick={() => {navigate("/roadmap") 
            }}>RoadMap</a>
              <a onClick={() => {navigate("/whitepapper") 
              // setaboutustext("WhitePaper")
            }}>WhitePaper </a>
              <a onClick={() => {navigate("/tokenomics")
              // setaboutustext("Tokenomics")
            }}>Tokenomics</a>
              <a onClick={() => {navigate("/partners")
              // setaboutustext("Partners")
            }}>Partners</a>
          </div>
        </div>
        </div> */}
			</div>
			<div className="menucontainer">
				<img
					src={menu}
					alt="Menu"
					onClick={() => {
						setIsMenu(!isMenu);
					}}
				/>
			</div>
			{isMenu && <Menubar />}
			{/* <div className="logocontainer">
        <img
          src={logo}
          alt="BEYOND IMAGINATION TECHNOLOGIES"
          onClick={() => navigate("/home")}
        />
      </div> */}
			<div className="navrightbuttoncontainer">
				<div class="dropdown">
					<svg
						className="language-select"
						stroke="currentColor"
						fill="currentColor"
						stroke-width="0"
						viewBox="0 0 24 24"
						class="dropbtn2"
						height="1.5rem"
						width="1.5rem"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-2.764a14.67 14.67 0 0 0-1.792-6.243A8.013 8.013 0 0 1 19.931 11zM12.53 4.027c1.035 1.364 2.427 3.78 2.627 6.973H9.03c.139-2.596.994-5.028 2.451-6.974.172-.01.344-.026.519-.026.179 0 .354.016.53.027zm-3.842.7C7.704 6.618 7.136 8.762 7.03 11H4.069a8.013 8.013 0 0 1 4.619-6.273zM4.069 13h2.974c.136 2.379.665 4.478 1.556 6.23A8.01 8.01 0 0 1 4.069 13zm7.381 6.973C10.049 18.275 9.222 15.896 9.041 13h6.113c-.208 2.773-1.117 5.196-2.603 6.972-.182.012-.364.028-.551.028-.186 0-.367-.016-.55-.027zm4.011-.772c.955-1.794 1.538-3.901 1.691-6.201h2.778a8.005 8.005 0 0 1-4.469 6.201z"></path>
					</svg>
					<div class="dropdown-content2">
						<a value="en">English</a>
						<a value="ar">Arabic</a>
					</div>
				</div>
				<div className="contactusbutton">
					<button
						onClick={() => {
							navigate("/contact");
						}}
						className="">
						Contact Us
					</button>
				</div>
				{user.iswalletAvailable ? (
					user.isConnected ? (
						<div className="whitebutton">
							<button onClick={() => navigate("/dashboard")}>
								<DashboardIcon
									sx={{ fontSize: 20, marginRight: "5px" }}
								/>
								Dashboard
							</button>
						</div>
					) : (
						<div className="whitebutton">
							<button
								onClick={() => {
									user.login();
								}}>
								Connect
							</button>
						</div>
					)
				) : (
					<div className="whitebutton">
						<button
							onClick={() => {
								window.open("https://metamask.io");
							}}>
							Get Wallet
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
