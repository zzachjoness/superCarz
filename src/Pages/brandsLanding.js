import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import BrandSelected from "./brandSelected";
import BrandsAll from "./brandsAll";
import BrandContext from "../Components/Context/BrandContext";
import "../Style/brandsLanding.css";

const BrandsLanding = () => {
	let { path } = useRouteMatch();
	const [selectedBrandId, setSelectedBrandId] = useState("");
	return (
		<div>
			<BrandContext.Provider value={{ selectedBrandId, setSelectedBrandId }}>
				<Switch>
					<Route exact path="/brands" component={BrandsAll} />
					<Route path={`${path}/:selectedBrand`} component={BrandSelected} />
				</Switch>
			</BrandContext.Provider>
		</div>
	);
};

export default BrandsLanding;
