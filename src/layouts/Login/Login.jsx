import React from "react";
import Logo from "../../components/Logo/Logo";
import "./Login.scss";

function Login() {
	return (
		<div className='login_page'>
			<div className='login_page-container'>
				<div className='logo-container'>
					<Logo />
				</div>
			</div>
		</div>
	);
}

export default Login;
