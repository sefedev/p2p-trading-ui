import React from "react";
import classes from "./TableData.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const tableData = ({ data }) => {
 
  
  return (
    <div className={classes.TableData}>
      <div className={classes.User}>
      <FontAwesomeIcon icon={faCircle} className={classes.FaCircle}/>
      <span><a href="#/">User</a></span>
      </div>
      <div>{data.payment}</div>
      <div>{data.rate}</div>
      <div>{data.limit}</div>
      <div className={classes.Button}>
        <button>
          <span>Buy</span>
        </button>
      </div>
    </div>
  );
};

export default tableData;
