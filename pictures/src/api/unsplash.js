import axios from 'axios';

// 建立 axios 實體
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID '
  }
});