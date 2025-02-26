import React from 'react';
import { Card, CardContent, Typography, Box, Chip, Grid } from '@mui/material';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import AirIcon from '@mui/icons-material/Air';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CompressIcon from '@mui/icons-material/Compress';

const WeatherCard = ({ data }) => {
  if (!data) return null;

  const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  
  return (
    <Card sx={{ 
      maxWidth: 500, 
      mx: 'auto', 
      borderRadius: 2, 
      boxShadow: 3,
      background: 'linear-gradient(to right bottom, #87CEEB, #4682B4)',
      color: 'white'
    }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4" component="div" gutterBottom>
            {data.name}, {data.sys.country}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src={weatherIcon} 
              alt={data.weather[0].description} 
              style={{ width: 70, height: 70 }}
            />
          </Box>
        </Box>
        
        <Typography variant="h2" component="div" sx={{ fontWeight: 'bold', my: 2 }}>
          {Math.round(data.main.temp)}°C
        </Typography>
        
        <Chip 
          label={data.weather[0].description.toUpperCase()} 
          sx={{ bgcolor: 'rgba(255,255,255,0.3)', color: 'white', mb: 2 }}
        />
        
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={6} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ThermostatIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                Feels like: {Math.round(data.main.feels_like)}°C
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={6} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <OpacityIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                Humidity: {data.main.humidity}%
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={6} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AirIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                Wind: {data.wind.speed} m/s
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={6} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CompressIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                Pressure: {data.main.pressure} hPa
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;