import axios from 'axios';

const baseURL = 'localhost:3000';

const findAll = () => {
  const resourceURL = `${baseURL}/penguin`;
  return axios.get(resourceURL);
};

export default findAll;
