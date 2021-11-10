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
							<h2 id="car-selected-data-title">{car.model}</h2>
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
					</div>
				</div>
			)}
		</div>
	);
};

export default CarSelected;
