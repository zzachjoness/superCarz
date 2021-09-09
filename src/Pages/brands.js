import React, { useState, useEffect } from "react";
import brandPhotos from "../Data/brandPhotos";
import "../Style/brands.css";

const Brands = () => {
	const [selectedBrand, setSelectedBrands] = useState(null);
	const [spinner, setSpinner] = useState(true);
	const [test, setTest] = useState([]);

	useEffect(() => {
		setTimeout(() => setSpinner(false), 10000);
		setTest(brandsList);
	}, []);

	const printSelection = () => {
		console.log("clicked: ", selectedBrand);
	};
	const brandsList = brandPhotos.map((brand, index) => (
		<div
			id="brand-list-child"
			key={index}
			onClick={() => {
				setSelectedBrands(brand);
				printSelection();
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

	const displaySpinner = <div>hi</div>;

	return (
		<div>
			{spinner ? (
				<div>{displaySpinner}</div>
			) : (
				<div id="brand-background">
					<h2 id="brand-title">Brandz</h2>
					<div id="brand-list">{test}</div>
				</div>
			)}
		</div>
	);
};

export default Brands;
