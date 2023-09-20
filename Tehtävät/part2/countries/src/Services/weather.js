import axios from 'axios';

const baseUrl = 'https://api.openweathermap.org/data/3.0/onecall?';
const access_key = import.meta.env.VITE_W_API;
const getWeather = (lat, lon) => {
  const request = axios.get(`${baseUrl}lat=${lat}&lon=${lon}&appid=${access_key}`);
  return request.then(response => response.data);
}

export default { getWeather };