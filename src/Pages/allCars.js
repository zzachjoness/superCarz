import React, { useState } from "react";
import cars from "../Data/cars";
import "../Style/allCars.css";
import carSort from "../Components/Functions/carSort";

const AllCars = () => {
	const [carData, setCarData] = useState(cars);

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
				<div id="all-cars-grid-car-data-model">{car.model}</div>
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
