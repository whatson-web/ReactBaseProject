import {fetch} from '../../node_modules/api';
import QueryBuilder from '../../components/WHTable/queryBuilder';
import configApi from "../../constants/ApiConfig";

const endPoints = '/api/users';

export const search = (data) => {
    let query = QueryBuilder(data);

    return fetch(`${configApi.url}${endPoints}`, 'get', query)
};

export const view = (id) => fetch(`${configApi.url}${endPoints}/${id}`, 'get');

export const create = (data) => fetch(`${configApi.url}${endPoints}`, 'post', data);

export const update = (data) => fetch(`${configApi.url}${endPoints}/${data.id}`, 'put', data);

export const remove = (id) => fetch(`${configApi.url}${endPoints}/${id}`, 'delete');

export const sendNewPassword = (id) => fetch(`${configApi.url}${endPoints}/${id}/send-new-password`, 'get');

export const myInformations = (id, data) => fetch(`${configApi.url}${endPoints}/${id}/my-informations`, 'post', data);

export const myPassword = (id, data) => fetch(`${configApi.url}${endPoints}/${id}/my-password`, 'post', data);