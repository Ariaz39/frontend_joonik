import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Location } from '../interfaces/location';

interface LocationCardProps {
  location: Location;
}

const LocationCard: React.FC<LocationCardProps> = ({ location }) => (
  <Card>
    <CardMedia
      component="img"
      height="140"
      image={location.image}
      alt={location.name}
    />
    <CardContent>
      <Typography variant="h6">{location.name}</Typography>
      <Typography variant="body2" color="text.secondary">
        Code: {location.code}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Created on: {location.creationDate}
      </Typography>
    </CardContent>
  </Card>
);

export default LocationCard;