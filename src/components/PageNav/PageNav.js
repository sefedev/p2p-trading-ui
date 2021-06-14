import React from "react";
import classes from "./PageNav.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight, faAngleDown, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'


const pageNav = () => {
  return (
    <div className={classes.PageNav}>
      <div className={classes.pageDropDown}>
      <span>1</span>
        <span><FontAwesomeIcon icon={faAngleDown} /></span>
      </div>

      <div className={classes.pageNav}>
        <span><FontAwesomeIcon icon={faAngleDoubleLeft} className={classes.Icon}/></span>
        <span><FontAwesomeIcon icon={faAngleLeft} className={classes.Icon} /></span>
        <span className={classes.PageNumber}>1</span>
        <span className={classes.PageNumber}>2</span>
        <span><FontAwesomeIcon icon={faAngleRight} className={classes.Icon} /></span>
        <span><FontAwesomeIcon icon={faAngleDoubleRight} className={classes.Icon} /></span>
      </div>

      <div className={classes.pageInfo}>1 of 2</div>
    </div>
  );
};

export default pageNav;
