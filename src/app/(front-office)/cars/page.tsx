'use client'
import {  CarDtoResponse, PageCarDtoResponse } from "@/provider/typescript-client/api";
import { carApi } from "@/provider";
import { Pageable } from "@/provider/typescript-client/api";
import { useEffect, useState } from "react";
import CarCard from "@/components/card/carCard";

export default function Recommandation() {
    const [carResponse, setCarResponse] = useState<PageCarDtoResponse | undefined>();
    const carController = carApi();
    const pageable: Pageable = {};
    
    useEffect(() => {
           const fetchCars = async () =>{
            await carController.getAllCar(pageable).then(res =>{
            const response = res.data
            setCarResponse(response)
            
        }).catch(error => {
            console.log(error)
        })}
        fetchCars()
    }, [pageable])
    
    return(
        <section className="flex flex-col items-center px-auto py-6 ">
            <h1 className="text-center text-5xl font-[700]">View Cars</h1>
            <ul className="flex gap-5 flex-row flex-wrap">
                { 
                   carResponse?.content?.map((car: CarDtoResponse, index: number) => {
                    return (
                       <li key={index}><CarCard  car={car}/></li> 
                    );
                  })
                }
            </ul>
        </section>
    );
}