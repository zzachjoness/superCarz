/*
{
		id: ,
		brand: "",
		model: "",
		built: "",
		technical: {
			horsepower: , //hp
			torque: , //lb-ft
			zeroToSixty: ,
			topSpeed: , //mph
			driveType: "",
			engineLayout: "",
			fuelType: "",
			engine: "",
			aspiration: "",
			transmission: "",
			mpgCombined: ,
			weight: , //lb
			bodyStyle: "",
		},
		year: ,
		class: "",
		cost: ,
	},
*/

const cars = [
	{
		id: 0,
		brand: "Acura",
		model: "NSX Type S",
		built: "Ohio, USA",
		technical: {
			horsepower: 600,
			torque: 492,
			zeroToSixty: 2.5,
			topSpeed: 191,
			driveType: "AWD",
			layout: "Longitudinally mid-mounted",
			fuelType: "Gasoline + Electric",
			engine: "Twin-turbocharged DOHC V6 + Electric Motor Units",
			aspiration: "Turbo",
			transmission: "9-Speed DCT",
			mpgCombined: "TBD",
			weight: 3946,
			bodyStyle: "Coupe",
		},
		year: 2022,
		class: "Hybrid",
		cost: 172000,
	},
	{
		id: 1,
		brand: "Acura",
		model: "NSX Type R",
		built: "Tochigi, Japan",
		technical: {
			horsepower: 290, //hp
			torque: 207, //lb-ft
			zeroToSixty: 4.9,
			topSpeed: 168, //mph
			driveType: "RWD",
			engineLayout: "Longitudinaally mid-mounted",
			fuelType: "Gasoline",
			engine: "C30A V6",
			aspiration: "Natural",
			transmission: "6-Speed Manual",
			mpgCombined: 17,
			weight: 2712, //lb
			bodyStyle: "Coupe",
		},
		year: 1992,
		class: "Gasoline",
		cost: 80000,
	},
	{
		id: 2,
		brand: "Acura",
		model: "Integra Type-R",
		built: "Suzuka, Japan",
		technical: {
			horsepower: 195, //hp
			torque: 130, //lb-ft
			zeroToSixty: 6.3,
			topSpeed: 145, //mph
			driveType: "FWD",
			engineLayout: "Front Transverse",
			fuelType: "Gasoline",
			engine: "B18C Inline-4",
			aspiration: "Natural",
			transmission: "5-Speed Manual",
			mpgCombined: 26.7,
			weight: 2646, //lb
			bodyStyle: "Coupe",
		},
		year: 2000,
		class: "Gasoline",
		cost: 25000,
	},
	{
		id: 3,
		brand: "Aston Martin",
		model: "DB11 AMR",
		built: "England",
		technical: {
			horsepower: 630, //hp
			torque: 516, //lb-ft
			zeroToSixty: 3.5,
			topSpeed: 208, //mph
			driveType: "RWD",
			engineLayout: "Longitudinally mid-mounted",
			fuelType: "Gasoline",
			engine: "5.2L AE31 Twin-Turbo V12",
			aspiration: "Bi-Turbo",
			transmission: "8-Speed DCT",
			mpgCombined: 18,
			weight: 3902, //lb
			bodyStyle: "Coupe",
		},
		year: 2018,
		class: "Gasoline",
		cost: 245000,
	},
	{
		id: 4,
		brand: "Aston Martin",
		model: "Valkyrie",
		built: "Warwickshire, UK",
		technical: {
			horsepower: 1160, //hp
			torque: 664, //lb-ft
			zeroToSixty: 2.6,
			topSpeed: 250, //mph
			driveType: "RWD",
			engineLayout: "Rear mid-engine",
			fuelType: "Gasoline + Electric",
			engine: "6.5L V-12 + Electric Motor",
			aspiration: "Natural",
			transmission: "7-Speed Single-clutch automated manual",
			mpgCombined: "TBD",
			weight: 2425, //lb
			bodyStyle: "Coupe",
		},
		year: 2021,
		class: "Hybrid",
		cost: 3000000,
	},
	{
		id: 5,
		brand: "Aston Martin",
		model: "Vulcan",
		built: "",
		technical: {
			horsepower: 820, //hp
			torque: 575, //lb-ft
			zeroToSixty: 2.9,
			topSpeed: 208, //mph
			driveType: "RWD",
			engineLayout: "Front mid-engine",
			fuelType: "Gasoline",
			engine: "7.0L V12",
			aspiration: "Natural",
			transmission: "6-Speed sequential",
			mpgCombined: "TBD",
			weight: 2976, //lb
			bodyStyle: "coupe",
		},
		year: 2015,
		class: "Gasoline",
		cost: 2300000,
	},
];

export default cars;
