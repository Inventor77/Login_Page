import React from "react";
import "./Login.scss";
import Logo from "../../components/Logo/Logo";
import LoginFormContainer from "../../components/LoginFormContainer/LoginFormContainer";


function Login() {
	return (
		<div className='login_page'>
			<div className='login_page-container'>
				<div className='logo-container'>
					<Logo />
				</div>
					<LoginFormContainer />
			</div>
		</div>
	);
}

export default Login;
