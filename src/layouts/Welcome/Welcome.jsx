import React from "react";
import { useLocation } from "react-router-dom";
import './Welcome.scss'

function Welcome() {
	const location = useLocation();

	return (
		<div className="welcome_page-container">
			<pre>{JSON.stringify(location?.state, null, 2)}</pre>
		</div>
	);
}

export default Welcome;
