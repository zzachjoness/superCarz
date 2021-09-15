import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import BrandSelected from "./brandSelected";
import BrandsAll from "./brandsAll";
import "../Style/brandsLanding.css";

const BrandsLanding = () => {
	let { path } = useRouteMatch();
	return (
		<div>
			<Switch>
				<Route exact path="/brands" component={BrandsAll} />
				<Route path={`${path}/:selectedBrand`} component={BrandSelected} />
			</Switch>
		</div>
	);
};

export default BrandsLanding;
