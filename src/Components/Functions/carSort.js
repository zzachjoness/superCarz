const carSort = (cars, sortDir, sortBy, reverse) => {
	let carSort = {};
	if (sortBy.length === 1) {
		if (
			(sortDir === "up" && reverse === false) ||
			(sortDir === "down" && reverse === true)
		) {
			carSort = cars.sort((a, b) => {
				if (a[sortBy] > b[sortBy]) {
					return 1;
				}
				if (a[sortBy] < b[sortBy]) {
					return -1;
				}
				return 0;
			});
		}
		if (
			(sortDir === "down" && reverse === false) ||
			(sortDir === "up" && reverse === true)
		) {
			carSort = cars.sort((a, b) => {
				if (a[sortBy] < b[sortBy]) {
					return 1;
				}
				if (a[sortBy] > b[sortBy]) {
					return -1;
				}
				return 0;
			});
		}
	}
	if (sortBy.length === 2) {
		if (
			(sortDir === "up" && reverse === false) ||
			(sortDir === "down" && reverse === true)
		) {
			carSort = cars.sort((a, b) => {
				if (a[sortBy[0]][sortBy[1]] > b[sortBy[0]][sortBy[1]]) {
					return 1;
				}
				if (a[sortBy[0]][sortBy[1]] < b[sortBy[0]][sortBy[1]]) {
					return -1;
				}
				return 0;
			});
		}
		if (
			(sortDir === "down" && reverse === false) ||
			(sortDir === "up" && reverse === true)
		) {
			carSort = cars.sort((a, b) => {
				if (a[sortBy[0]][sortBy[1]] < b[sortBy[0]][sortBy[1]]) {
					return 1;
				}
				if (a[sortBy[0]][sortBy[1]] > b[sortBy[0]][sortBy[1]]) {
					return -1;
				}
				return 0;
			});
		}
	}
	return carSort;
};
export default carSort;
