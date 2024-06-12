import { AdminControllerApi, AppointmentControllerApi, CarControllerApi, BrandControllerApi, ImagesControllerApi, LoginControllerApi, PricesControllerApi, VisitorControllerApi } from "./typescript-client";


export const brandApi = () => new BrandControllerApi();
export const priceApi = () => new PricesControllerApi();
export const carApi = () => new CarControllerApi();
export const imageApi = () => new ImagesControllerApi();
export const adminApi = () =>  new AdminControllerApi();
export const appointmentApi = () => new AppointmentControllerApi();
export const visitorApi = () => new VisitorControllerApi();
export const loginApi = () => new LoginControllerApi();