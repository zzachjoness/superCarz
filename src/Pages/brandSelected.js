import React, { useContext } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "../Style/brandSelected.css";
import BrandContext from "../Components/Context/BrandContext";
import brandsWithPhotos from "../Data/brandPhotos";
import capitalizeFirstLetter from "../Components/Functions/capitalizeFirstLetter";

const BrandSelected = (props) => {
	const { selectedBrandId } = useContext(BrandContext);
	let { selectedBrand } = useParams();
	let { inputBrand } = useLocation();
	let history = useHistory();
	const brand = selectedBrandId
		? brandsWithPhotos[selectedBrandId]
		: brandsWithPhotos.find(
				({ name }) => name === capitalizeFirstLetter(selectedBrand)
		  );
	console.log("user select: ", selectedBrand);
	console.log("brand: ", brand);
	console.log("history: ", history);
	const historyClick = () => {
		history.goBack();
	};
	return (
		<div>
			{!brand ? (
				<div>Loading</div>
			) : (
				<div id="brand-selected-background" onLoad={console.log("brand: ", brand)}>
					<div id="brand-selected-back-button-container">
						<LinkContainer to="/brands">
							<h3
								id="brand-selected-back-button"
								onClick={() => {
									historyClick();
								}}
							>
								&#8592; back
							</h3>
						</LinkContainer>
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
								Webiste:{" "}
								<a
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
				</div>
			)}
		</div>
	);
};

export default BrandSelected;
