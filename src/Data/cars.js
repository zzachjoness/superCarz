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
			mpgCombined: "",
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
			mpgCombined: "",
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
			mpgCombined: "",
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
			mpgCombined: "",
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
			zeroToSixty: "3.0",
			topSpeed: "155", //mph
			driveType: "AWD",
			engineLayout: "Front Longitudinal",
			fuelType: "Gasoline",
			engine: "2.1L Turbocharged I5",
			aspiration: "Turbo-charged",
			transmission: "6-Speed manual",
			mpgCombined: "",
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
	{
		id: 11,
		brand: "Bentley",
		model: "Hunaudieres",
		built: "Crewe, England, UK",
		technical: {
			horsepower: 623, //hp
			torque: 561, //lb-ft
			zeroToSixty: "3.4",
			topSpeed: 217, //mph
			driveType: "AWD",
			engineLayout: "Mid-Engine",
			fuelType: "Gasoline",
			engine: "8.0L W16",
			aspiration: "Natural",
			transmission: "5-Speed Manual",
			mpgCombined: "",
			weight: 3086, //lb
			bodyStyle: "Coupe",
		},
		year: 1999,
		class: "Gasoline",
		cost: "",
	},
	{
		id: 12,
		brand: "Bentley",
		model: "Turbo RT",
		built: "Crewe, England, UK",
		technical: {
			horsepower: 400, //hp
			torque: 590, //lb-ft
			zeroToSixty: 6.0,
			topSpeed: 150, //mph
			driveType: "RWD",
			engineLayout: "Front-Engine",
			fuelType: "Gasoline",
			engine: "6.75L V8",
			aspiration: "Turbo-charged",
			transmission: "4-Speed Automatic",
			mpgCombined: 12,
			weight: 5400, //lb
			bodyStyle: "Sedan",
		},
		year: 1998,
		class: "Gasoline",
		cost: 211600,
	},
	{
		id: 13,
		brand: "Bentley",
		model: "Mulsanne Speed",
		built: "Crewe, England, UK",
		technical: {
			horsepower: 530, //hp
			torque: 811, //lb-ft
			zeroToSixty: 4.8,
			topSpeed: 190, //mph
			driveType: "RWD",
			engineLayout: "Front-Mounted",
			fuelType: "Gasoline",
			engine: "6.75L Twin-Turbo V8",
			aspiration: "Turbo-charged",
			transmission: "8-Speed Automatic",
			mpgCombined: 13,
			weight: 5920, //lb
			bodyStyle: "Sedan",
		},
		year: 2018,
		class: "Gasoline",
		cost: 340000,
	},
	{
		id: 14,
		brand: "BMW",
		model: "507",
		built: "Milbertshofen, Germany",
		technical: {
			horsepower: 148, //hp
			torque: 173, //lb-ft
			zeroToSixty: 10,
			topSpeed: 127, //mph
			driveType: "RWD",
			engineLayout: "Front-Mounted",
			fuelType: "Gasoline",
			engine: "3168cc M507/1 V8",
			aspiration: "Natural",
			transmission: "4-Speed Manual",
			mpgCombined: 14,
			weight: 2932, //lb
			bodyStyle: "Coupe",
		},
		year: 1956,
		class: "Gasoline",
		cost: 9000,
	},
	{
		id: 15,
		brand: "BMW",
		model: "E39 M5",
		built: "Dingolfing, Germany",
		technical: {
			horsepower: 394, //hp
			torque: 369, //lb-ft
			zeroToSixty: 4.6,
			topSpeed: 155, //mph
			driveType: "RWD",
			engineLayout: "Front-Mounted",
			fuelType: "Gasoline",
			engine: "4.9L S62 V8",
			aspiration: "Natural",
			transmission: "6-Speed Manual",
			mpgCombined: 15,
			weight: 3960, //lb
			bodyStyle: "Sedan",
		},
		year: 2000,
		class: "Gasoline",
		cost: 72000,
	},
	{
		id: 16,
		brand: "BMW",
		model: "E30 M3",
		built: "Munich, Germany",
		technical: {
			horsepower: 197, //hp
			torque: 177, //lb-ft
			zeroToSixty: 6.2,
			topSpeed: 149, //mph
			driveType: "RWD",
			engineLayout: "Front-Mounted",
			fuelType: "Gasoline",
			engine: "2.5L S14 I4",
			aspiration: "Natural",
			transmission: "5-Speed Manual",
			mpgCombined: 16,
			weight: 2700, //lb
			bodyStyle: "Coupe",
		},
		year: 1991,
		class: "Gasoline",
		cost: 35000,
	},
	{
		id: 17,
		brand: "BMW",
		model: "M1 E26",
		built: "Munich, Germany",
		technical: {
			horsepower: 273, //hp
			torque: 243, //lb-ft
			zeroToSixty: 5.8,
			topSpeed: 162, //mph
			driveType: "RWD",
			engineLayout: "Mid-Engine",
			fuelType: "Gasoline",
			engine: "3.5L M88/1 I6",
			aspiration: "Turbo-charged",
			transmission: "5-Speed Manual",
			mpgCombined: 15,
			weight: 2866, //lb
			bodyStyle: "Coupe",
		},
		year: 1978,
		class: "Gasoline",
		cost: 115000,
	},
	{
		id: 18,
		brand: "Bugatti",
		model: "Type 13",
		built: "Molsheim, France",
		technical: {
			horsepower: 30, //hp
			torque: "15", //lb-ft
			zeroToSixty: "18",
			topSpeed: 78, //mph
			driveType: "RWD",
			engineLayout: "Front-Longitudinal",
			fuelType: "Gasoline",
			engine: "1.4L dual carb I4",
			aspiration: "Natural",
			transmission: "4-Speed Manual",
			mpgCombined: "",
			weight: 660, //lb
			bodyStyle: "Roadster",
		},
		year: 1920,
		class: "Gasoline",
		cost: "",
	},
	{
		id: 19,
		brand: "Bugatti",
		model: "Type 35",
		built: "Molsheim, France",
		technical: {
			horsepower: 160, //hp
			torque: "178", //lb-ft
			zeroToSixty: 7.0,
			topSpeed: 130, //mph
			driveType: "RWD",
			engineLayout: "Front-Longitudinal",
			fuelType: "Gasoline",
			engine: "2.3L V8",
			aspiration: "Natural",
			transmission: "4-Speed Manual",
			mpgCombined: "",
			weight: 1650, //lb
			bodyStyle: "Roadster",
		},
		year: 1924,
		class: "Gasoline",
		cost: "",
	},
	{
		id: 20,
		brand: "Bugatti",
		model: "Veyron 16.4 SuperSport",
		built: "Molsheim,France",
		technical: {
			horsepower: 1184, //hp
			torque: 1106, //lb-ft
			zeroToSixty: 2.4,
			topSpeed: 267, //mph
			driveType: "AWD",
			engineLayout: "Mid-Engine",
			fuelType: "Gasoline",
			engine: "8.0L W16 Quad Turbo",
			aspiration: "Turbo-charged",
			transmission: "7-Speed DSG",
			mpgCombined: 12,
			weight: 4400, //lb
			bodyStyle: "Coupe",
		},
		year: 2010,
		class: "Gasoline",
		cost: 2427000,
	},
	{
		id: 21,
		brand: "Bugatti",
		model: "Chiron SuperSport 300+",
		built: "Molsheim, France",
		technical: {
			horsepower: 1577, //hp
			torque: 1180, //lb-ft
			zeroToSixty: 2.4,
			topSpeed: 305, //mph
			driveType: "AWD",
			engineLayout: "Mid-Engine",
			fuelType: "Gasoline",
			engine: '8.0L W16 Quad Turbo "Thor"',
			aspiration: "Turbo-charged",
			transmission: "7-Speed DSG",
			mpgCombined: 12,
			weight: 4361, //lb
			bodyStyle: "Coupe",
		},
		year: 2019,
		class: "Gasoline",
		cost: 3890000,
	},
	{
		id: 22,
		brand: "Ferrari",
		model: "LaFerrari F150",
		built: "Maranello, Italy",
		technical: {
			horsepower: 950, //hp
			torque: 664, //lb-ft
			zeroToSixty: 2.7,
			topSpeed: 217, //mph
			driveType: "RWD",
			engineLayout: "Rear mid-engine",
			fuelType: "Gasoline + Electric",
			engine: "6.3L F140FE V12 + HY-KERS",
			aspiration: "Natural",
			transmission: "7-Speed DCT",
			mpgCombined: 14,
			weight: 2767, //lb
			bodyStyle: "Coupe",
		},
		year: 2013,
		class: "Hybrid",
		cost: 1420000,
	},
	{
		id: 23,
		brand: "Ferrari",
		model: "250 GTO",
		built: "Maranello, Italy",
		technical: {
			horsepower: 300, //hp
			torque: 216, //lb-ft
			zeroToSixty: 6.1,
			topSpeed: 175, //mph
			driveType: "RWD",
			engineLayout: "Front-Engine",
			fuelType: "Gasoline",
			engine: "3.0L V12",
			aspiration: "Natural",
			transmission: "5-Speed manual",
			mpgCombined: 10,
			weight: 2094, //lb
			bodyStyle: "2-door berlinetta",
		},
		year: 1964,
		class: "Gasoline",
		cost: 18000,
	},
	{
		id: 24,
		brand: "Ferrari",
		model: "F40",
		built: "Maranello, Italy",
		technical: {
			horsepower: 471, //hp
			torque: 426, //lb-ft
			zeroToSixty: 3.8,
			topSpeed: 201, //mph
			driveType: "RWD",
			engineLayout: "Mid-engine",
			fuelType: "Gasoline",
			engine: "2.9L twin-turbo V8",
			aspiration: "Turbo-charged",
			transmission: "5-Speed Manual",
			mpgCombined: 13,
			weight: 3000, //lb
			bodyStyle: "2-door berlinetta",
		},
		year: 1987,
		class: "Gasoline",
		cost: 400000,
	},
	{
		id: 25,
		brand: "Ferrari",
		model: "SF90 Stradale",
		built: "Maranello, Italy",
		technical: {
			horsepower: 989, //hp
			torque: 590, //lb-ft
			zeroToSixty: 2.0,
			topSpeed: 211, //mph
			driveType: "AWD",
			engineLayout: "Longitudinal mid-engine",
			fuelType: "Gasoline + Plug-in Electric",
			engine: "3990cc Twin-turbo V8 + 3 Electric Motors",
			aspiration: "Turbo-charged",
			transmission: "8-Speed DCT",
			mpgCombined: 18,
			weight: 3527, //lb
			bodyStyle: "2-door berlinetta",
		},
		year: 2021,
		class: "Hybrid",
		cost: 625000,
	},
	{
		id: 26,
		brand: "Ford",
		model: "F-150 SVT Raptor",
		built: "Dearborn, Michigan, USA",
		technical: {
			horsepower: 450, //hp
			torque: 510, //lb-ft
			zeroToSixty: 5.2,
			topSpeed: 107, //mph
			driveType: "4WD",
			engineLayout: "Front",
			fuelType: "Gasoline",
			engine: "3.5L D35 twin-turbo V8",
			aspiration: "Turbo-charged",
			transmission: "10-Speed Automatic",
			mpgCombined: 16,
			weight: 5700, //lb
			bodyStyle: "Pickup Truck",
		},
		year: 2018,
		class: "Gasoline",
		cost: 49520,
	},
	{
		id: 27,
		brand: "Ford",
		model: "Ford GT Mk II",
		built: "Markham, Ontario, Canada",
		technical: {
			horsepower: 647, //hp
			torque: 550, //lb-ft
			zeroToSixty: 2.9,
			topSpeed: 216, //mph
			driveType: "RWD",
			engineLayout: "Mid-engine",
			fuelType: "Gasoline",
			engine: "3.5L Twin-turbo EcoBoost V6",
			aspiration: "Turbo-charged",
			transmission: "7-Speed DCT",
			mpgCombined: 14,
			weight: 3250, //lb
			bodyStyle: "Coupe",
		},
		year: 2017,
		class: "Gasoline",
		cost: 450000,
	},
	{
		id: 28,
		brand: "Ford",
		model: "Escort RS Cosworth",
		built: "Rheine, Germany",
		technical: {
			horsepower: 224, //hp
			torque: 224, //lb-ft
			zeroToSixty: 5.6,
			topSpeed: 144, //mph
			driveType: "AWD",
			engineLayout: "Longitudinal Front-engine",
			fuelType: "Gasoline",
			engine: "1993cc Cosworth YBP turbo I4",
			aspiration: "Turbo-charged",
			transmission: "5-Speed Manual",
			mpgCombined: 23,
			weight: 2880, //lb
			bodyStyle: "3-door hatch",
		},
		year: 1994,
		class: "Gasoline",
		cost: 25000,
	},
	{
		id: 29,
		brand: "Ford",
		model: "Fiesta ST",
		built: "Cuatitlan, Mexico",
		technical: {
			horsepower: 197, //hp
			torque: 202, //lb-ft
			zeroToSixty: 6.4,
			topSpeed: 130, //mph
			driveType: "FWD",
			engineLayout: "Longitudinal Front-engine",
			fuelType: "Gasoline",
			engine: "1.6L turbocharged I4",
			aspiration: "Turbo-charged",
			transmission: "6-Speed Manual",
			mpgCombined: 28,
			weight: 2720, //lb
			bodyStyle: "5-door hatch",
		},
		year: 2018,
		class: "Gasoline",
		cost: 22160,
	},
	{
		id: 30,
		brand: "Honda",
		model: "S2000",
		built: "Takanezawa, Japan",
		technical: {
			horsepower: 240, //hp
			torque: 162, //lb-ft
			zeroToSixty: 5.9,
			topSpeed: 149, //mph
			driveType: "RWD",
			engineLayout: "Front mid-engine",
			fuelType: "Gasoline",
			engine: "2.2L VTEC I4",
			aspiration: "Natural",
			transmission: "6-speed Manual",
			mpgCombined: 22,
			weight: 2835, //lb
			bodyStyle: "2-door coupe",
		},
		year: 2005,
		class: "Gasoline",
		cost: 33150,
	},
	{
		id: 31,
		brand: "Honda",
		model: "S800 Coupe",
		built: "Suzuka, Japan",
		technical: {
			horsepower: 70, //hp
			torque: 49, //lb-ft
			zeroToSixty: 13.6,
			topSpeed: 100, //mph
			driveType: "RWD",
			engineLayout: "Front-mounted Longitudinal",
			fuelType: "Gasoline",
			engine: "791cc I4",
			aspiration: "Natural",
			transmission: "4-speed Manual",
			mpgCombined: 35,
			weight: 1724, //lb
			bodyStyle: "2-coor coupe",
		},
		year: 1968,
		class: "Gasoline",
		cost: 10000,
	},
	{
		id: 32,
		brand: "Honda",
		model: "Civic Type R",
		built: "Swindon, U.K.",
		technical: {
			horsepower: 306, //hp
			torque: 295, //lb-ft
			zeroToSixty: 4.9,
			topSpeed: 169, //mph
			driveType: "FWD",
			engineLayout: "Front-mounted Longitudinal",
			fuelType: "Gasoline",
			engine: "2.0L Turbo-charged I4",
			aspiration: "Turbo-charged",
			transmission: "6-speed Manual",
			mpgCombined: 25,
			weight: 3071, //lb
			bodyStyle: "4-door sedan",
		},
		year: 2021,
		class: "Gasoline",
		cost: 37990,
	},
	{
		id: 33,
		brand: "Honda",
		model: "Prelude",
		built: "Sayama, Japan",
		technical: {
			horsepower: 190, //hp
			torque: 158, //lb-ft
			zeroToSixty: 7,
			topSpeed: 150, //mph
			driveType: "FWD",
			engineLayout: "Front-mounted Longitudinal",
			fuelType: "Gasoline",
			engine: "2.2L VTEC I4",
			aspiration: "Natural",
			transmission: "5-Speed Manual",
			mpgCombined: 24,
			weight: 2932, //lb
			bodyStyle: "2-door coupe",
		},
		year: 1996,
		class: "Gasoline",
		cost: 25880,
	},
	{
		id: 34,
		brand: "Jaguar",
		model: "E-Type Series 3",
		built: "Coventry, England",
		technical: {
			horsepower: 272, //hp
			torque: 304, //lb-ft
			zeroToSixty: 6.8,
			topSpeed: 135, //mph
			driveType: "RWD",
			engineLayout: "Front-mounted Longitudinal",
			fuelType: "Gasoline",
			engine: "5.3L V12",
			aspiration: "Natural",
			transmission: "4-speed Manual",
			mpgCombined: 13,
			weight: 3380, //lb
			bodyStyle: "2-door coupe",
		},
		year: 1971,
		class: "Gasoline",
		cost: 8000,
	},
	{
		id: 35,
		brand: "Jaguar",
		model: "XKR-S",
		built: "Birmingham, England",
		technical: {
			horsepower: 543, //hp
			torque: 502, //lb-ft
			zeroToSixty: 4.2,
			topSpeed: 186, //mph
			driveType: "RWD",
			engineLayout: "Front-mounted Longitudinal",
			fuelType: "Gasoline",
			engine: "5.0L Super-charged V8 550 PS",
			aspiration: "Super-charged",
			transmission: "6-speed Automatic",
			mpgCombined: 18,
			weight: 4063, //lb
			bodyStyle: "2-door coupe",
		},
		year: 2011,
		class: "Gasoline",
		cost: 140000,
	},
	{
		id: 36,
		brand: "Jaguar",
		model: "F-Pace SRV",
		built: "Solihull, U.K.",
		technical: {
			horsepower: 550, //hp
			torque: 516, //lb-ft
			zeroToSixty: 3.8,
			topSpeed: 178, //mph
			driveType: "AWD",
			engineLayout: "Front-mounted Longitudinal",
			fuelType: "Gasoline",
			engine: "Super-charged V8",
			aspiration: "Super-charged",
			transmission: "8-speed Automatic",
			mpgCombined: 18,
			weight: 4800, //lb
			bodyStyle: "SUV",
		},
		year: 2021,
		class: "Gasoline",
		cost: 86000,
	},
	{
		id: 37,
		brand: "Jaguar",
		model: "XFR-S Sportbrake",
		built: "Birmingham, England",
		technical: {
			horsepower: 542, //hp
			torque: 501, //lb-ft
			zeroToSixty: 4.6,
			topSpeed: 186, //mph
			driveType: "RWD",
			engineLayout: "Front-mounted Longitudinal",
			fuelType: "Gasoline",
			engine: "5.0L Super-charged V8",
			aspiration: "Super-charged",
			transmission: "8-speed Automatic",
			mpgCombined: 18,
			weight: 4336, //lb
			bodyStyle: "4-door wagon",
		},
		year: 2015,
		class: "Gasoline",
		cost: 88000,
	},
	{
		id: 38,
		brand: "Koenigsegg",
		model: "Agera RS",
		built: "Angelholm, Sweden",
		technical: {
			horsepower: 1341, //hp
			torque: 1011, //lb-ft
			zeroToSixty: 2.8,
			topSpeed: 249, //mph
			driveType: "RWD",
			engineLayout: "Rear mid-engine",
			fuelType: "Gasoline",
			engine: "5.0L V8 Twin-turbo",
			aspiration: "Turbo-charged",
			transmission: "7-speed DCT",
			mpgCombined: 13,
			weight: 3075, //lb
			bodyStyle: "2-door coupe",
		},
		year: 2018,
		class: "Gasoline",
		cost: 2500000,
	},
	{
		id: 39,
		brand: "Koenigsegg",
		model: "Gemera",
		built: "Angelholm, Sweden",
		technical: {
			horsepower: 1700, //hp
			torque: 2580, //lb-ft
			zeroToSixty: 1.9,
			topSpeed: 249, //mph
			driveType: "AWD",
			engineLayout: "Rear mid-engine",
			fuelType: "PHEV",
			engine: "2.0L TFG Twin-turbo-charged I3 + Electric motors",
			aspiration: "Turbo-charged",
			transmission: "Single-speed Direct Drive",
			mpgCombined: 31.4,
			weight: 4079, //lb
			bodyStyle: "2-door coupe",
		},
		year: 2022,
		class: "Hybrid",
		cost: 1700000,
	},
	{
		id: 40,
		brand: "Koenigsegg",
		model: "Regera",
		built: "Angelholm, Sweden",
		technical: {
			horsepower: 1500, //hp
			torque: 1479, //lb-ft
			zeroToSixty: 2.7,
			topSpeed: 251, //mph
			driveType: "RWD",
			engineLayout: "Longitudinal mid-engine",
			fuelType: "PHEV",
			engine: "5.0L V8 Twin-turbo + Electric motors",
			aspiration: "Turbo-charged",
			transmission: "Single-speed Direct Drive",
			mpgCombined: 11,
			weight: 3589, //lb
			bodyStyle: "2-door targa top",
		},
		year: 2019,
		class: "Hybrid",
		cost: 1900000,
	},
	{
		id: 41,
		brand: "Koenigsegg",
		model: "Jesko Absolut",
		built: "Angelholm, Sweden",
		technical: {
			horsepower: 1600, //hp
			torque: 1106, //lb-ft
			zeroToSixty: 2.5,
			topSpeed: 330, //mph
			driveType: "RWD",
			engineLayout: "Longitudinal mid-engine",
			fuelType: "PHEV",
			engine: "5.0L V8 Twin-turbo + Electric motors",
			aspiration: "Turbo-charged",
			transmission: "9-speed LST",
			mpgCombined: "",
			weight: 3064, //lb
			bodyStyle: "2-door coupe",
		},
		year: 2022,
		class: "Hybrid",
		cost: 3419000,
	},
	{
		id: 42,
		brand: "Lamborghini",
		model: "Countach LP 5000 QV",
		built: "Sant'Agata Bolognese, Italy",
		technical: {
			horsepower: 455, //hp
			torque: 340, //lb-ft
			zeroToSixty: 4.7,
			topSpeed: 183, //mph
			driveType: "RWD",
			engineLayout: "Rear mid-engine",
			fuelType: "Gasoline",
			engine: "V12",
			aspiration: "Natural",
			transmission: "5-speed Manual",
			mpgCombined: 11,
			weight: 3280, //lb
			bodyStyle: "2-door coupe",
		},
		year: 1988,
		class: "Gasoline",
		cost: 118000,
	},
	{
		id: 43,
		brand: "Lamborghini",
		model: "Veneno",
		built: "Sant'Agata Bolognese, Italy",
		technical: {
			horsepower: 740, //hp
			torque: 509, //lb-ft
			zeroToSixty: 2.9,
			topSpeed: 221, //mph
			driveType: "AWD",
			engineLayout: "Mid-engine",
			fuelType: "Gasoline",
			engine: "6.5L V12",
			aspiration: "Natural",
			transmission: "7-speed ISR",
			mpgCombined: 13,
			weight: 3285, //lb
			bodyStyle: "2-door coupe",
		},
		year: 2013,
		class: "Gasoline",
		cost: 4000000,
	},
	{
		id: 44,
		brand: "Lamborghini",
		model: "Sian",
		built: "Sant'Agata Bolognese, Italy",
		technical: {
			horsepower: 808, //hp
			torque: 561, //lb-ft
			zeroToSixty: 2.8,
			topSpeed: 217, //mph
			driveType: "AWD",
			engineLayout: "Mid-engine",
			fuelType: "Gasoline + Supercapacitor",
			engine: "6.5L V12 + Electric motor",
			aspiration: "Natural",
			transmission: "7-speed ISR",
			mpgCombined: 12,
			weight: 3400, //lb
			bodyStyle: "2-door coupe",
		},
		year: 2021,
		class: "Hybrid",
		cost: 3000000,
	},
	{
		id: 45,
		brand: "Lamborghini",
		model: "Centenario",
		built: "Sant'Agata Bolognese, Italy",
		technical: {
			horsepower: 759, //hp
			torque: 509, //lb-ft
			zeroToSixty: 2.7,
			topSpeed: 217, //mph
			driveType: "AWD",
			engineLayout: "Mid-engine",
			fuelType: "Gasoline",
			engine: "6.5L V12",
			aspiration: "Natural",
			transmission: "7-speed ISR",
			mpgCombined: 15,
			weight: 3800, //lb
			bodyStyle: "2-door coupe",
		},
		year: 2016,
		class: "Gasoline",
		cost: 2000000,
	},
	{
		id: 46,
		brand: "Lancia",
		model: "Stratos",
		built: "Turin, Italy",
		technical: {
			horsepower: 190, //hp
			torque: 166, //lb-ft
			zeroToSixty: 6.7,
			topSpeed: 144, //mph
			driveType: "RWD",
			engineLayout: "Transverse mid-engine",
			fuelType: "Gasoline",
			engine: "Dino V6",
			aspiration: "Natural",
			transmission: "5-speed Manual",
			mpgCombined: 23,
			weight: 2100, //lb
			bodyStyle: "2-door coupe",
		},
		year: 1978,
		class: "Gasoline",
		cost: 17000,
	},
	{
		id: 47,
		brand: "Lancia",
		model: "Delta Integrale Evo II",
		built: "Chivasso, Turin, Italy",
		technical: {
			horsepower: 212, //hp
			torque: 224, //lb-ft
			zeroToSixty: 5.7,
			topSpeed: 137, //mph
			driveType: "4WD",
			engineLayout: "Transverse front-engine",
			fuelType: "Gasoline",
			engine: "2.0L Fiat I4",
			aspiration: "Turbo-charged",
			transmission: "5-speed manual",
			mpgCombined: 18,
			weight: 2954, //lb
			bodyStyle: "5-door hatchback",
		},
		year: 1993,
		class: "Gasoline",
		cost: 43000,
	},
];

export default cars;
