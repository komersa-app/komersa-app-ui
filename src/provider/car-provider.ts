import { CustomDataProvider } from "./type";
import { carApi } from "./api";
import { CarDtoRequest, Pageable } from "./typescript-client";

export const carProvider : CustomDataProvider = {
    getList: async function (page?: number, perPage?: number, sort?: any, filter?: any, meta?: any) {
        const pageable: Pageable = {};
        const cars = await carApi().getAllCar(pageable);
        return cars.data.content;
    },
    getOne: async function (id: string) {
        const car = await carApi().getCarById(parseInt(id));
        return car.data;
    },
    save: async function (resources: CarDtoRequest, meta?: any) {
        const car = await carApi().createCar(resources);
        return car.data;
    },
    update: async function (id: string, resources: CarDtoRequest, meta?: any) {
        const car = await carApi().updateCar(parseInt(id), resources);
        return car.data;
    },
    delete: async function (id: string) {
        const car = await carApi().deleteCar(parseInt(id));
        return car.data;
    },
    getManyReference: function (id: string, meta?: any): Promise<any> {
        throw new Error("Function not implemented.");
    },
    deleteMany: function (filter?: any, meta?: any): Promise<any> {
        throw new Error("Function not implemented.");
    },
    getMany: function (filter?: any, sort?: any, page?: number | undefined, perPage?: number | undefined, meta?: any): Promise<any> {
        throw new Error("Function not implemented.");
    },
    updateMany: function (resources: any, filter?: any, meta?: any): Promise<any> {
        throw new Error("Function not implemented.");
    }
}