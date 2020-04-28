import axios from 'axios';

// TODO: Change baseURL
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  responseType: 'json',
});

api.fetchResource = async (resource, id) => {
  const requestId = id ? `/${id}` : '';
  const response = await api.get(`/${resource}${requestId}`);
  return response.data;
};

// TODO: REMOVE THIS IN PROD!
api.mockFetchResource = async (query) => {
  function sleeper(ms) {
    return function sleeping(x) {
      return new Promise((resolve) => setTimeout(() => resolve(x), ms));
    };
  }

  await sleeper(1000);
  if (query.resource === 'products') {
    return {
      data: [{
        name: 'first product',
        type: 1,
        price: 123,
      }, {
        name: 'second product',
        type: 0,
        price: 123,
      }], // your data array
      page: 0, // current page number
      totalCount: 2, // total row number
    };
  }

  if (query.resource === 'shipments') {
    return {
      data: [{
        customer: 'first c',
        route: [{
          id: 1,
          text: 'bla1',
        }, {
          id: 2,
          text: 'bla2',
        }, {
          id: 3,
          text: 'bla3',
        }],
      }, {
        customer: 'second c',
        route: [{
          id: 1,
          text: 'bla1',
        }, {
          id: 2,
          text: 'bla2',
        }, {
          id: 3,
          text: 'bla3',
        }],
      }], // your data array
      page: 0, // current page number
      totalCount: 2, // total row number
    };
  }

  return {
    data: [], // your data array
    page: 0, // current page number
    totalCount: 0, // total row number
  };
};

export default api;
