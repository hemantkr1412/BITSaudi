import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function QuestionBox(props) {
  
//   const appuser = useContext(UserContext);
//   const [expanded, setExpanded] = React.useState(false);
//   const [isRejecting, setIsRejecting] = React.useState(false);
//   const { users, filter, update } = props;

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//     console.log("panel", panel);
//     // setExpanded(!expanded);
//   };

//   const handleClick = (e) => {
//     console.log("e", e);
//     console.log("expanded", expanded);
//     setExpanded(!expanded);
//     console.log("expanded", expanded);

//     };

const variableOptions2 = [
  {
    question:"What is BitMemoir?",
    answer:"BitMemoir is a unique blockchain-based platform focusing primarily on negating the possibility of creating fake credentials or fudging the documents. The aim is to develop and nurture an ecosystem of verified documents and journey mapping an individual’s life."
  },
  {
    question:"How does BitMemoir work?",
    answer:"BitMemoir uses blockchain technology to create Non-Fungible Tokens (NFTs) for each certificate issued. These NFTs have a QR code embedded on them, which contain unique information (meta-data) about the certificate, including the issuer, recipient, and timestamp. The certificates can be securely stored in personal digital wallets and easily downloaded and  shared with others for verification purposes."
  },
  {
    question:"How can I issue certificates using BitMemoir? ",
    answer:"To issue certificates using BitMemoir, you need to first connect the platform with a decentralised wallet and complete the KYC process in order to procure a white-labelled account.On obtaining a white-labelled account, you may upload the certificate template, enter the relevant details, and generate the NFT. "
  },

  {
    question:"What are the benefits of using BitMemoir?",   
    answer:"BitMemoir offers the following benefits:",
    subAnswer: ["A)Enhanced security: BitMemoir leverages blockchain technology to ensure that certificates cannot be tampered with or forged.",
                  "B) Easy verification: Certificates can be easily verified by scanning the QR code or accessing the blockchain record. ",
                  "C) Portability: Digital certificates can be stored in personal digital wallets and shared with other parties for verification purposes.                  .",
                  "D) Efficient issuance: BitMemoir streamlines the certificate issuance process, saving time and resources for the users.",
                  "E) Transparency: The blockchain record provides a transparent and immutable audit trail of document issuance and verification",
                ]
  },{ 
    question:"How can I verify a certificate issued through BitMemoir?",
    answer:"To verify a certificate, simply scan the QR code on the certificate or enter the blockchain transaction details i.e. the contact address and the token ID in the Verify tab. The verification process will display the certificate details and confirm its authenticity"
  },{
    question:"Can BitMemoir be integrated with existing systems?",
    answer:"Yes, BitMemoir provides integration options to seamlessly connect with existing platforms used by your organisation. This allows for automatic data synchronization and streamlined certificate issuance. For such integration requirements, write to us at support@beimagine.tech."
  },{
    question:"Is BitMemoir compatible with different types of documents?    ",
    answer:"Yes, BitMemoir can be used to issue and verify a wide range of documents, including academic degrees, diplomas, professional certifications, office memo, event certificates, event tickets etc. However, the document must be in the JPEG format.    "
  },{
    question:"Is BitMemoir secure?",
    answer:"Yes, BitMemoir employs advanced blockchain technology to ensure the security and integrity of documents. The decentralized nature of blockchain makes it highly resistant to hacking or data manipulation"
  },{
    question:"Can I share my NFTs on social media platforms or professional networks?                    ",
    answer:"Yes, with the integration of BitWallet, sharing of NFTs on social media platforms and professional networks becomes fairly easy.     "
  }
]

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      // width: "70%",
    }}>
      {variableOptions2.map((question, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{
              fontSize: "1.1rem",
              fontFamily:"'Google Sans', 'Google Sans Text', Roboto, sans-serif"
            }}>{question.question}</Typography>
          </AccordionSummary>
          <AccordionDetails 
          style={{
            backgroundColor: "#D8E4F7",
          }}
          >
            <Typography
             sx={{
              marginBottom: "10px",
             }}
            >
              {question.answer}
            </Typography>
            {
              question.subAnswer && question.subAnswer.map((subAnswer, index) => (
                <Typography 
                sx={{
                  margin: "10px",
                 }}
                key={index}>
                  {subAnswer}
                </Typography>
              ))

            }
          </AccordionDetails>
        </Accordion>
      ))}
    </div>

    //   <div>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //     >
    //       <Typography>Accordion 1</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    //         malesuada lacus ex, sit amet blandit leo lobortis eget.
    //       </Typography>
    //     </AccordionDetails>
    //   </Accordion>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel2a-content"
    //       id="panel2a-header"
    //     >
    //       <Typography>Accordion 2</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    //         malesuada lacus ex, sit amet blandit leo lobortis eget.
    //       </Typography>
    //     </AccordionDetails>
    //   </Accordion>
    //   <Accordion disabled>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel3a-content"
    //       id="panel3a-header"
    //     >
    //       <Typography>Disabled Accordion</Typography>
    //     </AccordionSummary>
    //   </Accordion>
    // </div>
  );
}
