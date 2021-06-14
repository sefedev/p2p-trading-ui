import React from "react";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdjust, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.Logo}>
        <h2>LOGO.PNG</h2>
      </div>

      <div className={classes.Navigation}>
        <div className={classes.Nav}>
          <a href="#/" className={classes.nav}>
            P2P
          </a>
          <a href="#/" className={classes.nav}>
            Exchange
          </a>
          <a href="#/" className={classes.nav}>
            Payment Gateway
          </a>
          <a href="#/" className={classes.nav}>
            FAQ
          </a>
        </div>
        <div className={classes.NavEmpty}></div>
      </div>
      <div className={classes.sideNav}>
        <div>
          <FontAwesomeIcon icon={faAdjust} className={classes.darkMode} />
        </div>
        <div>
          en
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <div>
          <Link to="/Login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default header;
