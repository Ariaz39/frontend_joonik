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
      throw new Error('Formato de datos recibido no válido');
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new Error(error.response.data.error || 'Error al obtener ubicaciones');
      } else if (error.request) {
        throw new Error('No se recibió respuesta del servidor');
      } else {
        throw new Error('Error al configurar la solicitud');
      }
    } else {
      throw new Error('Se produjo un error desconocido');
    }
  }
};
