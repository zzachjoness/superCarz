import React, { useState, useEffect } from "react";
import brandPhotos from "../Data/brandPhotos";
import "../Style/brands.css";

const Brands = () => {
	const [selectedBrand, setSelectedBrands] = useState(null);
	const [spinner, setSpinner] = useState(true);
	const [test, setTest] = useState([]);

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

	const displaySpinner = <div>spinny</div>;
	useEffect(() => {
		setTest(brandsList);
		setTimeout(() => setSpinner(false), 4000);
	}, []);
	return (
		<div>
			{spinner ? (
				<div id="brand-background">
					<h2 id="brand-spinner">{displaySpinner}</h2>
				</div>
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
