import axios from 'axios';

const KEY = '';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3', // URL 是大寫!!
  params: {
    part: 'snippet',
    maxResults: 8,
    key: KEY
  }
});

