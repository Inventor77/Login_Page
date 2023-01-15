import './App.scss';
import LoginPage from './pages/LoginPage';
import WelcomePage from './pages/WelcomePage';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const theme = createTheme({
	palette: {
		primary: {
			main: "#4061FC",
		},
	},
});

function App() {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<div className='App'>
					<Routes>
						<Route path='/' element={<LoginPage />} />
						<Route path='/welcome' element={<WelcomePage />} />
					</Routes>
				</div>
			</ThemeProvider>
		</Router>
	);
}

export default App;
