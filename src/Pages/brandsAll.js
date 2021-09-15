import React from "react";
import { useRouteMatch } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Spinner from "../Components/Spinner";
import brandPhotos from "../Data/brandPhotos";
import "../Style/brandsLanding.css";

const BrandsAll = () => {
	let { path, url } = useRouteMatch();
	const printSelection = (brand) => {
		console.log("clicked: ", brand);
	};
	const brandsList = brandPhotos.map((brand, index) => (
		<LinkContainer to={`${url}/${brand.name}`} key={index}>
			<div
				id="brand-list-child"
				key={index}
				onClick={() => {
					printSelection(brand);
				}}
			>
				<div id="brand-list-child-title">{brand.name}</div>
				<img
					id="brand-list-child-image"
					src={brand.image}
					alt={brand.name}
					onLoad={console.log("loaded: ", { brand })}
					onClick={() => {
						console.log("path: ", path);
						console.log("url: ", url);
					}}
				/>
			</div>
		</LinkContainer>
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

export default BrandsAll;
