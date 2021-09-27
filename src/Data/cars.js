/*
{
		id: "",
		brand: "",
		model: "",
		built: "",
		technical: {
			horsepower: "", //hp
			torque: "", //lb-ft
			zeroToSixty: "",
			topSpeed: "", //mph
			driveType: "",
			engineLayout: "",
			fuelType: "",
			engine: "",
			aspiration: "",
			transmission: "",
			mpgCombined: "",
			weight: "", //lb
			bodyStyle: "",
		},
		year: "",
		class: "",
		cost: "",
	},
*/

const cars = [
	{
		id: "0",
		brand: "Acura",
		model: "NSX Type S",
		built: "Ohio, USA",
		technical: {
			horsepower: "600",
			torque: "492",
			zeroToSixty: "2.5",
			topSpeed: "191",
			driveType: "AWD",
			layout: "Longitudinally mid-mounted",
			fuelType: "Gasoline + Electric Hybird",
			engine: "Twin-turbocharged DOHC V6 + Electric Motor Units",
			aspiration: "Turbo",
			transmission: "9-Speed DCT",
			mpgCombined: "TBD",
			weight: "3946",
			bodyStyle: "Coupe",
		},
		year: "2022",
		class: "Hybrid",
		cost: "$172,000",
	},
	{
		id: "1",
		brand: "Acura",
		model: "NSX Type R",
		built: "Tochigi, Japan",
		technical: {
			horsepower: "290", //hp
			torque: "207", //lb-ft
			zeroToSixty: "4.9",
			topSpeed: "168", //mph
			driveType: "RWD",
			engineLayout: "Longitudinaally mid-mounted",
			fuelType: "Gasoline",
			engine: "C30A V6",
			aspiration: "natural",
			transmission: "6-Speed Manual",
			mpgCombined: "17",
			weight: "2712", //lb
			bodyStyle: "Coupe",
		},
		year: "1992",
		class: "Gasoline",
		cost: "$80,000",
	},
	{
		id: "2",
		brand: "Acura",
		model: "Integra Type-R",
		built: "",
		technical: {
			horsepower: "195", //hp
			torque: "130", //lb-ft
			zeroToSixty: "",
			topSpeed: "", //mph
			driveType: "FWD",
			engineLayout: "Front Transverse",
			fuelType: "Gasoline",
			engine: "B18C Inline-4",
			aspiration: "Natural",
			transmission: "5-Speed Manual",
			mpgCombined: "",
			weight: "", //lb
			bodyStyle: "coupe",
		},
		year: "2000",
		class: "Gasoline",
		cost: "$25,000",
	},
];

export default cars;
