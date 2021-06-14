import * as React from "react";
import classe from "./Drawer.module.css";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const OurTokenList = ({ toggleDrawer }) => {
	return (
		<div role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
			<List>
				<h2>Filter</h2>
			</List>
			<List>Selling Asset</List>
			<List>
				<input className={classe.Input} type="text" placeholder="Search" />
			</List>
			<List>
				{["ETH", "WBTC", "DAI", "WBTC", "LINK"].map((text, index) => (
					<ListItem button key={text}>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				<List>Buying Asset</List>
				<List>
					<input className={classe.Input} type="text" placeholder="Search" />
				</List>
				{["ETH", "WBTC", "DAI", "WBTC", "LINK"].map((text, index) => (
					<ListItem button key={text}>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	);
};

export default function TemporaryDrawer({ isOpen, toggleDrawer }) {
	return (
		<Drawer open={isOpen} onClose={toggleDrawer}>
			<OurTokenList toggleDrawer={toggleDrawer} />
		</Drawer>
	);
}
