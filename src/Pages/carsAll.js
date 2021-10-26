import React, { useState, useContext } from "react";
import { useRouteMatch } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import CarContext from "../Components/Context/CarContext";
import cars from "../Data/cars";
import "../Style/carsAll.css";
import carSort from "../Components/Functions/carSort";

const AllCars = () => {
	const [carData, setCarData] = useState(cars);
	const { setSelectedCarId } = useContext(CarContext);
	let { url } = useRouteMatch();
	const SelectSort = (props) => {
		return (
			<div id="all-cars-grid-sort-container">
				<div
					id="all-cars-grid-sort-button"
					onClick={() => {
						setCarData(carSort(cars, "up", props.name, props.reverse));
					}}
				>
					&#x25b3;
				</div>
				<div
					id="all-cars-grid-sort-button"
					onClick={() => {
						setCarData(carSort(cars, "down", props.name, props.reverse));
					}}
				>
					&#x25BD;
				</div>
			</div>
		);
	};
	const CarGrid = () =>
		carData.map((car) => (
			<div id="all-cars-grid-car" key={car.id}>
				<div id="all-cars-grid-car-data-brand">{car.brand}</div>
				<LinkContainer to={`${url}/${car.model}`}>
					<div
						id="all-cars-grid-car-data-model"
						onClick={() => setSelectedCarId(car.id)}
					>
						{car.model}
					</div>
				</LinkContainer>
				<div id="all-cars-grid-car-data-class">{car.class}</div>
				<div id="all-cars-grid-car-data-year">{car.year}</div>
				<div id="all-cars-grid-car-data-technical-hp">
					{car.technical.horsepower}
				</div>
				<div id="all-cars-grid-car-data-technical-torque">
					{car.technical.torque}
				</div>
				<div id="all-cars-grid-car-data-technical-zeroSixty">
					{car.technical.zeroToSixty}
				</div>
				<div id="all-cars-grid-car-data-technical-topSpeed">
					{car.technical.topSpeed}
				</div>
			</div>
		));

	return (
		<div id="all-cars-background">
			<div id="all-cars-title-container">
				<div id="all-cars-title">All cars</div>
			</div>
			<div id="all-cars-grid-body">
				<div id="all-cars-grid-container">
					<div id="all-cars-grid-header-container">
						<div id="all-cars-grid-header-component-brand">
							<div id="all-cars-grid-header">brand</div>
							<SelectSort name={["brand"]} reverse={false} />
						</div>
						<div id="all-cars-grid-header-component-model">
							<div id="all-cars-grid-header">model</div>
							<SelectSort name={["model"]} reverse={false} />
						</div>
						<div id="all-cars-grid-header-component-class">
							<div id="all-cars-grid-header">class</div>
							<SelectSort name={["class"]} reverse={false} />
						</div>
						<div id="all-cars-grid-header-component-year">
							<div id="all-cars-grid-header">year</div>
							<SelectSort name={["year"]} reverse={true} />
						</div>
						<div id="all-cars-grid-header-component-technical-hp">
							<div id="all-cars-grid-header">hp</div>
							<SelectSort name={["technical", "horsepower"]} reverse={true} />
						</div>
						<div id="all-cars-grid-header-component-technical-torque">
							<div id="all-cars-grid-header">t (ftlb)</div>
							<SelectSort name={["technical", "torque"]} reverse={true} />
						</div>
						<div id="all-cars-grid-header-component-technical-zeroSixty">
							<div id="all-cars-grid-header">zero-sixty</div>
							<SelectSort name={["technical", "zeroToSixty"]} reverse={false} />
						</div>
						<div id="all-cars-grid-header-component-technical-topSpeed">
							<div id="all-cars-grid-header">top-speed (mpg)</div>
							<SelectSort name={["technical", "topSpeed"]} reverse={true} />
						</div>
					</div>
					<div id="all-cars-grid-cars">
						<CarGrid />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllCars;
