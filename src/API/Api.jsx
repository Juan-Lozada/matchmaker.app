import axios from 'axios';

const API_URL = 'https://match-maker-backend.vercel.app'; 

const Api = {
  registroUsuario: (data) => axios.post(`${API_URL}/registro`, data),
  iniciarSesion: (data) => axios.post(`${API_URL}/login`, data),
  editarUsuario: (id, data) => axios.put(`${API_URL}/usuario/${id}`, data),
  registroRecinto: (data) => axios.post(`${API_URL}/registro/recinto`, data),
  registroReserva: (data) => axios.post(`${API_URL}/reserva`, data),
  registroCancha: (data) => axios.post(`${API_URL}/registro/cancha`, data),
  getRecintosTenant: () => axios.get(`${API_URL}/recintos/tenant`),
  getRecintosUser: () => axios.get(`${API_URL}/recintos/usuario`),
  getCanchas: () => axios.get(`${API_URL}/canchas`),
  getUsuarios: () => axios.get(`${API_URL}/usuario/${id}`),
  editarRecinto: (id, data) => axios.put(`${API_URL}/recinto/${id}`, data),
  editarCancha: (id, data) => axios.put(`${API_URL}/cancha/${id}`, data),
};

export default Api;
