import * as React from "react";
import classes from "./AdBoard.module.css";
import Header from "../components/Header/Header";
import Advert from "../components/Advert/Advert";
import AdPane from "../components/AdPane/AdPane";
import TableHead from "../components/TableHead/TableHead";
import TableData from "../components/TableData/TableData";
import Footer from "../components/Footer/Footer";
import PageNav from "../components/PageNav/PageNav";
import Drawer from "../components/Drawer/Drawer";

export default function AdBoard() {
	const [isOpen, setIsOpen] = React.useState(false);

	const toggleDrawer = (e) => setIsOpen((isOpen) => !isOpen);

	return (
		<div className={classes.AdBoard}>
			{isOpen + ""}
			<Header />
			<div className={classes.Body}>
				<Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
				<Advert />
				<AdPane toggleDrawer={toggleDrawer} />
				<TableHead />

				<TableData />
				<TableData />
				<TableData />
				<TableData />
				<TableData />
				<TableData />
				<TableData />

				<PageNav />

				<Footer />
			</div>
		</div>
	);
}
