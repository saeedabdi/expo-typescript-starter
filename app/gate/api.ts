import axios, {Method} from 'axios';
import {isEmpty} from '../utils';

const client = axios.create({
  baseURL: 'http://localhost:3000/admin',
});

client.defaults.timeout = 20000;
client.interceptors.response.use(
  config => config,
  (error: any) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedError) {
      console.error(error);
    }
    if (error.response.status === 401) {
      //     logout
    }
    return Promise.reject(error);
  },
);

const call = async <T>(
  method: Method,
  url: string,
  data: any = {},
): Promise<T> => {
  const accessToken = '';
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (accessToken) {
    client.defaults.headers.common.Authorization = accessToken;
  }

  const request: any = {headers, method, url};

  if (!isEmpty(data)) {
    if (method === 'get') {
      request.params = data;
    } else {
      request.data = data;
    }
  }

  try {
    const response = await client(request);
    return Promise.resolve(response.data);
  } catch (error: any) {
    let err = null;
    if (error.response) {
      err = error.response;
    } else if (error.request) {
      err = {message: error.request._response};
    } else {
      err = error;
    }
    return Promise.reject(err);
  }
};

const file = async <T>(
  url: string,
  data: FormData,
  onUploadProgress?: ((progressEvent: any) => void) | undefined,
): Promise<T> => {
  const accessToken = '';
  try {
    const headers = {
      Accept: 'application/json',
      Authorization: accessToken,
      'Content-Type': 'multipart/form-data',
    };
    const response = await client({
      url,
      data,
      method: 'post',
      headers,
      onUploadProgress,
    });

    return Promise.resolve(response.data);
  } catch (error: any) {
    return Promise.reject(error.response);
  }
};
export default {
  delete: <T, D = any>(url: string, data?: D | null) =>
    call<T>('delete', url, data),
  get: <T, D = any>(url: string, data?: D | null) => call<T>('get', url, data),
  patch: <T, D = any>(url: string, data?: D | null) =>
    call<T>('patch', url, data),
  post: <T, D = any>(url: string, data?: D | null) =>
    call<T>('post', url, data),
  put: <T, D = any>(url: string, data?: D | null) => call<T>('put', url, data),
  file: <T>(
    url: string,
    data: FormData,
    onUploadProgress: ((progressEvent: any) => void) | undefined,
  ) => file<T>(url, data, onUploadProgress),
};
