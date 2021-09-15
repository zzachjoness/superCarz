import React, { useState, useEffect } from "react";
import "../Style/brandsLanding.css";

const Spinner = () => {
	const [spinner, setSpinner] = useState(true);
	const seconds = 1.5;
	useEffect(() => {
		console.log("used effected");
		setTimeout(() => setSpinner(false), seconds * 1000);
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
