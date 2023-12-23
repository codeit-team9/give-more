import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api/01-09/the-julge',
});
