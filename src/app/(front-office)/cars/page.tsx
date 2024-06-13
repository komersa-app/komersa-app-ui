'use client'
import {  CarDtoResponse, PageCarDtoResponse } from "@/provider/typescript-client/api";
import { carApi } from "@/provider";
import { Pageable } from "@/provider/typescript-client/api";
import { useEffect, useState } from "react";
import CarCard from "@/components/card/carCard";
import Brand from "@/components/filter/brand";
import SearchBar from "@/components/filter/SearchBar";

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
        <section className="flex flex-col gap-10 items-center py-6 ">
            <h1 className="text-center text-5xl font-[700]">Filter Cars</h1>
            <div className="h-0 w-full flex items-center justify-center">
                <SearchBar />
            </div>
            <h1 className="text-center mt-3 text-3xl font-[700]">Our available brands</h1>
            <Brand />
            <h1 className="text-center text-5xl font-[700]">View Cars</h1>
            <div className="flex gap-5 py-10 px-10  flex-row flex-wrap">
                { 
                   carResponse?.content?.map((car: CarDtoResponse, index: number) => {
                    return (
                       <div key={index}><CarCard  car={car}/></div> 
                    );
                  })
                }
            </div>
        </section>
    );
}