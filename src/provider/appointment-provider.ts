import { CustomDataProvider } from "./type";
import { appointmentApi } from "./api";
import { AppointmentDtoRequest, Pageable } from "./typescript-client";

export const appointmentProvider : CustomDataProvider = {
    getList: async function (page?: number, perPage?: number, sort?: any, filter?: any, meta?: any) {
        const pageable: Pageable = {};
        const appointments = await appointmentApi().getAllAppointment(pageable);
        return appointments.data.content;
    },
    getOne: async function (id: string) {
        const appointment = await appointmentApi().getAppointmentById(parseInt(id));
        return appointment.data;
    },
    save: async function (resources: AppointmentDtoRequest, meta?: any) {
        const appointment = await appointmentApi().createAppointment(resources);
        return appointment.data;
    },
    update: async function (id: string, resources: AppointmentDtoRequest, meta?: any) {
        const appointment = await appointmentApi().updateAppointment(parseInt(id), resources);
        return appointment.data;
    },
    delete: async function (id: string) {
        const appointment = await appointmentApi().deleteAppointment(parseInt(id));
        return appointment.data;
    },
    getManyReference: function (referenceId: string, meta?: any): Promise<any> {
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