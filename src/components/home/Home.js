import React from "react";
import "./Home.css";
import { productsSuitsCardData } from './Product_suite_data';
import img1 from "./assets/img1.png";
import solutionimg1 from "./assets/solutionimg1.png";
import solutionimg2 from "./assets/solutionimg2.png";
import solutionimg3 from "./assets/solutionimg3.png";
import solutionimg4 from "./assets/solutionimg4.png";
import solutionimg5 from "./assets/solutionimg5.png";
import solutionimg6 from "./assets/solutionimg6.png";
import productSuite2 from "./assets/productSuite2.png";
import digitalcertimage from "./assets/digitalcertimage.png";
import bulk from "./assets/bulk.svg";
import { useCases } from "./UseCases";
import cerifycert from "./assets/cerifycert.svg";
import dataprotection from "./assets/dataprotection.svg";
import integration from "./assets/integration.svg";
import robustinfra from "./assets/robustinfra.svg";
import UserContext from "../../context/userContext/UserContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { kpiApi } from "../Scripts/apiCalls";
import QuestionBox from "./QuestionBox";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Insta from "./assets/instagramlogo.svg";
import twitter from "./assets/twitter-square-color-icon.svg";
import Linkidein from "./assets/linkedinlogo.svg";
import telegram from "./assets/telegram-icon.svg";
import { Segment } from "semantic-ui-react";
import { motion } from 'framer-motion';

