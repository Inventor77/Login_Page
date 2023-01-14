import './App.scss';
import LoginPage from './pages/LoginPage';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#4061FC",
		},
	},
});

function App() {
  return (
		<ThemeProvider theme={theme}>
			<div className='App'>
				<LoginPage />
			</div>
		</ThemeProvider>
	);
}

export default App;
