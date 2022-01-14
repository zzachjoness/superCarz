import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import BrandContext from "../Components/Context/BrandContext";
import brandsWithPhotos from "../Data/brandPhotos";
import capitalizeFirstLetter from "../Components/Functions/capitalizeFirstLetter";
import cars from "../Data/cars";
import "../Style/brandSelected.css";

const BrandSelected = (props) => {
	const { selectedBrandId } = useContext(BrandContext);
	let { selectedBrand } = useParams();
	let history = useHistory();
	window.history.scrollRestoration = "manual";
	const brand = selectedBrandId
		? brandsWithPhotos[selectedBrandId]
		: brandsWithPhotos.find(
				({ name }) => name === capitalizeFirstLetter(selectedBrand)
		  );
	const historyClick = () => {
		history.goBack();
	};
	const brandCars = cars
		.filter((car) => car.brand === brand.name)
		.map((car) => (
			<LinkContainer to={`/cars/${car.model}`} key={car.id}>
				<div id="brand-selected-data-link">{car.model}</div>
			</LinkContainer>
		));

	const brandAbout = (
		<div id="brand-selected-data-container">
			<h2 id="brand-selected-data-title">{brand.name}</h2>
			<h3 id="brand-selected-data">Founded: {brand.founded}</h3>
			<h3 id="brand-selected-data">Headquarters: {brand.headquarters}</h3>
			<h3 id="brand-selected-data">{`Organization: ${brand.type} ${
				brand.parent ? ` of ${brand.parent}` : ""
			}`}</h3>

			<h3 id="brand-selected-data">
				Webiste:
				<a
					id="brand-selected-data-link"
					href={brand.website}
					target="_blank"
					rel="noreferrer"
					referrerPolicy="no-referrer"
				>
					{brand.name}
				</a>
			</h3>
		</div>
	);

	const additionalBrandCars = (
		<h3 id="brand-selected-data-additional">
			{brand.name} Cars: {brandCars}
		</h3>
	);
	/* test
	function BrandsAboutTwo() {
		return (
			<div id="brand-selected-data-container">
				<h2 id="brand-selected-data-title">{brand.name}</h2>
				<h3 id="brand-selected-data">Founded: {brand.founded}</h3>
				<h3 id="brand-selected-data">Headquarters: {brand.headquarters}</h3>
				<h3 id="brand-selected-data">{`Organization: ${brand.type} ${
					brand.parent ? ` of ${brand.parent}` : ""
				}`}</h3>

				<h3 id="brand-selected-data">
					Webiste:
					<a
						id="brand-selected-data-link"
						href={brand.website}
						target="_blank"
						rel="noreferrer"
						referrerPolicy="no-referrer"
					>
						{brand.name}
					</a>
				</h3>
			</div>
		);
	}
	*/

	const brandImage = (
		<img id="brand-selected-image" src={brand.image} alt={brand.name}></img>
	);

	return (
		<div>
			{!brand ? (
				<div>Loading</div>
			) : (
				<div id="brand-selected-background">
					<div id="brand-selected-back-button-container">
						<div
							id="brand-selected-back-button"
							onClick={() => {
								historyClick();
							}}
						>
							&#8592; back
						</div>
					</div>
					<div id="brand-selected-container">
						{brandAbout}
						{additionalBrandCars}
						{brandImage}
					</div>
					<div id="brand-selected-about">{brand.about}</div>
				</div>
			)}
		</div>
	);
};

export default BrandSelected;
