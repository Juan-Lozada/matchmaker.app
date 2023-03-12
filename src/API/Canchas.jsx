import axios from 'axios';


const BASE_URL = "https://api.npoint.io/259dd18e1698198203b3"

export const Canchas = async () => {
    const { data } = axios.get(`${BASE_URL}`);
    console.log(data)
    return data;
}

