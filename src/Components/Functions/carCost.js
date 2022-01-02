const carCost = (car) => {
	const string = car.cost.toString();
	const n = string.length;
	let cost = "";
	for (let i = 0; i < n; i++) {
		let add = "";
		if (i === 3 || i === 6) {
			add = ",";
		}
		cost = string[n - 1 - i] + add + cost;
	}
	return cost;
};

export default carCost;
