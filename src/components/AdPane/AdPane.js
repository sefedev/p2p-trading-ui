import React from "react";
import classes from "./AdPane.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH, faRedoAlt } from "@fortawesome/free-solid-svg-icons";

const adPane = ({ toggleDrawer }) => {
	return (
		<div className={classes.AdPane}>
			<div className={classes.AD}>AD board</div>
			<div className={classes.Settings}>
				<button>
					<div>
						<FontAwesomeIcon icon={faRedoAlt} />
					</div>
					<div>Refresh</div>
				</button>
				<button onClick={toggleDrawer}>
					<FontAwesomeIcon icon={faSlidersH} size="2x" />
				</button>
			</div>
		</div>
	);
};

export default adPane;
