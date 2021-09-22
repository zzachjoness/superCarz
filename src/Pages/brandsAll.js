import React, { useContext } from "react";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Spinner from "../Components/Spinner";
import brandPhotos from "../Data/brandPhotos";
import BrandContext from "../Components/Context/BrandContext";
import "../Style/brandsLanding.css";

const BrandsAll = () => {
	const { setSelectedBrandId } = useContext(BrandContext);
	let { path, url } = useRouteMatch();
	const history = useHistory();
	const location = useLocation();
	console.log("location: ", location);
	console.log("history: ", history);
	const brandsList = brandPhotos.map((brand, index) => (
		<LinkContainer to={`${url}/${brand.name}`} key={brand.id}>
			<div
				id="brand-list-child"
				key={index}
				onClick={() => {
					setSelectedBrandId(brand.id);
				}}
			>
				<div id="brand-list-child-title">{brand.name}</div>
				<div id="brand-list-child-image-container">
					<img
						id="brand-list-child-image"
						src={brand.image}
						alt={brand.name}
						onClick={() => {
							console.log("path: ", path);
							console.log("url: ", url);
						}}
					/>
				</div>
			</div>
		</LinkContainer>
	));

	return (
		<div>
			{history.action === "PUSH" ? <Spinner /> : null}
			<div id="brand-background">
				<div id="brand-title-container">
					<h2 id="brand-title">Brandz</h2>
				</div>

				<div id="brand-list-container" onLoad={console.log("loaded DOM")}>
					{brandsList}
				</div>
			</div>
		</div>
	);
};

export default BrandsAll;
