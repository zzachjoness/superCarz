import Acura from "../Images/brands/acura.png";
import Am from "../Images/brands/AM.png";
import Audi from "../Images/brands/Audi.png";
import Bentley from "../Images/brands/bentley.png";
import Bmw from "../Images/brands/bmw.png";
import Bugatti from "../Images/brands/bugatti.png";
import Ferrari from "../Images/brands/ferrari.png";
import Ford from "../Images/brands/ford.png";
import Honda from "../Images/brands/honda.png";
import Jaguar from "../Images/brands/jaguar.png";
import Koenigsegg from "../Images/brands/koenigsegg.png";
import Lamborghini from "../Images/brands/lamborghini.png";
import Lancia from "../Images/brands/lancia.png";
import Lexus from "../Images/brands/lexus.png";
import Lotus from "../Images/brands/lotus.png";
import Maserati from "../Images/brands/maserati.png";
import Mb from "../Images/brands/mb.png";
import Mclaren from "../Images/brands/mclaren.png";
import Nissan from "../Images/brands/nissan.png";
import Pagani from "../Images/brands/pagani.png";
import Porsche from "../Images/brands/porsche.png";
import Renault from "../Images/brands/renault.png";
import Rr from "../Images/brands/RR.png";
import Tesla from "../Images/brands/tesla.png";
import Toyota from "../Images/brands/toyota.png";
import brandsAbout from "./brandsAbout";

