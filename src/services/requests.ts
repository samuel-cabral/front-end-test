import axios from './api';

export const _get = (url: string, data = {}, statusToValidate = [404]) => {
  const params = { ...data };
  return axios.request({
    method: 'get',
    url,
    timeout: 120000,
    params,
    validateStatus: status =>
      (status >= 200 && status < 300) ||
      statusToValidate.filter(s => s === status).length > 0,
  });
};

export const _put = (url: string, data: any) =>
  axios.request({
    method: 'put',
    url,
    timeout: 120000,
    data,
  });

export const _post = (url: string, data = {}, timeout = 120000) =>
  axios.request({
    method: 'post',
    url,
    timeout,
    data,
  });

export const _delete = (url: string, data: any) =>
  axios.request({
    method: 'delete',
    url,
    timeout: 120000,
    data,
  });
