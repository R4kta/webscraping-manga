import axios from 'axios'
import env from '../config/env'

export const connection = axios.create({
  baseURL: env.manga_livre_url,
  headers: {
  'x-requested-with': 'XMLHttpRequest',
  'sec-fetch-mode': 'cors',
  'sec-fetch-site': 'same-origin', 
  'cookie': '_ga=GA1.2.1541966350.1596150608; _gid=GA1.2.138013010.1596934905; __cfduid=d3c0b6c9d6d96e60f7eb5f761363e29d31597361087; _gat_gtag_UA_17858403_7=1', 
  'accept': 'application/json, text/javascript, */*; q=0.01', 
  'authority': 'mangalivre.net', 
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36 Edg/84.0.522.59'
  }
})
