import React, { useState, useEffect } from "react";
import brandPhotos from "../Data/brandPhotos";
import "../Style/brands.css";
import Spinner from "../Components/Spinner";

const Brands = () => {
	//const [selectedBrand, setSelectedBrands] = useState(null);

	const printSelection = (brand) => {
		console.log("clicked: ", brand);
	};
	const brandsList = brandPhotos.map((brand, index) => (
		<div
			id="brand-list-child"
			key={index}
			onClick={() => {
				//setSelectedBrands(brand);
				printSelection(brand);
			}}
		>
			<div id="brand-list-child-title">{brand.name}</div>
			<img
				id="brand-list-child-image"
				src={brand.image}
				alt={brand.name}
				onLoad={console.log("loaded: ", { brand })}
			/>
		</div>
	));

	return (
		<div>
			<Spinner />
			<div id="brand-background">
				<h2 id="brand-title">Brandz</h2>
				<div id="brand-list" onLoad={console.log("loaded DOM")}>
					{brandsList}
				</div>
			</div>
		</div>
	);
};

export default Brands;
