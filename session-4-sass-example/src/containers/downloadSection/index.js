import React from "react";
import downloadSectionImg from "../../assets/downloadSectionImg.png";
import { BiEnvelope } from "react-icons/bi";
import Button from "../../components/button";

const DownloadSection = () => {
  return (
    <div className="downloadSection">
      <div className="downloadSection-container bbb-container">
        <div className="downloadSection__textArea">
          <h4 className="title">Download Whitepaper for free.</h4>
          <h5 className="description">
            Could Health, Safety and Wellbeing be the rallying cry today’s
            leaders need?
          </h5>
          <div className="downloadSection__textArea--inputArea">
            <input
              className="inputField"
              type="text"
              placeholder="Add your email address"
            />
            <BiEnvelope className="icon" />
            <Button styles="downloadBtn" name="Download For Free" />
          </div>
          <p className="pera">
            Everyone gets something special. Sign up to be everyone. :P
          </p>
        </div>
        <div className="downloadSection__imgArea">
          <img
            className="downloadSection__imgArea--img"
            src={downloadSectionImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
