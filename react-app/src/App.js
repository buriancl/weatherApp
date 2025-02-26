import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CloudIcon from "@mui/icons-material/Cloud";
import WeatherSearch from "./components/WeatherSearch";
import WeatherDisplay from "./components/WeatherDisplay";
import { getWeatherByCity } from "./services/weatherService";

// Create a theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);

    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("City not found. Please check the spelling and try again.");
      } else {
        setError("Failed to fetch weather data. Please try again later.");
      }
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <CloudIcon sx={{ mr: 2 }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Weather App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container>
        <Box sx={{ my: 4, textAlign: "center" }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Weather Forecast
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Enter a city name to get current weather information
          </Typography>

          <WeatherSearch onSearch={handleSearch} />
          <WeatherDisplay weather={weather} loading={loading} error={error} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
