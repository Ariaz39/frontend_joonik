import React, { useEffect, useState } from 'react';
import { Container, Box, Grid, Typography } from '@mui/material';
import LocationCard from '../components/LocationCard';
import { fetchLocations } from '../services/LocationService';
import { Location } from '../interfaces/location';

const LocationsPage: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadLocations = async () => {
      try {
        const data = await fetchLocations();
        setLocations(data);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    loadLocations();
  }, []);

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
      <Box>
        <Grid container spacing={2}>
          {locations.map((location) => (
            <Grid item xs={12} sm={6} md={4} key={location.code}>
              <LocationCard location={location} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default LocationsPage;
