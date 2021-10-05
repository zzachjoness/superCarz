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
			aspiration: "Turbo-charged",
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
			aspiration: "Bi-Turbo-charged",
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
		built: "Wellesbourne, UK",
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
			bodyStyle: "Coupe",
		},
		year: 2015,
		class: "Gasoline",
		cost: 2300000,
	},
	{
		id: 6,
		brand: "Aston Martin",
		model: "Zagato",
		built: "Wellesbourne, UK",
		technical: {
			horsepower: 510, //hp
			torque: 420, //lb-ft
			zeroToSixty: 4.1,
			topSpeed: 190, //mph
			driveType: "RWD",
			engineLayout: "Front Longitudinal",
			fuelType: "Gasoline",
			engine: "5.9L AM11 V12",
			aspiration: "Naural",
			transmission: "6-Speed manual",
			mpgCombined: "TBD",
			weight: 3704, //lb
			bodyStyle: "Coupe",
		},
		year: 2012,
		class: "Gasoline",
		cost: 520000,
	},
	{
		id: 7,
		brand: "Audi",
		model: "R8 V10 Plus",
		built: "Neckarsulm, Germany",
		technical: {
			horsepower: 542, //hp
			torque: 398, //lb-ft
			zeroToSixty: 3.5,
			topSpeed: 197, //mph
			driveType: "AWD",
			engineLayout: "",
			fuelType: "Gasoline",
			engine: "4.2L FSI DOHC V10",
			aspiration: "Natural",
			transmission: "6-Speed manual",
			mpgCombined: 17,
			weight: 3460, //lb
			bodyStyle: "Coupe",
		},
		year: 2012,
		class: "Gasoline",
		cost: 155000,
	},
	{
		id: 8,
		brand: "Audi",
		model: "Sport Quattro S1",
		built: "Neckarsulm, Germany",
		technical: {
			horsepower: 469, //hp
			torque: 354, //lb-ft
			zeroToSixty: "TBD",
			topSpeed: "TBD", //mph
			driveType: "AWD",
			engineLayout: "Front Longitudinal",
			fuelType: "Gasoline",
			engine: "2.1L Turbocharged I5",
			aspiration: "Turbo-charged",
			transmission: "6-Speed manual",
			mpgCombined: "TBD",
			weight: 2403, //lb
			bodyStyle: "Coupe",
		},
		year: 1985,
		class: "Gasoline",
		cost: 200000,
	},
	{
		id: 9,
		brand: "Audi",
		model: "RS6 Avant",
		built: "Neckarsulm, Germany",
		technical: {
			horsepower: 592, //hp
			torque: 590, //lb-ft
			zeroToSixty: 3.1,
			topSpeed: 156, //mph
			driveType: "AWD",
			engineLayout: "Front Longitudinal",
			fuelType: "Gasoline",
			engine: "V8 TFSI Twin-Turbo",
			aspiration: "Turbo-charged",
			transmission: "8-Speed Automatic",
			mpgCombined: 18,
			weight: 4740, //lb
			bodyStyle: "Wagon",
		},
		year: 2021,
		class: "Gasoline",
		cost: 111000,
	},
	{
		id: 10,
		brand: "Bentley",
		model: "Continental GT Speed",
		built: "England, UK",
		technical: {
			horsepower: 650, //hp
			torque: 664, //lb-ft
			zeroToSixty: 3.5,
			topSpeed: 208, //mph
			driveType: "AWD",
			engineLayout: "Front Longitudinal",
			fuelType: "Gasoline",
			engine: "6.0L W12 Twin-Turbo",
			aspiration: "Turbo-charged",
			transmission: "8-Speed DCT",
			mpgCombined: 15,
			weight: 6000, //lb
			bodyStyle: "Coupe",
		},
		year: 2021,
		class: "Gasoline",
		cost: 225000,
	},
];

export default cars;
