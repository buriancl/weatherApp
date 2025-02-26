import React, { useState } from 'react';
import { Paper, InputBase, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const WeatherSearch = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: { xs: '90%', sm: 400 },
          boxShadow: 3,
          borderRadius: 2
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter city name (e.g., London, New York)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          inputProps={{ 'aria-label': 'search weather by city' }}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default WeatherSearch;