function TabPanel(props) {
  const { value } = props;

  console.log(useCases);

  return (
    <div>
      {value === 0 ? <QuestionBox /> :
        <>
          <iframe width="560" height="315" src={"https://www.youtube.com/embed/YvG1yNJhu0E"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </>}
    </div>
  );
}
const Home = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(productsSuitsCardData)

  // const solutionsData = [
  //   {
  //     image: solutionimg1,
  //     heading: "Digital Certificates for Universities",
  //     text: "Real-time issuing of verifiable digital certificates to students.",
  //   },
  //   {
  //     image: solutionimg2,
  //     heading: "Digital Certificates for Schools",
  //     text: "With BitMemoir, you can offer everything from grade reports to diplomas for sports, music, dance, and yearly functions.",
  //   },
  //   {
  //     image: solutionimg3,
  //     heading: "Digital Certificates for Training and Coaching Institutes",
  //     text: "Verifiable certificates for training and coaching institutions.",
  //   },
  //   {
  //     image: solutionimg4,
  //     heading: "Digital Certificates for Individuals",
  //     text: "File and certificate storage for individuals is secured via blockchain. There's no need to lug around your certificate binder.",
  //   },
  //   {
  //     image: solutionimg5,
  //     heading: "Digital Certificates for Events",
  //     text: "With BitMemoir, you can hand out prizes and attendance certificates with just a click at your next event.",
  //   },
  //   {
  //     image: solutionimg6,
  //     heading: "Digital Certificates for Destinations",
  //     text: "Digital Certificates for Destinations Verified digital souvenirs for holiday destinations.",
  //   },
  // ];

  const [certificates, setCertificates] = useState(0);
  const [souvenirs, setSouvenirs] = useState(0);

  useEffect(() => {
    poppulateCertificates();
  }, []);

  const poppulateCertificates = async () => {
    kpiApi().then((res) => {
      setCertificates(res.certificates);
      setSouvenirs(res.souvenirs);
    });
  };
  const imageAnimation = {
    offscreen: { scale: 0, opacity: 0 },
    // offscreen2: { scale: 1 },
    onscreen: {
      scale: 1.1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 50,
        rotate: 180

      }
    },
    // onscreen2: {
    //     scale: 1,
    //     opacity: 1,
    //     transition: {
    //       type: "spring",
    //       stiffness: 260,
    //       damping: 50
    //     },
    //     animate: {
    //       rotate: 360, scale: 1
    //     }

  }
  const cardAnimation = {
    offscreen: { x: 100 },
    offscreen2: { x: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2
      }
    },
    onscreen2: {
      x: 100,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2
      }
    }
  };

  return (
    <>

      {/* About Section ------------------- */}

      <div className="aboutSectionContainer">
        <Segment
          floated="left"
          style={{
            position: "fixed",
            left: "0px",
            bottom: "50%",
            zIndex: "1000",
          }}
        >
          <div className="socialmedia">
            <a href="https://www.instagram.com/bitmemoir/" target="_blank" rel="noreferrer">
              <img src={Insta} alt="FAQLogo" style={{ width: "50px", height: "50px" }} />
            </a>
            <hr />
            <a href="https://twitter.com/Bit_Memoir" target="_blank" rel="noreferrer">
              <img src={twitter} alt="FAQLogo" style={{ width: "40px", height: "40px" }} />
            </a>
            <hr />
            <a href="https://www.linkedin.com/company/bitmemoir/" target="_blank" rel="noreferrer">
              <img src={Linkidein} alt="FAQLogo" style={{ width: "40px", height: "40px" }} />
            </a>
            <hr />
            <a href="https://t.me/bitmemoirofficial" target="_blank" rel="noreferrer">
              <img src={telegram} alt="FAQLogo" style={{ width: "40px", height: "40px" }} />
            </a>
          </div>
        </Segment>
        <div className="aboutsection">
          <div className="writing">
            <div className="mainheading">BitMemoir</div>
            <div className="secondheading">
              Issue. Store. Verify. Retrieve.
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
            <button
                  style={{ background: "white", color: "var(--primary)" }}
                  onClick={() => {
                    navigate("/tryforfree");
                  }}
                >
                  Try for free 
                </button>
              <button
                onClick={() => {
                  let toScrollElement =
                    document.getElementById("whatisbitmemoir");
                  toScrollElement.scrollIntoView();
                }}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="illustration">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="aboutsectionmobile">
          <div className="illustration">
            <img src={img1} alt="" />
          </div>
          <div className="writing">
            <div className="mainheading">BitMemoir</div>
            <div className="secondheading">
              Issue. Store. Verify. Retrieve.
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                  style={{ background: "white", color: "var(--primary)" }}
                  onClick={() => {
                    navigate("/tryforfree");
                  }}
                >
                  Try for free {">"}
                </button>
              <button
                onClick={() => {
                  let toScrollElement =
                    document.getElementById("whatisbitmemoir");
                  toScrollElement.scrollIntoView();
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="nextpagearrowcontainer">
          <div className="nextpagearrow"></div>
        </div>
      </div>

      {/* BitMemoir Description Section ------------------------ */}

      <div className="descriptionsectioncontainer" id="whatisbitmemoir">
        {/* <div className="descriptionsection"> */}
        <div className="writing">
          <div className="descriptionDiv">
            <div id="intro">
              <h2>What is BitMemoir?</h2>
              <p>
                BitMemoir is a web3 based application that enables individuals and organisations to provide authorised clients with digital
                certifications. Individual users can convert personal identifiers,property documents, and other sensitive materials into digital certificates, or NFTs, and store them in their own wallets. By utilising blockchain technology, BitMemoir enables users to own their personal documents in perpetuity.
              </p>
            </div>
            <Box
              sx={{
                width: "40%",
                maxWidth: "720px",
                height: '22rem',
                border: "1px solid lightgrey",
                borderRadius: "20px",
                padding: "20px",
                margin: "20px 0",
                alignSelf: "center",
                alignItems: "center",
                backgroundColor: "#D8E4F7",
              }}
              id="videoDiv"
            >
              <iframe width="500" height="150" style={{ width: '100%', height: '100%' }} src="https://www.youtube.com/embed/YDsqedqmF84" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Box>
          </div>
        </div>
        {/* </div> */}
      </div>

      {/* Certificates Section------------------------ */}

      {/* <div className="certificatesectioncontainer">
        <div className="certificatesissued">
          <div className="heading1">Total number of</div>
          <div className="heading2">Certificates Issued: </div>
          <div className="heading3">{certificates}</div>
        </div>
        <div className="certificatesissued">
          <div className="heading1">Total number of</div>
          <div className="heading2">Souvenirs Issued:</div>
          <div className="heading3">{souvenirs}</div>
        </div>
      </div> */}


      {/* How to use Section--------------------- */}

      <div className="howtousecontainer">
        <div className="howtouseheading">PRODUCT SUITE</div>
        <div className="howtousesection">

          <div className="howtouseimageright">
            <motion.div
              variants={imageAnimation}
              initial={"offscreen"}
              whileInView={"onscreen"}
            //  animate={{ rotate: 360, scale: 1 }}
            //  viewport={{ once: true, amount: 0.3 }}
            //  transition={{ staggerChildren: 0.5 }}
            >
              <img src={productSuite2} alt="" />
            </motion.div>
          </div>

          <div className="cardsDiv">
            {productsSuitsCardData.map((card) => {
              return (
                <motion.div
                  variants={cardAnimation}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ staggerChildren: 0.5 }}
                >
                  <Card sx={{ maxWidth: 345, marginBottom: '3rem' }} className="cards">
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" className="cardTitle">
                        {card.title}
                      </Typography>
                      <Typography variant="body2" className="cardDesc">
                        {card.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="useCasesSection">
        <div className="useCasesHead">USE CASES</div>
        <div className="useCasesDiv">
          {
            useCases.map((useCase) => {
              return (
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="imgDiv">
                        <img src={useCase.img} alt="" />
                      </div>
                    </div>
                    <div className="flip-card-back">
                      {/* <p className="projectHead">{useCase.detail}</p> */}
                      <ul>
                        {useCase.detail.split('/').map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <h4 style={{ textAlign: 'center' }}>{useCase.field}</h4>
                </div>
              )
            })
          }
        </div>

        {/* Why Bit Section ---------------------------------------- */}

        <div className="whybitcontainer">
          <div className="heading">Why BitMemoir?</div>
          BitMemoir provides many benefits
          <div className="benefitscontainer">
            <div className="benefit">
              <img src={robustinfra} alt="bit infrastructure" />
              Robust Infrastructure
            </div>
            <div className="benefitdivider">
              <div className="dividerleft"></div>
              <div className="dividerright"></div>
            </div>
            <div className="benefit">
              <img src={integration} alt="Bit Integration" />
              Seamless Integration
            </div>
            <div className="benefitdivider">
              <div className="dividerleft"></div>
              <div className="dividerright"></div>
            </div>
            <div className="benefit">
              <img src={dataprotection} alt="Bit Protection" />
              Data Protection
            </div>
            <div className="benefitdivider">
              <div className="dividerleft"></div>
              <div className="dividerright"></div>
            </div>
            <div className="benefit">
              <img src={cerifycert} alt="Bit Certificate" />
              Verifiable Certificates
            </div>
            <div className="benefitdivider">
              <div className="dividerleft"></div>
              <div className="dividerright"></div>
            </div>
            <div className="benefit">
              <img src={bulk} alt="Bit Bulk certs" />
              Bulk Issuance
            </div>
            <div className="benefitdivider">
              <div className="dividerleft"></div>
              <div className="dividerrightwithdot">
                <div className="dot"></div>
              </div>
            </div>
            {!user.isConnected && (
              <div className="purplebutton">
                <button
                  onClick={() => {
                    if (user.iswalletAvailable) {
                      user.login();
                    } else {
                      navigate("/wallet");
                    }
                  }}
                >
                  Connect now {">"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="joinContainer">
        <div className="joinContainerHeading">
          FAQs
        </div>
        {/* <QuestionBox /> */}
        <Box
          sx={{
            width: "85%",
            maxWidth: "750px",
            border: "1px solid lightgrey",
            borderRadius: "20px",
            padding: "20px",
            margin: "20px",
          }}
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="FAQs" sx={{ color: "black" }} />
              <Tab label="Video FAQs" sx={{ color: "black" }} />
            </Tabs>
          </Box>
          <TabPanel
            value={value}
          // index={0}
          // users={props.users}
          // update={props.update}
          ></TabPanel>
        </Box>
      </div>
    </>
  );
};

export default Home;
