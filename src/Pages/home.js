import React from "react";
import BackgroundImage from "../Images/background.jpg";
import "../Style/home.css";

const Home = () => {
	return (
		<div id="background-container">
			<img src={BackgroundImage} id="background-image" alt="background" />
			<h1 id="background-text">The Galaxy's Fastest Carz.</h1>
			<button id="home-button">Launch</button>
		</div>
	);
};

export default Home;
