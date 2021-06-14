import React from "react";
import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  } from '@fortawesome/free-solid-svg-icons';
import { faBitcoin, faFacebookF, faInstagram, faTelegramPlane, faTwitter, faVk } from '@fortawesome/free-brands-svg-icons';


const footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.Socials}>
        <div className={classes.Logo}>
          <h3>LOGO.PNG</h3>
        </div>

        <div className={classes.socials}>
        <div><FontAwesomeIcon className={classes.Brand} icon={faVk} size="2x"/></div>
        <div><FontAwesomeIcon className={classes.Brand} icon={faFacebookF} size="2x"/></div>
        <div><FontAwesomeIcon className={classes.Brand} icon={faTwitter} size="2x"/></div>
        <div><FontAwesomeIcon className={classes.Brand} icon={faInstagram} size="2x"/></div>
        <div><FontAwesomeIcon className={classes.Brand} icon={faTelegramPlane} size="2x"/></div>
        <div><FontAwesomeIcon className={classes.Brand} icon={faBitcoin} size="2x"/></div>
        </div>
      </div>

      <div className={classes.Products}>
        <div className={classes.ulHead}>
          <h3>PRODUCTS</h3>
        </div>
        <ul>
        <li>
          <a href="#/">P2P-exchange</a>
        </li>
        <li>
          <a href="#/">Exchange</a>
        </li>
        <li>
          <a href="#/">Wallet</a>
        </li>
        <li>
          <a href="#/">Merchant</a>
        </li>
        <li>
          <a href="#/">Demo account</a>
        </li>
        <li>
          <a href="#/">Trader Workspace</a>
        </li>
        </ul>
      </div>

      <div className={classes.Company}>
        <div className={classes.ulHead}>
          <h3>COMPANY</h3>
        </div>
        <ul>
          <li>
            <a href="#/">About the company</a>
          </li>
          <li>
            <a href="#/">Blog</a>
          </li>
          <li>
            <a href="#/">Changelog</a>
          </li>
          <li>
            <a href="#/">Platform reviews</a>
          </li>
          <li>
            <a href="#/">Referral program</a>
          </li>
          <li>
            <a href="#/">Commissions</a>
          </li>
          <li>
            <a href="#/">Terms of Service</a>
          </li>
          <li>
            <a href="#/">Security policy</a>
          </li>
        </ul>
      </div>

      <div className={classes.Help}>
        <div className={classes.ulHead}>
          <h3>HELP AND SUPPORT</h3>
        </div>
        <ul>
        <li>
          <a href="#/">How to secure yourself</a>
        </li>
        <li>
          <a href="#/">Forum</a>
        </li>
        <li>
          <a href="#/">Account Verification</a>
        </li>
        <li>
          <a href="#/">Support in Telegram</a>
        </li>
        <li>
          <a href="#/">Support</a>
        </li>
        <li>
          <a href="#/">Wallet stats</a>
        </li>
        <li>
          <a href="#/">Instructions</a>
        </li>
        <li>
          <a href="#/">Documentation API</a>
        </li>
        </ul>
      </div>
    </div>
  );
};

export default footer;
