import React from "react";
import cars from "../Data/cars";
import "../Style/allCars.css";

const AllCars = () => {
	const carGrid = cars.map((car, index) => (
		<div id="all-cars-grid-car" key={car.id}>
			<div id="all-cars-grid-car-data">{car.brand}</div>
			<div id="all-cars-grid-car-data">{car.model}</div>
			<div id="all-cars-grid-car-data">{car.class}</div>
			<div id="all-cars-grid-car-data">{car.technical.horsepower}</div>
			<div id="all-cars-grid-car-data">{car.technical.torque}</div>
			<div id="all-cars-grid-car-data">{car.technical.zeroToSixty}</div>
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
						<div id="all-cars-grid-header">brand</div>
						<div id="all-cars-grid-header">model</div>
						<div id="all-cars-grid-header">class</div>
						<div id="all-cars-grid-header">hp</div>
						<div id="all-cars-grid-header">tq</div>
						<div id="all-cars-grid-header">zero-sixty</div>
					</div>
					<div id="all-cars-grid-cars">{carGrid}</div>
				</div>
			</div>
		</div>
	);
};

export default AllCars;