const brandsWithPhotos = [
	{
		id: 0,
		about: brandsAbout[0],
		name: "Acura",
		image: Acura,
		founded: "1886",
		headquarters: "Torrance, California, USA",
		parent: "Honda",
		type: "Division",
		website: "https://acura.com",
	},
	{
		id: 1,
		about: brandsAbout[1],
		name: "Aston Martin",
		image: Am,
		founded: "1913",
		headquarters: "Gaydon, Warwickshire, England, UK",
		parent: "",
		type: "Public limited Company",
		website: "https://astonmartin.com/en-us",
	},
	{
		id: 2,
		about: brandsAbout[2],
		name: "Audi",
		image: Audi,
		founded: "1909",
		headquarters: "Ingolstadt, Germany",
		parent: "Volkswagen AG",
		type: "Subsidiary",
		website: "https://audi.com",
	},
	{
		id: 3,
		about: brandsAbout[3],
		name: "Bentley",
		image: Bentley,
		founded: "1919",
		headquarters: "Crewe, England, UK",
		parent: "Volkswagen AG",
		type: "Subsidiary",
		website: "https://bentleymotors.com",
	},
	{
		id: 4,
		about: brandsAbout[4],
		name: "BMW",
		image: Bmw,
		founded: "1916",
		headquarters: "Munich, Germany",
		parent: "",
		type: "Public Company",
		website: "https://www.bmwusa.com",
	},
	{
		id: 5,
		about: brandsAbout[5],
		name: "Bugatti",
		image: Bugatti,
		founded: "1909",
		headquarters: "Molsheim, Alsace, France",
		parent: "Volkswagen AG",
		type: "Subsidiary",
		website: "https://bugatti.com",
	},
	{
		id: 6,
		about: brandsAbout[6],
		name: "Ferrari",
		image: Ferrari,
		founded: "1939",
		headquarters: "Maranello, Emilia-Romagna, Italy",
		parent: "",
		type: "Public Company",
		website: "https://ferrari.com/en-US",
	},
	{
		id: 7,
		about: brandsAbout[7],
		name: "Ford",
		image: Ford,
		founded: "1903",
		headquarters: "Dearborn, Michigan, USA",
		parent: "",
		type: "Public Company",
		website: "https://www.ford.com",
	},
	{
		id: 8,
		about: brandsAbout[8],
		name: "Honda",
		image: Honda,
		founded: "1946",
		headquarters: "Minato, Toykyo, Japan",
		parent: "",
		type: "Public Company",
		website: "https://automobiles.honda.com",
	},
	{
		id: 9,
		about: brandsAbout[9],
		name: "Jaguar",
		image: Jaguar,
		founded: "1933",
		headquarters: "Whitley, England, UK",
		parent: "Jaguar Land Rover",
		type: "Subsidiary",
		website: "https://jaguarusa.com",
	},
	{
		id: 10,
		about: brandsAbout[10],
		name: "Koenigsegg",
		image: Koenigsegg,
		founded: "1994",
		headquarters: "Angelholm, Scania, Sweden",
		parent: "",
		type: "Private Ownsership",
		website: "https://www.koenigsegg.com/",
	},
	{
		id: 11,
		name: "Lamborghini",
		image: Lamborghini,
		founded: "1963",
		headquarters: "Sant' Agata Bolognese, Emilia-Romagna, Italy",
		parent: "Volkswagen AG",
		type: "Subsidiary",
		website: "https://www.lamborghini.com/en-en",
	},
	{
		id: 12,
		name: "Lancia",
		image: Lancia,
		founded: "1906",
		headquarters: "Turin, Italy",
		parent: "Stellantis (Fiat Chrysler)",
		type: "Subsidiary",
		website: "https://www.lancia.com/",
	},
	{
		id: 13,
		name: "Lexus",
		image: Lexus,
		founded: "1989",
		headquarters: "Nagoya, Japan",
		parent: "Toyota",
		type: "Division",
		website: "https://www.lexus.com/",
	},
	{
		id: 14,
		name: "Lotus",
		image: Lotus,
		founded: "1948",
		headquarters: "Norfolk, England, UK",
		parent: "",
		type: "Private Ownership",
		website: "https://www.lotuscars.com",
	},
	{
		id: 15,
		name: "Maserati",
		image: Maserati,
		founded: "1914",
		headquarters: "Bologna, Italy",
		parent: "Stellantis (Fiat Chrysler)",
		type: "Subsidiary",
		website: "https://www.maserati.com",
	},
	{
		id: 16,
		name: "McLaren",
		image: Mclaren,
		founded: "1985",
		headquarters: "Woking, England, UK",
		parent: "",
		type: "Private Ownership",
		website: "https://cars.mclaren.com",
	},
	{
		id: 17,
		name: "Mercedes-Benz",
		image: Mb,
		founded: "1926",
		headquarters: "Stuttgart, Germany",
		parent: "",
		type: "Public Company",
		website: "https://www.mercedes-benz.com",
	},
	{
		id: 18,
		name: "Nissan",
		image: Nissan,
		founded: "1933",
		headquarters: "Nishi-ku, Yokohama, Japan",
		parent: "",
		type: "Public Company",
		website: "https://nissanusa.com",
	},
	{
		id: 19,
		name: "Pagani",
		image: Pagani,
		founded: "1992",
		headquarters: "San Cesario sul Panaro, MO, Italy",
		parent: "",
		type: "Private Company",
		website: "https://pagani.com",
	},
	{
		id: 20,
		name: "Porsche",
		image: Porsche,
		founded: "1931",
		headquarters: "Stuttgart, Germany",
		parent: "Volkswagen AG",
		type: "Subsidiary",
		website: "https://porsche.com/usa/",
	},
	{
		id: 21,
		name: "Renault",
		image: Renault,
		founded: "1899",
		headquarters: "Boulogne-Billancourt, France",
		parent: "Renault-Nissan-Mitsubishi Alliance",
		type: "Public Company",
		website: "https://www.renault.co.uk/",
	},
	{
		id: 22,
		name: "Rolls-Royce",
		image: Rr,
		founded: "1906",
		headquarters: "Goodwood, West Sussex, England, UK",
		parent: "BMW",
		type: "Subsidiary",
		website: "https://www.rolls-roycemotorcars.com",
	},
	{
		id: 23,
		name: "Tesla",
		image: Tesla,
		founded: "2003",
		headquarters: "Palo Alto, California, ",
		parent: "",
		type: "Public Company",
		website: "https://www.tesla.com/",
	},
	{
		id: 24,
		name: "Toyota",
		image: Toyota,
		founded: "1937",
		headquarters: "Toyota City, Aichi, Japan",
		parent: "",
		type: "Public Company",
		website: "https://www.toyota.com/",
	},
];

export default brandsWithPhotos;
