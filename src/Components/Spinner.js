import React, { useState, useEffect } from "react";
import "../Style/brands.css";

const Spinner = () => {
	const [spinner, setSpinner] = useState(true);
	useEffect(() => {
		console.log("used effected");
		setTimeout(() => setSpinner(false), 3000);
	}, []);

	return (
		<div>
			{spinner ? (
				<div id="brand-spinner-container">
					<h2 id="brand-spinner">Revving Up</h2>
				</div>
			) : null}
		</div>
	);
};

export default Spinner;
