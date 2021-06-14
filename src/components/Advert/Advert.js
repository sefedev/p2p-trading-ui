import React from "react";
import classes from "./advert.module.css";

const advert = () => {
  return (
    <div className={classes.Advert}>
      <div className={classes.advert}>
        <div><a href="#/">AD Board</a></div>
        <div><a href="#/">Create Advert</a></div>
      </div>
      <div className={classes.Empty}></div>
    </div>
  );
};

export default advert;
