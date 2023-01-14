import React, { useState } from "react";
import "./LoginFormContainer.scss";
import {
	FormControl,
	InputLabel,
	InputAdornment,
	IconButton,
	OutlinedInput,
	TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function LoginFormContainer() {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	return (
		<div className='login_form-container'>
			<div style={{marginBottom: "28px"}}>
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
            type="email"
            id='textarea' placeholder='janedoe@abc.com' size='small' />
				</FormControl>
			</div>
			<div>
				<InputLabel
					htmlFor='password'
					sx={{
						marginBottom: "12px",
						fontSize: "14px",
						color: "rgba(24,24,24,.8)",
					}}>
					Password
				</InputLabel>
				<FormControl sx={{ width: "100%" }} variant='outlined' size='small'>
					<OutlinedInput
						id='password'
						type={showPassword ? "text" : "password"}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton onClick={handleClickShowPassword} edge='end'>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
					/>
				</FormControl>
			</div>
		</div>
	);
}

export default LoginFormContainer;
