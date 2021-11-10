import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import CarContext from "../Components/Context/CarContext";
import cars from "../Data/cars";
import carCost from "../Components/Functions/carCost";
import "../Style/carsSelcted.css";

const CarSelected = () => {
	const { selectedCarId } = useContext(CarContext);
	const { selectedCar } = useParams();
	const car = selectedCarId
		? cars[selectedCarId]
		: cars.find(({ model }) => model === selectedCar);

	let history = useHistory();
	const historyClick = () => {
		history.goBack();
	};

	/*
technical: {
			horsepower: 252, //hp
			torque: 223, //lb-ft
			zeroToSixty: 6.3,
			topSpeed: 152, //mph
			driveType: "AWD",
			engineLayout: "Front-engine",
			fuelType: "Gasoline",
			engine: "2.0L Turbo-charged I4",
			aspiration: "Turbo-charged",
			transmission: "5-speed manual",
			mpgCombined: 23,
			weight: 3064, //lb
			bodyStyle: "2-door coupe",
		},
	*/

	return (
		<div>
			{!car ? (
				<div>Loading</div>
			) : (
				<div id="car-selected-background" onLoad={console.log("car: ", car)}>
					<div id="car-selected-back-button-container">
						<h3
							id="car-selected-back-button"
							onClick={() => {
								historyClick();
							}}
						>
							&#8592; back
						</h3>
					</div>
					<div id="car-selected-container">
						<div id="car-selected-data-container">
							<h1 id="car-selected-data-title">{car.model}</h1>
							<div id="car-selected-data-container-link">
								<h3 id="car-selected-data">Brand: </h3>
								<LinkContainer to={`/brands/${car.brand}`}>
									<h3 id="car-selected-data-link">{car.brand}</h3>
								</LinkContainer>
							</div>
							<h3 id="car-selected-data">Year: {car.year}</h3>
							<h3 id="car-selected-data">Manufactured: {car.built}</h3>
							<h3 id="car-selected-data">Sale Price: ${carCost(car)} USD</h3>
						</div>
						<div id="car-selected-tech-container">
							<div id="car-selected-tech-header">Technical Data</div>
							<div id="car-selected-tech-data">Engine: {car.technical.engine}</div>
							<div id="car-selected-tech-data">
								Layout: {car.technical.engineLayout}
							</div>
							<div id="car-selected-tech-data">Drive: {car.technical.driveType}</div>
							<div id="car-selected-tech-data">Fuel: {car.technical.fuelType}</div>
							<div id="car-selected-tech-data">Body: {car.technical.bodyStyle}</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CarSelected;
