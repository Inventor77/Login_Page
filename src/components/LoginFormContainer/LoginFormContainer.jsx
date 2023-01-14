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
} from "@mui/material";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

function LoginFormContainer() {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	return (
		<div className='login_form-container'>
			<Typography
				variant='h1'
				gutterBottom
				sx={{
					color: "#181818",
					fontSize: "24px",
					fontWeight: "700",
					marginBottom: "42px",
				}}>
				Login to your Docsumo account
			</Typography>
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
								<IconButton
									size='small'
									onClick={handleClickShowPassword}
									edge='end'>
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
					/>
				</FormControl>
			</div>
			<div></div>
		</div>
	);
}

export default LoginFormContainer;
