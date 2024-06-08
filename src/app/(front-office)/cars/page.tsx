'use client'
import { ImagesControllerApi , ImagesDtoResponse, PageImagesDtoResponse } from "../../components/provider/typescript-client";
import { Pageable } from "../../components/provider/typescript-client";
import { useEffect, useState } from "react";
import CarCard from "../../components/card/carCard";

export default function Recommandation() {
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
        <section className="flex flex-col items-center px-auto py-6 ">
            <h1 className="text-center text-5xl font-[700]">View Cars</h1>
            <ul className="flex gap-5 flex-row flex-wrap">
                { 
                   carResponse?.content?.map((car: ImagesDtoResponse, index: number) => {
                    return (
                       <li key={index}><CarCard  car={car}/></li> 
                    );
                  })
                }
            </ul>
        </section>
    );
}