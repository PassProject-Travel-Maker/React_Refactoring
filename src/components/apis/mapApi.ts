import { gugun, searchData, sido } from 'types/map';
import {api} from './core'

export const getSidoApi = async():Promise<sido[]> =>{
    const response = await api.get('map/sido');
    return response.data;
}

export const getGugunApi = async(sidoCode : string): Promise<gugun[]> =>{
    const response = await api.get(`map/gugun/${sidoCode}`);
    return response.data;
}

export const getCategoryApi = async(sidoCode : string) =>{
    const response = await api.get(`map/gugun/${sidoCode}`);
    return response;
}

export const getAttractionApi = async(searchData : searchData) =>{
    const response = await api.post('map/attractioninfo',searchData);
    return response;
}