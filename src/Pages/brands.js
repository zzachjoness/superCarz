import React from "react";
import brands from "../Data/brands";
import "../Style/brands.css";

const Brands = () => {
	console.log(brands[0]);
	const brandsList = brands.map((brand, index) => (
		<div id="brand-list-child" key={index}>
			{brand}
		</div>
	));
	return (
		<div>
			<h2 id="brand-title">Brandz</h2>
			<div id="brand-list">{brandsList}</div>
		</div>
	);
};

export default Brands;
