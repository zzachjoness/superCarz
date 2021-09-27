import React from "react";
import BackgroundImage from "../Images/background.jpg";
import "../Style/home.css";
import { useHistory } from "react-router-dom";

const Home = () => {
	const history = useHistory();
	const goToCars = () => {
		history.push("/cars");
	};
	return (
		<div id="background-container">
			<img src={BackgroundImage} id="background-image" alt="background" />
			<h1 id="background-text">The Galaxy's Fastest Carz.</h1>
			<button
				id="home-button"
				onClick={() => {
					goToCars();
				}}
			>
				Launch
			</button>
		</div>
	);
};

export default Home;
