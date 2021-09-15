import React from "react";
import { useParams } from "react-router-dom";
import "../Style/brandSelected.css";

const BrandSelected = () => {
	let { selectedBrand } = useParams();
	return (
		<div
			id="brand-selected-background"
			onLoad={console.log("brand loaded", selectedBrand)}
		>
			<h2 id="brand-selcted-title">{selectedBrand}</h2>
			<div id="brand-list" onLoad={console.log("loaded brand DOM")}></div>
		</div>
	);
};

export default BrandSelected;
