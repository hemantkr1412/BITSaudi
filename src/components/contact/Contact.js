import "./Contact.css";
import linkedinlogo from "../footer/assets/linkedinlogo.svg";
import instagramlogo from "../footer/assets/instagramlogo.svg";
import Twitterlogo from "../footer/assets/twitter-square-color-icon.svg";
import Telegram from "../footer/assets/telegram-icon.svg";

import React from "react";

const Contact = () => {
  return (
    <div className="dashboardpage">
            {/* <h3>Reach out to us at:</h3> */}
    <div className="dashboardcontainer">
    <div className="sectionheading2">
        <h2>Reach out to us at:</h2>
      </div>

      <div className="primarydatacontainer">
            <div className="userdetails2" >
              <h4>Address :</h4>
              <h4> Beyond imagination tech LLC,M03 Laffa restaurant building,Sheikh Khalifa Bin Zayed St - opp. Burjuman Mall,Dubai,United Arab Emirates </h4>
            </div>
            <div className="userdetails2" id="userdetailsid" >
              <h4>Marketing :</h4>
              <h4>marketing@beimagine.tech </h4>
            </div>
            <div className="userdetails2" style={{marginTop: "20px"}} >
              <h4>Email :</h4>
              <h4>support@beimagine.tech </h4>
            </div>
      </div>
      

      {/* <div style={{
        // width: "80%",
        // display: "flex",  
        // // justifyContent: "space-between",
        // alignItems: "center",
        // margin: "auto",
        // marginTop: "50px"
      }}>

      <div className="details">
        <p ><span style={{marginRight:"10px"}}>Address :</span> Beyond imagination tech LLC </p>
        <p style={{marginLeft:"70px"}}>M03 Laffa restaurant building, </p>
        <p className="paraAdd"> Sheikh Khalifa Bin Zayed St - opp. Burjuman Mall, </p>
        <p style={{marginLeft:"50px"}}> Dubai,United Arab Emirates</p>
      </div>
      </div> */}
      {/* <p><span style={{marginRight:"42px"}}>Email :</span><span style={{marginRight:"15px"}}>support@beimagine.tech</span></p>
      <p>Marketing : marketing@beimagine.tech</p>
      <h3>Check out our social:</h3> */}
      {/* <div className="primarydatacontainer">
        <div className="userdetails2" >
                <h4> Hemant:</h4>
                <h4> Kumar</h4>
        </div>
      </div> */}
      <h4>Our Socal Media Handles:</h4>
      <div className="contactsocialcontainer">
        <img
          src={linkedinlogo}
          alt=""
          height="80"
          width="80"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/company/bitmemoir/?viewAsMember=true"
            );
          }}
        />
        <img
          src={instagramlogo}
          alt=""
          height="150"
          width="150"
          onClick={() => {
            window.open("https://www.instagram.com/bitindiaofficial/");
          }}
        />
        <img
          src={Twitterlogo}
          alt=""
          height="60"
          width="60"
          onClick={() => {
            window.open("https://twitter.com/Bit_Memoir");
          }}
        />
        <img
          style={{
                    marginLeft:"30px"
                  }}
          src={Telegram}
          alt=""
          height="60"
          width="60"
          onClick={() => {
            window.open("https://t.me/bitmemoirofficial");
          }}
        />
      </div>
      <div className="contactsocialcontainerMobile">
        <img
          src={linkedinlogo}
          alt=""
          height="50"
          width="50"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/company/beyond-imagination-technlogies-pvt-ltd/?viewAsMember=true"
            );
          }}
        />
        <img
          src={instagramlogo}
          alt=""
          height="90"
          width="90"
          onClick={() => {
            window.open("https://www.instagram.com/bitindiaofficial/");
          }}
        />
        <img
          src={Twitterlogo}
          alt=""
          height="50"
          width="50"
          onClick={() => {
            window.open("https://twitter.com/Bit_Memoir");
          }}
        />
        <img
          style={{
                    marginLeft:"30px"
                  }}
          src={Telegram}
          alt=""
          height="50"
          width="50"
          onClick={() => {
            window.open("https://t.me/bitmemoirofficial");
          }}
        />
      </div>
      </div>
    </div>
  );
};

export default Contact;
