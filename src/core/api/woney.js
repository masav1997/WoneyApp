import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://admin.woney.com'
});

export const request = (form) =>
  axiosInstance.post('/api/request', form, { headers: {
    'Content-Type': 'multipart/form-data;'
  }});
