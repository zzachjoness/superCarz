import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import "../Style/brandSelected.css";
import BrandContext from "../Components/Context/BrandContext";
import brandsWithPhotos from "../Data/brandPhotos";

const BrandSelected = (props) => {
	const { selectedBrandId } = useContext(BrandContext);
	let { selectedBrand } = useParams();
	const brand = brandsWithPhotos[selectedBrandId];
	console.log("props: ", props);
	return (
		<div>
			<div id="brand-selected-background" onLoad={console.log("brand: ", brand)}>
				<h2 id="brand-selected-title">{selectedBrand}</h2>
			</div>
		</div>
	);
};

export default BrandSelected;
