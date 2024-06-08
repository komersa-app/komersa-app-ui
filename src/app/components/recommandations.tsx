'use client'
import { ImagesControllerApi , ImagesDtoResponse, PageImagesDtoResponse } from "./provider/typescript-client";
import { Pageable } from "./provider/typescript-client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CarCard from "./card/carCard";
import CustomButton from "./button/Button";

export default function Recommandation() {
    const router = useRouter()
    const [carResponse, setCarResponse] = useState<PageImagesDtoResponse | undefined>();
    const carController = new ImagesControllerApi();
    const pageable: Pageable = {};
    
    useEffect(() => {
           const fetchCars = async () =>{
            await carController.getAllImages(pageable).then(res =>{
            const response = res.data
            setCarResponse(response)
            
        }).catch(error => {
            console.log(error)
        })}
        fetchCars()
    }, [pageable])
    
    return(
        <section className="flex flex-col items-center px-auto py-10 gap-10 ">
            <h1 className="text-center text-5xl font-[700]">Recommandations</h1>
            <ul className="flex gap-5 flex-row flex-wrap">
                { 
                   carResponse?.content?.slice(0, 6).map((car: ImagesDtoResponse, index: number) => {
                    return (
                       <li key={index}><CarCard  car={car}/></li> 
                    );
                  })
                }
            </ul>
            <CustomButton handleClick={()=> router.push('/cars')} type="button">View all cars</CustomButton>
        </section>
    );
}