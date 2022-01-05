import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
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
	const findCars = cars.filter((car) => car.brand === brand.name);
	const brandCars = findCars.map((car) => <div key={car.id}>{car.model}</div>);
	const historyClick = () => {
		history.goBack();
	};

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
						<img id="brand-selected-image" src={brand.image} alt={brand.name}></img>
					</div>
					<div id="brand-selected-about">{brand.about}</div>
					<div>cars</div>
					<div>{brandCars}</div>
				</div>
			)}
		</div>
	);
};

export default BrandSelected;
