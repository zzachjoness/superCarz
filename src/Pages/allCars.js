import React, { useState } from "react";
import cars from "../Data/cars";
import "../Style/allCars.css";

const AllCars = () => {
	const [carData, setCarData] = useState(cars);
	const [sortType, setSortType] = useState(null);
	const [sortDirection, setSortDirection] = useState(null);
	const SelectSort = (props) => {
		return (
			<div id="all-cars-grid-sort-container">
				<div
					id="all-cars-grid-sort-button"
					onClick={() => {
						console.log("ascend: ", props);
						setSortType(props);
						setSortDirection("ascend");
					}}
				>
					&#x25b3;
				</div>
				<div
					id="all-cars-grid-sort-button"
					onClick={() => {
						console.log("descend: ", props);
						setSortType(props);
						setSortDirection("descned");
					}}
				>
					&#x25BD;
				</div>
			</div>
		);
	};
	const carGrid = carData.map((car, index) => (
		<div
			id="all-cars-grid-car"
			key={car.id}
			onLoad={console.log("loaded: ", car.model)}
		>
			<div id="all-cars-grid-car-data">{car.brand}</div>
			<div id="all-cars-grid-car-data">{car.model}</div>
			<div id="all-cars-grid-car-data">{car.class}</div>
			<div id="all-cars-grid-car-data">{car.year}</div>
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
						<div id="all-cars-grid-header-component">
							<div id="all-cars-grid-header">brand</div>
							<SelectSort name="brand" />
						</div>
						<div id="all-cars-grid-header-component">
							<div id="all-cars-grid-header">model</div>
							<SelectSort name="model" />
						</div>
						<div id="all-cars-grid-header-component">
							<div id="all-cars-grid-header">class</div>
							<SelectSort name="class" />
						</div>
						<div id="all-cars-grid-header-component">
							<div id="all-cars-grid-header">year</div>
							<SelectSort name="year" />
						</div>
						<div id="all-cars-grid-header-component">
							<div id="all-cars-grid-header">horsepower</div>
							<SelectSort name="technical.horsepower" />
						</div>
						<div id="all-cars-grid-header-component">
							<div id="all-cars-grid-header">torque ftlb</div>
							<SelectSort name="techincal.torque" />
						</div>
						<div id="all-cars-grid-header-component">
							<div id="all-cars-grid-header">zero-sixty</div>
							<SelectSort name="technical.zeroToSixty" />
						</div>
					</div>
					<div id="all-cars-grid-cars">{carGrid}</div>
				</div>
			</div>
		</div>
	);
};

export default AllCars;
