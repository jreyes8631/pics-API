import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID zIN-FurWn1HMVuVrNA08M5IPNbNcLT6S3fuSXZPxgvM'
      }
});