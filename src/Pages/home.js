import React from "react";
import brandPhotos from "../Data/brandPhotos";

const Home = () => {
	return (
		<div>
			<h1>Home...</h1>
			<h2>{brandPhotos[0].name}</h2>
			<img src={brandPhotos[0].image} alt={brandPhotos[0].name} />
		</div>
	);
};

export default Home;
