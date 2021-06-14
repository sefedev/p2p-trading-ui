import React from "react";
import classes from "./TableHead.module.css";

const tableHead = () => {
  return (
    <div className={classes.TableHead}>
      <div>Trader</div>
      <div>Payment Method</div>
      <div>Rate,$/BTC</div>
      <div>Limit,$</div>
      <div>Actions</div>
    </div>
  );
};

export default tableHead;
