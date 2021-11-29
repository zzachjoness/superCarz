import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import CarContext from "../Components/Context/CarContext";
import cars from "../Data/cars";
import carCost from "../Components/Functions/carCost";
import "../Style/carSelcted.css";
import placeHolderPic from "../Images/background.jpg";

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

	const findCars = cars.filter((item) => item.brand === car.brand);
	const altCarNames = findCars.map((car) => (
		<div id="car-selected-alt-cars-list">{car.model}</div>
	));
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

	const carData = (
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
	);

	const carTechData = (
		<div id="car-selected-tech-container">
			<div id="car-selected-tech-header">Technical Data</div>
			<div id="car-selected-tech-data">Engine: {car.technical.engine}</div>
			<div id="car-selected-tech-data">Layout: {car.technical.engineLayout}</div>
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
			<div id="car-selected-tech-data">Curb Weight: {car.technical.weight} lb</div>
		</div>
	);

	const carPicture = (
		<div id="car-selected-picture-container">
			<img id="car-selected-picture" src={placeHolderPic} alt="placeholder"></img>
			<div id="car-selected-picture-description">
				{car.year} {car.brand} {car.model}
			</div>
		</div>
	);

	const carAbout = (
		<div id="car-selected-about-container">
			<div id="car-selected-about-paragraph">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
				non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</div>
		</div>
	);

	const altCars = (
		<div id="car-selected-alt-cars-container">
			<div id="car-selected-alt-cars-title">Other {car.brand} Cars</div>
			<div>{altCarNames}</div>
		</div>
	);

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
						<div id="car-selected-row">
							{carData}
							{carTechData}
						</div>
						<div id="car-selected-row">
							{carPicture}
							{carAbout}
							{altCars}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CarSelected;
