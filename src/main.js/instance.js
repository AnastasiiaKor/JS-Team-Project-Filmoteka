import axios from 'axios';
const KEY = '6e156bccb057248f1bcc2a7ceca32487';
const instance = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
});

export { KEY, instance };
