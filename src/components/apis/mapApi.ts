import { searchData } from 'components/types/map';
import {api} from './core'

export const getSidoApi = async() =>{
    const response = await api.get('map/sido');
    return response;
}

export const getGugunApi = async(sidoCode : string) =>{
    const response = await api.get(`map/gugun/${sidoCode}`);
    return response;
}

export const getCategoryApi = async(sidoCode : string) =>{
    const response = await api.get(`map/gugun/${sidoCode}`);
    return response;
}

export const getAttractionApi = async(searchData : searchData) =>{
    const response = await api.post('map/attractioninfo',searchData);
    return response;
}