import {fetch} from '../../node_modules/api';
import QueryBuilder from '../../components/WHTable/queryBuilder';
import configApi from '../../constants/ApiConfig';

const endPoints = '/api/files';

export const viewFromUrl = (url) => fetch(`${configApi.assetUrl}${url}`, {}, 'get');

export const search = (data) => {
    let query = QueryBuilder(data);

    return fetch(`${configApi.url}${endPoints}`, 'get', query)
};

export const view = (id) => fetch(`${configApi.url}${endPoints}/${id}`, 'get');

export const create = (data) => fetch(`${configApi.url}${endPoints}`, 'post', data);

export const update = (id, data) => fetch(`${configApi.url}${endPoints}/${id}`, 'put', data);

export const remove = (id) => fetch(`${configApi.url}${endPoints}/${id}`, {}, 'delete');