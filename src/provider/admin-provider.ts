import { adminApi } from "./api";
import { CustomDataProvider } from "./type";
import { AdminDtoRequest, Pageable } from "./typescript-client";

export const adminProvider : CustomDataProvider = {
    getList: async function (page?: number | undefined, perPage?: number | undefined, sort?:any, filter?: any, meta?: any): Promise<any> {
        const pageable: Pageable = {};
        return await adminApi().getAllAdmin(pageable).then(response => response.data.content);
    },
    getOne: async function (id: string, meta?: any): Promise<any> {
        return await adminApi().getAdminById(parseInt(id)).then(response => response.data);
    },
    save: async function (resources: AdminDtoRequest, meta?: any): Promise<any> {
        return await adminApi().createAdmin(resources).then(response => response.data);
    },
    update: async function (id: string, resources: AdminDtoRequest, meta?: any): Promise<any> {
        return await adminApi().updateAdmin(parseInt(id),resources).then(response => response.data);
    },
    delete: async function (id: string): Promise<any> {
        return await adminApi().deleteAdmin(parseInt(id)).then(response => response.data)
    }
}