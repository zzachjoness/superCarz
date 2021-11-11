import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import CarContext from "../Components/Context/CarContext";
import cars from "../Data/cars";
import carCost from "../Components/Functions/carCost";
import "../Style/carSelcted.css";

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
						<div
							id="car-selected-back-button"
							onClick={() => {
								historyClick();
							}}
						>
							&#8592; back
						</div>
					</div>
					<div id="car-selected-container">
						<div id="car-selected-data-container">
							<div id="car-selected-data-title">{car.model}</div>
							<div id="car-selected-data-container-link">
								<div id="car-selected-data">Brand:</div>
								<LinkContainer to={`/brands/${car.brand}`}>
									<div id="car-selected-data-link">{car.brand}</div>
								</LinkContainer>
							</div>
							<div id="car-selected-data">Year: {car.year}</div>
							<div id="car-selected-data">Manufactured: {car.built}</div>
							<div id="car-selected-data">Sale Price: ${carCost(car)} USD</div>
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
							<div id="car-selected-tech-data">
								Horse Power: {car.technical.horsepower}
							</div>
							<div id="car-selected-tech-data">
								Torque: {car.technical.torque} ft&#8901;lb
							</div>
							<div id="car-selected-tech-data">
								Zero to Sixty: {car.technical.zeroToSixty} secs.
							</div>
							<div id="car-selected-tech-data">
								Top Speed: {car.technical.topSpeed} mph
							</div>
							<div id="car-selected-tech-data">
								Fuel Efficiency: {car.technical.mpgCombined} mpg combined
							</div>
							<div id="car-selected-tech-data">
								Curb Weight: {car.technical.weight} lb
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CarSelected;
