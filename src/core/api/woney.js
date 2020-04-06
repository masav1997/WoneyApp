import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://woney.com'
});

export const request = ({ surname, email, eth_wallet, ticket }) =>
  axiosInstance.post('/api/request', { surname, email, eth_wallet, ticket});
