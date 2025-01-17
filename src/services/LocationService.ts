import api from '../services/api';
import axios from 'axios';
import { Location } from '../interfaces/location';

export const fetchLocations = async (): Promise<Location[]> => {
  try {
    const response = await api.get<Location[]>(`${process.env.REACT_APP_API_URL}/locations`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        Accept: 'application/json',
      },
    });

    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      throw new Error('Invalid data format received');
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new Error(error.response.data.error || 'Error fetching locations');
      } else if (error.request) {
        throw new Error('No response received from server');
      } else {
        throw new Error('Error setting up request');
      }
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};
