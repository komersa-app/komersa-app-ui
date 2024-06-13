'use client'


import { CarDtoResponse, PageCarDtoResponse } from "@/provider/typescript-client/api";
import { Pageable } from "@/provider/typescript-client/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CarCard from "./card/carCard";
import CustomButton from "./button/Button";
import { carApi } from "@/provider";

export default function Recommandation() {
    const router = useRouter()
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
        <section className="flex flex-col items-center py-5  gap-10 ">
            <h1 className="text-center text-5xl font-[700]">Recommandations</h1>
            <div className="flex gap-5 py-10 px-10 flex-row flex-wrap">
                { 
                   carResponse?.content?.slice(0, 6).map((car: CarDtoResponse, index: number) => {
                    return (
                       <div key={index}><CarCard  car={car}/></div> 
                    );
                  })
                }
            </div>
            <CustomButton handleClick={()=> router.push('/cars')} type="button">View all cars</CustomButton>
        </section>
    );
}