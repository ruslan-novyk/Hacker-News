import { AxiosResponse } from 'axios';
import Item from '../interfaces/Item';
import User from '../interfaces/User';
import Сonnector from '../utils/Connector';

const methods = {
    getList: '/topstories.json',
    getStoryInfo: (id: number) => `/item/${id}.json`,
    getUserInfo: (id: string) => `user/${id}.json`,
};

const SomeRepository = {
    getIdsList(): Promise<AxiosResponse<number[]>> {
        return Сonnector.get(methods.getList);
    },

    getStoryInfo(id: number): Promise<AxiosResponse<Item>> {
        return Сonnector.get(methods.getStoryInfo(id));
    },

    getUserInfo(id: string): Promise<AxiosResponse<User>> {
        return Сonnector.get(methods.getUserInfo(id));
    },
};

export default SomeRepository;
