import React, { useContext } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import "../Style/brandSelected.css";
import BrandContext from "../Components/Context/BrandContext";
import brandsWithPhotos from "../Data/brandPhotos";
import capitalizeFirstLetter from "../Components/Functions/capitalizeFirstLetter";

const BrandSelected = (props) => {
	const { selectedBrandId } = useContext(BrandContext);
	let { selectedBrand } = useParams();
	let { inputBrand } = useLocation();
	let { history } = useHistory();
	const brand = selectedBrandId
		? brandsWithPhotos[selectedBrandId]
		: brandsWithPhotos.find(
				({ name }) => name === capitalizeFirstLetter(selectedBrand)
		  );
	console.log("user select: ", selectedBrand);
	console.log("brand: ", brand);
	return (
		<div>
			{!brand ? (
				<div>Loading</div>
			) : (
				<div id="brand-selected-background" onLoad={console.log("brand: ", brand)}>
					<h2 id="brand-selected-title">{brand.name}</h2>
					<img src={brand.image} alt={brand.name}></img>
					<h3>Founded: {brand.founded}</h3>
					<h3>Headquarters: {brand.headquarters}</h3>
					<h3>
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
			)}
		</div>
	);
};

export default BrandSelected;
