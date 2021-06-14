import React from "react";
import classes from "./TableData.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const tableData = () => {
 
  
  return (
    <div className={classes.TableData}>
      <div className={classes.User}>
      <FontAwesomeIcon icon={faCircle} className={classes.FaCircle}/>
      <span><a href="#/">User</a></span>
      </div>
      <div>Other payment methods</div>
      <div>32307</div>
      <div>15-500</div>
      <div className={classes.Button}>
        <button>
          <span>Buy</span>
        </button>
      </div>
    </div>
  );
};

export default tableData;
