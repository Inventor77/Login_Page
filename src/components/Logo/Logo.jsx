import React from "react";
import "./Logo.scss";
import DocSumoLogo from "../../assets/images/docsumo-logo.png";

function Logo() {
	return (
		<div className="logo_container">
			<img src={DocSumoLogo} alt='DocSumo Logo' />
		</div>
	);
}

export default Logo;
