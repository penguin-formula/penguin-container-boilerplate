import axios from 'axios';

const baseURL = 'http://localhost:3000';

export function findAll() {
  const resourceURL = `${baseURL}/penguin`;
  return axios.get(resourceURL);
}

export function create(entity) {
  let resourceURL = `${baseURL}/penguin`;
  return axios.post(resourceURL, entity);
}

export function deletePenguin(id) {
  let resourceURL = `${baseURL}/penguin/${id}`;
  return axios.delete(resourceURL);
}

export default { findAll, deletePenguin };
