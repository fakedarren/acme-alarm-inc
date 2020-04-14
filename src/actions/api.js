import axios from 'axios';

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

export default {
  create: (endpoint, data = {}, options = {}) =>
    axios({
      url: `${API_ENDPOINT}${endpoint}`,
      method: 'post',
      data: { ...data },
      ...options,
    }),
  delete: (endpoint, data = {}, options = {}) =>
    axios({
      url: `${API_ENDPOINT}${endpoint}`,
      method: 'delete',
      data: { ...data },
      ...options,
    }),
  get: (endpoint, data = {}, options = {}) =>
    axios({
      url: `${API_ENDPOINT}${endpoint}`,
      params: { ...data },
      ...options,
    }),
  update: (endpoint, data = {}, options = {}) =>
    axios({
      url: `${API_ENDPOINT}${endpoint}`,
      method: 'patch',
      data: { ...data },
      ...options,
    }),
};
