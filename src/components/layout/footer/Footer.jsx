import React from "react";
import { FlexFooterContainer } from "./styledFooterContainer";
import { HomeLan } from "../../../json/language/fa";
import { GlobalContainer } from "../../../global/styles/globalContainer";
import { Link } from "react-router-dom";

import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SamanBank from "../../../assets/imgs/footerImgs/Saman.png";
import kasboKar from "../../../assets/imgs/footerImgs/KasboKar.png";
import Etemad from "../../../assets/imgs/footerImgs/Etemad.png";


const Footer = () => {

  return (
    <footer>
      <FlexFooterContainer>
      <ul className="footer_menu">
        <li className="footer_menu--item">
          <Link to={"OrderPlace"}>
            {HomeLan.footerFirstRowFirstColumn_title}
          </Link>
        </li>
        <li className="footer_menu--item">
          <Link to={`cradite-purches`}>
            {HomeLan.footerFirstRowSecondColumn_title}
          </Link>
        </li>
        <li className="footer_menu--item">
          <Link to={`about-us`}>
            {HomeLan.footerFirstRowThirdColumn_title}
          </Link>
        </li>
        <li className="footer_menu--item">
          <Link to={`rule`}>
            {HomeLan.footerFirstRowFourthColumn_title}
          </Link>
        </li>
        <li className="footer_menu--item">
          <Link to={`store-registration`}>
            {HomeLan.footerFirstRowFifthColumn_title}
          </Link>
        </li>
      </ul>
      
        <GlobalContainer>
        <div className="second-row">
          <div className="second-row-icons-div ">
            <div>
              <a
                href="https://instagram.com/plastapp"
                className="second-row-icon"
              >
                <InstagramIcon fontSize="inherit" />
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/plastapp"
                className="second-row-icon"
              >
                <TwitterIcon fontSize="inherit" />
              </a>
            </div>
            <div>
              <a href="https://t.me/plastapp" className="second-row-icon">
                <TelegramIcon fontSize="inherit" />
              </a>
            </div>
            <div>
              <a
                href="https://facebook.com/plastapp"
                className="second-row-icon"
              >
                <FacebookIcon fontSize="inherit" />
              </a>
            </div>
          </div>
          <div className="second-row-support-div">
            <div className="second-row-icon-headphone">
              <HeadphonesIcon fontSize="inherit" />
            </div>
            <div className="second-row-support">
              <div className="second-row-support-title">
                {HomeLan.footer24Support}
              </div>

              <div className="second-row-support-number">
                {HomeLan.footerPhoneNumberSupport}
              </div>
            </div>
          </div>
          <div className="second-row-imgs-div">
            <div>
              <img
                src={SamanBank}
                alt="samanBank"
                className=" second-row-img"
              />
            </div>
            <div>
              <a href="https://ecunion.ir/verify/plastapp.ir?token=817200060e95c205cc36">
                <img
                  src={kasboKar}
                  alt="kasbokar"
                  className=" second-row-img"
                />
              </a>
            </div>
            <div>
              <a href="https://trustseal.enamad.ir/Error/ErrorReferrer">
                <img src={Etemad} alt="etemad" className=" second-row-img" />
              </a>
            </div>
          </div>
        </div>
      </GlobalContainer>

        <div className="third-row-title"> {HomeLan.footerLastTitle}</div>
      </FlexFooterContainer>
    </footer>
  );
};

export default Footer;
