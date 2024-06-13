import { DataProvider, DeleteManyParams, DeleteManyResult, GetManyParams, GetManyReferenceParams, GetManyReferenceResult, GetManyResult, Identifier, RaRecord, UpdateManyParams, UpdateManyResult } from "react-admin";
import { adminProvider } from "./admin-provider";
import { carProvider } from "./car-provider";
import { CustomDataProvider } from "./type";
import { appointmentProvider } from "./appointment-provider";


const getProvider = (resource: string): CustomDataProvider => {
    switch(resource){
        case "admins":
            return adminProvider;
        case "cars":
            return carProvider;    
        case "appointments":
            return appointmentProvider;
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
    getMany: function <RecordType extends RaRecord<Identifier> = any>(resource: string, params: GetManyParams): Promise<GetManyResult<RecordType>> {
        throw new Error("Function not implemented.");
    },
    getManyReference: function <RecordType extends RaRecord<Identifier> = any>(resource: string, params: GetManyReferenceParams): Promise<GetManyReferenceResult<RecordType>> {
        throw new Error("Function not implemented.");
    },
    updateMany: function <RecordType extends RaRecord<Identifier> = any>(resource: string, params: UpdateManyParams<any>): Promise<UpdateManyResult<RecordType>> {
        throw new Error("Function not implemented.");
    },
    deleteMany: function <RecordType extends RaRecord<Identifier> = any>(resource: string, params: DeleteManyParams<RecordType>): Promise<DeleteManyResult<RecordType>> {
        throw new Error("Function not implemented.");
    }
    /*
    getManyReference: async (resource, params) => {
        // Assuming getProvider has a method to retrieve records based on a reference ID
        const {id, meta} = params;
        const response = await getProvider(resource).getManyReference(id.toString(), meta);
        return {
            data: response
        };
    },
    deleteMany: async (resource, params) => {
        // Assuming getProvider has a method to delete many records based on certain criteria
        const {ids, meta} = params; // Assuming filter is used to specify which records to delete
        const response = await getProvider(resource).deleteMany(ids, meta);
        return {
            data: response
        };
    },
    getMany: async (resource, params) => {
        // Assuming getProvider has a method to retrieve many records based on certain criteria
        const {ids, meta} = params;
        const response = await getProvider(resource).getMany(ids, meta);
        return {
            data: response,
            total: response.length
        };
    },
    updateMany: async (resource, params) => {
        // Assuming getProvider has a method to update many records based on certain criteria
        const {ids, data: payload, meta} = params; // Assuming filter is used to specify which records to update
        const response = await getProvider(resource).updateMany(ids, payload, meta);
        return {
            data: response
        };
    }
    */
}

export default dataProvider;