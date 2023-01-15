import React, { useState } from "react";
import "./LoginFormContainer.scss";
import {
	FormControl,
	InputLabel,
	InputAdornment,
	IconButton,
	OutlinedInput,
	TextField,
	Typography,
	Button,
	CircularProgress,
} from "@mui/material";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useNavigate } from "react-router-dom";

function LoginFormContainer() {
	const [email, SetEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [response, setResponse] = useState(null);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleSubmit = async () => {
		setLoading(true);
		try {
			const res = await fetch(
				"https://apptesting.docsumo.com/api/v1/eevee/login/",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(
						{
							email: email,
							password: password,
						},
						null,
						2
					),
				}
			);
			const data = await res.json();
			setResponse(data);
			setLoading(false);
			if (!data?.error) navigate("/welcome", { state: data });
		} catch (err) {
			console.log("Error while logging in: ", err);
			setLoading(false);
		}
	};

	return (
		<div className='login_form-container'>
			<Typography
				variant='h1'
				gutterBottom
				sx={{
					color: "#181818",
					fontSize: "24px",
					fontWeight: "700",
					marginBottom: "7px",
				}}>
				Login to your Docsumo account
			</Typography>
			<div
				className={
					response?.error
						? "error_message-container error_message"
						: "error_message-container"
				}>
				{response?.error ? response?.error : ""}
			</div>
			<div style={{ marginBottom: "28px" }}>
				<InputLabel
					htmlFor='textarea'
					sx={{
						marginBottom: "12px",
						fontSize: "14px",
						color: "rgba(24,24,24,.8)",
					}}>
					Work Email
				</InputLabel>
				<FormControl sx={{ width: "100%" }} variant='outlined'>
					<TextField
						type='email'
						id='textarea'
						placeholder='janedoe@abc.com'
						size='small'
						value={email}
						onChange={(e) => SetEmail(e.target.value)}
					/>
				</FormControl>
			</div>
			<div>
				<InputLabel
					htmlFor='password'
					sx={{
						marginBottom: "6px",
						fontSize: "14px",
						color: "rgba(24,24,24,.8)",
					}}>
					Password
				</InputLabel>
				<FormControl sx={{ width: "100%" }} variant='outlined' size='small'>
					<OutlinedInput
						id='password'
						placeholder='Enter password here...'
						type={showPassword ? "text" : "password"}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton onClick={handleClickShowPassword} edge='end'>
									{showPassword ? (
										<VisibilityOutlinedIcon
											sx={{ fontSize: "21px", color: "#000" }}
										/>
									) : (
										<VisibilityOffOutlinedIcon
											sx={{ fontSize: "21px", color: "#000" }}
										/>
									)}
								</IconButton>
							</InputAdornment>
						}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</FormControl>
			</div>
			<div className='forgot_password-container'>
				<span className='forgot_password'>Forgot Password?</span>
			</div>

			<Button
				onClick={handleSubmit}
				variant='contained'
				sx={{
					marginTop: "32px",
					width: "100%",
					height: "48px",
					padding: "14px 15px",
					borderRadius: "4px",
					justifyContent: "center",
					font: "normal normal 16px/1.25 Lato,sans-serif",
					boxShadow: "0 2px 4px rgb(0 0 0 / 10%)",
					textTransform: "none",
					opacity: loading ? 0.8 : 1,
				}}>
				{loading ? (
					<span className='circular_progress-container'>
						<CircularProgress
							disableShrink
							sx={{
								color: "#fff",
								animationDuration: "1000ms",
								// position: 'absolute',
								left: 0,
							}}
							size={21}
							thickness={4}
						/>
						Logging in...
					</span>
				) : (
					<span>Login</span>
				)}
			</Button>

			<div className='signup_link-container'>
				Don't have an account? <span className='signup'>Sign Up</span>
			</div>
		</div>
	);
}

export default LoginFormContainer;
