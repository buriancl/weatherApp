import React from 'react';
import { Box, Typography, CircularProgress, Alert } from '@mui/material';
import WeatherCard from './WeatherCard';

const WeatherDisplay = ({ weather, loading, error }) => {
  return (
    <Box sx={{ mt: 4, p: 2 }}>
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      )}
      
      {error && (
        <Alert severity="error" sx={{ maxWidth: 500, mx: 'auto', mb: 3 }}>
          {error}
        </Alert>
      )}
      
      {weather && !loading && !error && (
        <>
          <Typography variant="h6" align="center" gutterBottom>
            Current Weather
          </Typography>
          <WeatherCard data={weather} />
        </>
      )}
    </Box>
  );
};

export default WeatherDisplay;