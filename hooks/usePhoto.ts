import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPhotos = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
  return response.data;
}

export const usePhoto = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['photos'],
    queryFn: fetchPhotos
  });
  return { data, error, isLoading };
}
