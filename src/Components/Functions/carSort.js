const carSort = (cars, sortBy, direction) => {
	cars.sort(() => (a, b) => {
		console.log("hi");
		const uA = a.toUpperCase();
		const uB = b.toUpperCase();
		if (direction === "ascend") {
			if (uA < uB) {
				return -1;
			}
			if (uA > uB) {
				return 1;
			}
			return 0;
		}
		if (direction === "descend") {
			if (uA > uB) {
				return -1;
			}
			if (uA < uB) {
				return 1;
			}
			return 0;
		}
	});
};

export default carSort;
