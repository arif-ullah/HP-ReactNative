import axios from 'axios';

export const getData = axios.create({
  baseURL: 'http://hp-api.herokuapp.com/api/',
  method: 'get'
});
