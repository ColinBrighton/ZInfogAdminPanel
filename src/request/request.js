import axios from "axios";

const baseURLs = {
  development: 'https://accesslabbeta.stagingserverhub.com/api/b2b/', // API server url (Development)
};

const environment = 'development'

export const baseRequest = axios.create({
  baseURL: baseURLs[environment],
  headers: { 'Content-Type': 'application/x-www-form-urlencoded', },
});





