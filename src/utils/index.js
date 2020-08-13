import axios from 'axios';

export function validateEmail(email) {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

export function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export function cssValidOrInvalid(obj, name) {
  if (isEmpty(obj)) {
    return '';
  }
  //return obj[name] ? " is-invalid" : " is-valid";
  return obj[name] ? ' is-invalid' : '';
}

export function api() {
  const api = axios.create({
    baseURL: 'https://webapitodo.herokuapp.com/api/',
  });
  api.interceptors.request.use(
    function (config) {
      const token = window.localStorage.getItem('@token');
      if (token.length > 0) {
        config.headers.common['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  api.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      window.localStorage.setItem('@token', '');
      window.location.href = '/';
    }
  );
  return api;
}

export const requestTodo = {
  getAll: () => {
    return api().get('todos');
  },
  get: (id) => {
    return api().get(`todos/${id}`);
  },
  post: (data) => {
    return api().post('todos', data);
  },
  put: (id, data) => {
    return api().post(`todos/${id}`, data);
  },
  delete: (id) => {
    return api().delete(`todos/${id}`);
  },
};

export const requestLogin = {
  post: (data) => {
    return api().post('login/auth', data);
  },
};
