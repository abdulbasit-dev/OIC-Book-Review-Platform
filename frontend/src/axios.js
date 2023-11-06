import axios from 'axios';

// base url to make request to the movie database
const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1',
  //  add your api key here
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-Authorization': `24PFN3WJ3XVIRFLV99OMQ7NC0XH9UTMB3MGQ5I62M66YRN5DZCFPLXZX3I5U96SC`,
  },
});

export default instance;

// for example
// instance.get('/foo-bar')
// it equal to
// 'https://api.themoviedb.org/3/foo-bar'
