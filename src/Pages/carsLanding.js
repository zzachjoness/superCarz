import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CarSelected from "./carSelected";
import CarsAll from "./carsAll";
import BrandContext from "../Components/Context/CarContext";
import "../Style/carsLanding.css";

const CarsLanding = () => {
	let { path } = useRouteMatch();
	const [selectedCarId, setSelectedCarId] = useState("");
	return (
		<div>
			<BrandContext.Provider value={{ selectedCarId, setSelectedCarId }}>
				<Switch>
					<Route exact path="/cars" component={CarsAll} />
					<Route path={`${path}/:selectedCar`} component={CarSelected} />
				</Switch>
			</BrandContext.Provider>
		</div>
	);
};

export default CarsLanding;
