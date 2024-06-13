import { DataProvider } from "react-admin";
import { adminProvider } from "./admin-provider";
import { carProvider } from "./car-provider";
import { CustomDataProvider } from "./type";


const getProvider = (resource: string): CustomDataProvider => {
    switch(resource){
        case "admins":
            return adminProvider;
        case "cars":
            return carProvider;    
        default:
            throw new Error("Unknown resource type");    
    }  

}

const dataProvider: DataProvider = {
    getList: async (resource, params) => {
        const {pagination, sort, filter, meta } = params;
        const response = await getProvider(resource).getList(pagination.page, pagination.perPage, filter, sort, meta);
        return {
            data: response,
            total: response.length
        }
    },
    getOne: async (resource, params) => {
        const {id, meta}= params;
        const response = await getProvider(resource).getOne(id as string, meta);
        return {
            data: response
        }
    },
    create: async (resource, params) => {
        const {data: payload, meta}= params;
        const response = await getProvider(resource).save(payload, meta);
        return {
            data: response
        }
    },
    update: async (resource, params) => {
        const {data: payload, id}= params;
        const response = await getProvider(resource).update(id as string,payload);
        return {
            data: response
        }
    },
    delete: async (resource, params) => {
        const {id}= params;
        const response = await getProvider(resource).delete(id as string);
        return {
            data: response
        }
    },
    deleteMany: ()=>{
        throw new Error("Not implemented");
    },
    getMany: ()=>{
        throw new Error("Not implemented");
    },
    getManyReference: ()=>{
        throw new Error("Not implemented");
    },
    updateMany: ()=>{
        throw new Error("Not implemented");
    },
}

export default dataProvider;