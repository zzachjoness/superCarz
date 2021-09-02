import React from "react";
import brandPhotos from "../Data/brandPhotos";
import "../Style/brands.css";

const Brands = () => {
	const brandsList = brandPhotos.map((brand, index) => (
		<div id="brand-list-child" key={index}>
			<div id="brand-list-child-title">{brand.name}</div>
			<div id="brand-list-child-image-container">
				<img id="brand-list-child-image" src={brand.image} alt={brand.name} />
			</div>
		</div>
	));
	return (
		<div id="brand-background">
			<h2 id="brand-title">Brandz</h2>
			<div id="brand-list">{brandsList}</div>
		</div>
	);
};

export default Brands;
