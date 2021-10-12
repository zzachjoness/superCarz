import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import CarContext from "../Components/Context/CarContext";
import cars from "../Data/cars";

const CarSelected = () => {
	const { selectedCarId } = useContext(CarContext);
	const car = cars[selectedCarId];
	let { selectedCar } = useParams();
	let history = useHistory();
	const historyClick = () => {
		history.goBack();
	};
	return (
		<div>
			{!car ? (
				<div>Loading</div>
			) : (
				<div id="brand-selected-background" onLoad={console.log("car: ", car)}>
					<div id="brand-selected-back-button-container">
						<h3
							id="brand-selected-back-button"
							onClick={() => {
								historyClick();
							}}
						>
							&#8592; back
						</h3>
					</div>
					<div id="brand-selected-container">
						<div id="brand-selected-data-container">
							<h2 id="brand-selected-data-title">{car.model}</h2>
							<h3 id="brand-selected-data">Founded: {car.brand}</h3>
							<h3 id="brand-selected-data">
								Headquarters: {car.technical.horsepower}
							</h3>
							<h3 id="brand-selected-data">{`Organization: ${car.brand} ${
								car.brand ? ` of ${car.brand}` : ""
							}`}</h3>

							<h3 id="brand-selected-data">
								Webiste:{" "}
								<a
									href={car.built}
									target="_blank"
									rel="noreferrer"
									referrerPolicy="no-referrer"
								>
									{car.model}
								</a>
							</h3>
						</div>
					</div>
					<div>cars</div>
					<div>{car.year}</div>
				</div>
			)}
		</div>
	);
};

export default CarSelected;
