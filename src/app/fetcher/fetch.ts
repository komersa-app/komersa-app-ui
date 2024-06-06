import { Car } from "../type/car";

export async function getAllCars() {
    const data= await fetch("https://freetestapi.com/api/v1/cars")
    const response: Car[]  = await data.json();
    return response;
}

export async function getCarById(carId: number) {
    const data = await fetch(`https://freetestapi.com/api/v1/cars/${carId}`)
    const response: Car = await data.json();
    return response;
}

export async function getLimitedCar(limit: number) {
    const data = await fetch(`https://freetestapi.com/api/v1/cars/?limit=${limit}`)
    const response: Car[] = await data.json();
    return response;
}